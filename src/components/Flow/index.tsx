import { useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useReactFlow,
  type Node,
  type Edge,
  type Connection,
  type OnNodesChange,
  type OnEdgesChange,
} from "@xyflow/react";
import { TextNode } from "./nodes/TextNode";
import { ColorNode } from "./nodes/ColorNode";
import { NODE_LIST_ENUMS } from "@/constant/nodesList";

const nodeTypes = {
  textNode: TextNode,
  colorNode: ColorNode,
};

type FlowProps = {
  onNodeSelect: (nodeId: string | null) => void;
  nodes: Node[];
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
  edges: Edge[];
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
};

const Flow: React.FC<FlowProps> = ({
  onNodeSelect,
  nodes,
  setNodes,
  edges,
  setEdges,
  onNodesChange,
  onEdgesChange,
}) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) => {
      const sourceHasEdge = edges.some(
        (edge: Edge) =>
          edge.source === params.source &&
          edge.sourceHandle === params.sourceHandle
      );

      if (!sourceHasEdge) {
        setEdges((eds: Edge[]) => addEdge(params, eds));
      }
    },
    [edges, setEdges]
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onNodeSelect(node.id);
    },
    [onNodeSelect]
  );

  const onPaneClick = useCallback(() => {
    onNodeSelect(null);
  }, [onNodeSelect]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("text/plain");
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const dataType = (() => {
        if (type === NODE_LIST_ENUMS.colorNode) {
          return {
            color: "",
          };
        }
        return {
          text: "",
        };
      })();

      const newNode: Node = {
        id: uuidv4(),
        type,
        position,
        data: dataType,
      };

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background />
        <Controls className="!bg-background !border-border [&_button]:!bg-background [&_button]:!border-border [&_button]:!text-foreground [&_button:hover]:!bg-accent" />
        <MiniMap
          position="top-left"
          style={{
            height: 60,
            width: 100,
          }}
          className="!bg-card !border-border !border-2  block "
        />
      </ReactFlow>
    </div>
  );
};

export default Flow;
