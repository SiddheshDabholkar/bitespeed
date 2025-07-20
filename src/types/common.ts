import type { NODE_LIST_ENUMS } from "@/constant/nodesList";
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

export type { Maybe, MaybeEmptyArray, voidFunction, SingleNodeType };
