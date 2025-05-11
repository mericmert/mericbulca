"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import SiteLogo from "../site-logo";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Wrench } from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  disabled?: boolean;
}

const SidebarItems: Array<SidebarItem> = [
  { title: "About", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects", disabled: true },
  { title: "Media", href: "/media", disabled: true },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar variant="inset" className="border-r border-dashed">
      <SidebarHeader>
        <SiteLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.disabled ? (
                  <SidebarMenuButton
                    asChild
                    disabled
                    className="text-muted-foreground cursor-not-allowed pointer-events-none"
                  >
                    <div className="flex items-center gap-2 py-2">
                      <span>{item.title}</span>
                      <Wrench className="w-4 h-4" />
                    </div>
                  </SidebarMenuButton>
                ) : (
                  <SidebarMenuButton asChild>
                    <Link
                      className={cn(pathname == item.href ? "bg-sidebar-accent" : "bg-sidebar")}
                      href={item.href}
                      onClick={() => setOpenMobile(false)}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <ThemeToggle />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
