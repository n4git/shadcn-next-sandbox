import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset,SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
