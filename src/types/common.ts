import type { NODE_LIST_ENUMS } from "@/constant/nodesList";
import type { Node } from "@xyflow/react";
import type { LucideProps } from "lucide-react";

type Maybe<T> = T | null;
type MaybeEmptyArray<T> = T[] | [];
type voidFunction = () => void;

type SingleNodeType = {
  id: NODE_LIST_ENUMS;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};

type NodeInputType = React.FC<{
  nodeId: string;
  nodeData?: Node;
  // nodeData?: Record<string, unknown>;
  onUpdateNode: (nodeId: string, data: Record<string, unknown>) => void;
  onBack?: voidFunction;
}>;

export type {
  Maybe,
  MaybeEmptyArray,
  voidFunction,
  SingleNodeType,
  NodeInputType,
};
