import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "../ui/textarea";
import type { voidFunction } from "@/types/common";

type SettingsPanelProps = {
  nodeId: string;
  nodeData?: Record<string, unknown>;
  onUpdateNode: (nodeId: string, data: Record<string, unknown>) => void;
  onBack?: voidFunction;
};

export const SettingsPanel = ({
  nodeId,
  nodeData,
  onUpdateNode,
  onBack,
}: SettingsPanelProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText((nodeData?.text as string) || "");
  }, [nodeData]);

  const handleSave = () => {
    onUpdateNode(nodeId, { text });
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {onBack && (
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
        )}
        <h3 className="text-sm font-semibold">Settings</h3>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Message Text</label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your message..."
          className="min-h-[100px]"
        />
      </div>

      <Button onClick={handleSave} className="w-full">
        Update Message
      </Button>
    </div>
  );
};
