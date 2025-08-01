import * as React from 'react'
import {
  IconAlertTriangle,
  IconBox,
  IconCategory2,
  IconDashboard,
  IconFingerprint,
  IconInnerShadowTop,
  IconPackageExport,
  IconReportAnalytics,
  IconSettings,
} from '@tabler/icons-react'

import { NavDocuments } from '@/components/nav-documents'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: { name: "Fabrizzio Zambrano", email: "admin@kanri.app", avatar: "/avatar.png" },
  navMain: [
    { title: "Dashboard", url: "/", icon: IconDashboard },
    { title: "Productos", url: "/products", icon: IconBox },
    { title: "Categorías", url: "/categories", icon: IconCategory2 },
    { title: "Stock", url: "/stock", icon: IconPackageExport },
    { title: "Reportes", url: "/reports", icon: IconReportAnalytics },
    { title: "Alertas", url: "/alerts", icon: IconAlertTriangle },
  ],
  navSecondary: [
    { title: "Configuración", url: "/settings", icon: IconSettings },
    { title: "Auditoría", url: "/audit", icon: IconFingerprint },
  ],
  documents: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
