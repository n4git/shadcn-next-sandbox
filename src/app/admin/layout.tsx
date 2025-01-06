import { SearchProvider } from "./context/search-context";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset,SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <SearchProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  );
}
