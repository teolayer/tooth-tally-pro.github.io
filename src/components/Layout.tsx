import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="dental-header sticky top-0 z-40 h-16 flex items-center px-6 shadow-sm">
            <SidebarTrigger className="mr-4 text-primary-foreground hover:bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">DentalPro</h1>
                <p className="text-xs text-primary-foreground/80">Sistema de Gestión Dental</p>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}