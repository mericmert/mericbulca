import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SidebarTrigger } from "../ui/sidebar";

export default function ContentHeader() {
  return (
    <header className="flex bg-background sticky z-50 inset-x-0 top-0 h-14 shrink-0 items-center gap-2 px-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger className="-ml-1" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle sidebar (⌘+B)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
    </header>
  );
}
