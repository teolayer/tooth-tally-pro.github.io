import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  Settings,
  DollarSign,
  Home,
  Building2,
  UserPlus,
  Search,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Agenda de turnos", url: "/schedule", icon: Calendar },
  { title: "Pacientes", url: "/patients", icon: Users },
  { title: "Nuevo paciente", url: "/patients/new", icon: UserPlus },
  { title: "Buscar paciente", url: "/patients/search", icon: Search },
  { title: "Administración", url: "/administration", icon: Building2 },
  { title: "Finanzas", url: "/finances", icon: DollarSign },
  { title: "Configuración", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavClassName = (path: string) => {
    const active = isActive(path);
    return `transition-colors duration-200 ${
      active 
        ? "bg-primary text-primary-foreground font-medium shadow-sm" 
        : "text-foreground/70 hover:text-foreground hover:bg-accent"
    }`;
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">+</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-foreground">Dentaly</h2>
                <p className="text-xs text-muted-foreground">Dr. Teo Layerenza</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wide">
            {!collapsed ? "Navegación Principal" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClassName(item.url)}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t">
          <SidebarMenuButton asChild>
            <button className="flex items-center w-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-3">Cerrar sesión</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}