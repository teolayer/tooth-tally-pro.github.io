import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu, Sun, Moon, UserPlus } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNewPatient = () => {
    navigate("/patients/new");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="dental-header sticky top-0 z-40 h-16 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="mr-4 text-primary-foreground hover:bg-white/10" />
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">Dentaly</h1>
                <p className="text-xs text-primary-foreground/80">Sistema de Gestión Dental</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleNewPatient}
                className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Nuevo Paciente
              </button>
              
              <button 
                onClick={toggleTheme}
                className="bg-white/20 text-primary-foreground p-2 rounded-lg hover:bg-white/30 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
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