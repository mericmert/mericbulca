import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import ContentHeader from "@/components/layouts/content-header";

type NavLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AppLayout({ children }: NavLayoutProps) {
  return (
    <SidebarProvider>
      <div className="mx-auto flex w-6xl">
        <SidebarNav />
        <SidebarInset className="flex-1">
          <ContentHeader />
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
