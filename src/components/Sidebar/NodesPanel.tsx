import nodesList from "@/constant/nodesList";
import SingleNode from "./SingleNode";

export const NodesPanel = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Nodes</h3>
      <div className="space-y-2">
        {nodesList.map((m, i) => (
          <SingleNode key={i} {...m} />
        ))}
      </div>
    </div>
  );
};
