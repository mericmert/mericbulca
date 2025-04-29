import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SidebarTrigger } from "../ui/sidebar";

export default function ContentHeader() {
  return (
    <header className="bg-background sticky z-50 inset-x-0 top-0 h-14 gap-2 px-4">
      <div className="flex items-center h-full group">
        <div id="sidebar-toggle" className="md:hidden">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarTrigger className="-ml-1" />
              </TooltipTrigger>
              <TooltipContent>
                <div>Toggle sidebar (⌘+B)</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Separator orientation="vertical" className="md:hidden mx-2 !h-4" />
      </div>
    </header>
  );
}
