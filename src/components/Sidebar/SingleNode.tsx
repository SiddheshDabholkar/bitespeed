import type { SingleNodeType } from "@/types/common";

const onDragStart = (event: React.DragEvent, nodeType: string) => {
  event.dataTransfer.setData("text/plain", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

type SingleNodeProps = React.FC<SingleNodeType>;
const SingleNode: SingleNodeProps = ({ id, icon, label }) => {
  const Icon = icon;
  return (
    <div
      className="flex items-center gap-2 p-3 border rounded-md cursor-grab hover:bg-accent"
      draggable
      onDragStart={(event) => onDragStart(event, id)}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default SingleNode;
