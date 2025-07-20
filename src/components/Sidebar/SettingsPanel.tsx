import type { NodeInputType } from "@/types/common";
import SettingHeader from "./SettingHeader";
import { NODE_LIST_ENUMS } from "@/constant/nodesList";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";

export const SettingsPanel: NodeInputType = ({
  nodeId,
  nodeData,
  onUpdateNode,
  onBack,
}) => {
  const isTextInput = nodeData && nodeData.type === NODE_LIST_ENUMS.textNode;
  const isColorInput = nodeData && nodeData.type === NODE_LIST_ENUMS.colorNode;

  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleSave = () => {
    const payload = (() => {
      if (isTextInput) {
        return { text };
      }
      if (isColorInput) {
        return { color };
      }
      return {};
    })();
    console.log("payload", payload);
    onUpdateNode(nodeId, payload);
    if (onBack) {
      onBack();
    }
  };

  const buttonText = (() => {
    if (isTextInput) {
      return "Update Message";
    }
    if (isColorInput) {
      return "Update Color";
    }
    return "";
  })();

  useEffect(() => {
    if (isTextInput) {
      setText((nodeData?.data as { text: string })?.text || "");
    }
    if (isColorInput) {
      setColor((nodeData?.data as { color: string })?.color || "");
    }
  }, [nodeData, isTextInput, isColorInput]);

  return (
    <div className="space-y-4">
      <SettingHeader onBack={onBack} />

      {isTextInput && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Message Text</label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your message..."
            className="min-h-[100px]"
          />
        </div>
      )}

      {isColorInput && (
        <div className="space-y-2 flex items-center">
          <label className="text-sm font-medium mb-0">Change color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              setColor(e.target.value);
            }}
          />
        </div>
      )}

      <Button onClick={handleSave} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
};
