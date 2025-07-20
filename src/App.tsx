import { useCallback, useState } from "react";
import Flow from "./components/Flow";
import Sidebar from "./components/Sidebar";
import { Button } from "./components/ui/button";
import {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";
import { toast } from "sonner";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const App = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onUpdateNode = useCallback(
    (nodeId: string, data: Record<string, unknown>) => {
      setNodes(
        (nds: Node[]) =>
          nds.map((node: Node) =>
            node.id === nodeId
              ? { ...node, data: { ...node.data, ...data } }
              : node
          ) as Node[]
      );
    },
    [setNodes]
  );

  const onClearSelection = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  const handleSave = () => {
    if (nodes.length > 1) {
      const nodesWithoutIncomingEdges = nodes.filter(
        (node: Node) => !edges.some((edge: Edge) => edge.target === node.id)
      );

      if (nodesWithoutIncomingEdges.length > 1) {
        toast.error("More than one node has empty target");
        return;
      }
    }

    console.log("Saving flow...", { nodes, edges });
    toast.success("Flow saved successfully!");
  };

  return (
    <ReactFlowProvider>
      <div className="flex flex-col w-full min-h-screen bg-background">
        <div className="h-[60px] bg-background border-b border-border flex flex-row w-full items-center justify-between px-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground">
            Chatbot Creator
          </h4>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-[calc(100vh-60px)] p-2 bg-background gap-2">
          <div className="flex w-full md:w-9/12 h-2/3 md:h-full bg-blue-100 dark:bg-blue-950 rounded-sm border border-border">
            <Flow
              onNodeSelect={setSelectedNodeId}
              nodes={nodes}
              setNodes={setNodes}
              edges={edges}
              setEdges={setEdges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
            />
          </div>
          <div className="flex w-full md:w-3/12 h-1/3 md:h-full border rounded-sm border-border bg-background">
            <Sidebar
              selectedNodeId={selectedNodeId}
              nodes={nodes}
              onUpdateNode={onUpdateNode}
              onClearSelection={onClearSelection}
            />
          </div>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default App;
