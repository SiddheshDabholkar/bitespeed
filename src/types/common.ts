import type { LucideProps } from "lucide-react";

type Maybe<T> = T | null;
type MaybeEmptyArray<T> = T[] | [];
type voidFunction = () => void;

type SingleNodeType = {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};

export type { Maybe, MaybeEmptyArray, voidFunction, SingleNodeType };
