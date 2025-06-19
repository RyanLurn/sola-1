import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppSidebar from "@/components/app-sidebar/main";
import AppSidebarTrigger from "@/components/app-sidebar/utils/trigger";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <main className="h-screen w-screen">
            <AppSidebarTrigger />
            <Outlet />
          </main>
          <div className="fixed top-2 right-2">
            <ModeToggle />
          </div>
        </SidebarProvider>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
