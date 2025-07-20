import type { SingleNodeType } from "@/types/common";
import { MessageSquare } from "lucide-react";

enum NODE_LIST_ENUMS {
  textNode = "textNode",
}

const nodesList: SingleNodeType[] = [
  {
    id: NODE_LIST_ENUMS.textNode,
    icon: MessageSquare,
    label: "Text Message",
  },
];

export { nodesList, NODE_LIST_ENUMS };
