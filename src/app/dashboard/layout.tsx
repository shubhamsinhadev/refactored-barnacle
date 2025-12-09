import SideMenu from "@/components/dashboard/SideMenu";
import { height } from "@/lib/default-values";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ minHeight: `calc(100dvh - ${height}px)` }}
      className={cn("flex h-full w-full flex-row overflow-hidden bg-gray-100")}
    >
      <div className="hidden w-fit md:flex">
        <SideMenu />
      </div>

      <div className="flex-1 p-2 md:pl-0">
        <div className="h-full w-full rounded-md border-gray-200 bg-white p-4 shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
