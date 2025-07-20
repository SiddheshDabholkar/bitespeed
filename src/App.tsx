import Flow from "./components/Flow";
import Sidebar from "./components/Sidebar";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="h-[60px] bg-background border-b border-border flex flex-row w-full items-center justify-between px-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground">
          Chatbot Creator
        </h4>
        <div className="flex items-center gap-2">
          <Button>Save</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-[calc(100vh-60px)] p-2 bg-background gap-2">
        <div className="flex w-full md:w-9/12 h-2/3 md:h-full bg-blue-100 dark:bg-blue-950 rounded-sm border border-border">
          <Flow />
        </div>
        <div className="flex w-full md:w-3/12 h-1/3 md:h-full border rounded-sm border-border bg-background">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
