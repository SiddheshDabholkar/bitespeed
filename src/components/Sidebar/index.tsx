import type { Node } from "@xyflow/react";
import { NodesPanel } from "./NodesPanel";
import { SettingsPanel } from "./SettingsPanel";
import type { Maybe, MaybeEmptyArray, voidFunction } from "@/types/common";

type SidebarProps = {
  selectedNodeId: Maybe<string>;
  nodes: MaybeEmptyArray<Node>;
  onUpdateNode: (nodeId: string, data: Record<string, unknown>) => void;
  onClearSelection: voidFunction;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedNodeId,
  nodes,
  onUpdateNode,
  onClearSelection,
}) => {
  const selectedNode = selectedNodeId
    ? nodes.find((node) => node.id === selectedNodeId)
    : null;

  return (
    <div className="w-full h-full p-4 overflow-y-auto">
      {selectedNodeId ? (
        <SettingsPanel
          nodeId={selectedNodeId}
          nodeData={selectedNode!}
          onUpdateNode={onUpdateNode}
          onBack={onClearSelection}
        />
      ) : (
        <NodesPanel />
      )}
    </div>
  );
};

export default Sidebar;
