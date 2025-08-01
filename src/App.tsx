// src/App.tsx
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import AppRouter from "@/router/AppRouter"

export default function App() {
  const customStyle = {
  "--sidebar-width": "calc(var(--spacing) * 72)",
  "--header-height": "calc(var(--spacing) * 12)",
} as React.CSSProperties & Record<string, string>

  return (
    <SidebarProvider
      style={customStyle}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <AppRouter />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}