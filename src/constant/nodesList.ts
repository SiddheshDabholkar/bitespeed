import type { SingleNodeType } from "@/types/common";
import { MessageSquare } from "lucide-react";
// import { MessageSquare, Eye } from "lucide-react";

enum NODE_LIST_ENUMS {
  textNode = "textNode",
  colorNode = "colorNode",
}

const nodesList: SingleNodeType[] = [
  {
    id: NODE_LIST_ENUMS.textNode,
    icon: MessageSquare,
    label: "Text Message",
  },
  // {
  //   id: NODE_LIST_ENUMS.colorNode,
  //   icon: Eye,
  //   label: "Select Color",
  // },
];

export { nodesList, NODE_LIST_ENUMS };
