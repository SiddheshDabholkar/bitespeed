import {
  BaseNode,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
  BaseNodeContent,
} from "@/components/base-node";
import type { NODE_LIST_ENUMS } from "@/constant/nodesList";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

type ColorNodeData = {
  color?: string;
};
type ColorNode = Node<ColorNodeData, NODE_LIST_ENUMS.colorNode>;
export const ColorNode: React.FC<NodeProps<ColorNode>> = ({ data }) => {
  return (
    <BaseNode className="w-64">
      <BaseNodeHeader>
        <BaseNodeHeaderTitle className="text-sm">
          Select Color
        </BaseNodeHeaderTitle>
      </BaseNodeHeader>
      <BaseNodeContent>
        {data?.color ? (
          <span
            style={{ height: 30, width: "100%", background: data.color }}
          ></span>
        ) : (
          <div className="text-sm text-muted-foreground">
            Click to Enter your color
          </div>
        )}
      </BaseNodeContent>

      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-blue-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-blue-500"
      />
    </BaseNode>
  );
};
