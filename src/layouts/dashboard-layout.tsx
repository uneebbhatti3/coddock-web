import Header from "@/components/common/header";
import MobileDashboardSidebar from "@/components/common/mobile-dashboard-sidebar";
import NavAside from "@/components/common/nav-aside";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 h-20 border-b border-border bg-background">
        <div className="relative h-full">
          <div className="absolute left-4 top-1/2 z-50 -translate-y-1/2 md:hidden">
            <MobileDashboardSidebar />
          </div>

          <Header />
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-20 z-30 hidden border-r border-border bg-background md:block md:w-20 lg:w-[270px]">
        <div className="hidden h-full lg:block">
          <NavAside />
        </div>

        <div className="h-full lg:hidden">
          <NavAside collapsed />
        </div>
      </aside>

      <main className="min-h-screen pt-20 md:pl-20 lg:pl-[270px]">
        <div className="h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
