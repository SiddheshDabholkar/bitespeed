import {
  BaseNode,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
  BaseNodeContent,
} from "@/components/base-node";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

type TextNodeData = {
  text?: string;
};
type TextNode = Node<TextNodeData, "textNode">;
export const TextNode: React.FC<NodeProps<TextNode>> = ({ data }) => {
  return (
    <BaseNode className="w-64">
      <BaseNodeHeader>
        <BaseNodeHeaderTitle>Text Message</BaseNodeHeaderTitle>
      </BaseNodeHeader>
      <BaseNodeContent>
        <div className="text-sm text-muted-foreground">
          {data.text || "Click to Enter your message"}
        </div>
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
