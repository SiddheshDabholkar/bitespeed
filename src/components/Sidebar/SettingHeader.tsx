import type { voidFunction } from "@/types/common";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

type SettingHeaderProps = React.FC<{
  onBack?: voidFunction;
}>;
const SettingHeader: SettingHeaderProps = ({ onBack }) => {
  return (
    <div className="flex items-center gap-2">
      {onBack && (
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
      )}
      <h3 className="text-sm font-semibold">Settings</h3>
    </div>
  );
};

export default SettingHeader;
