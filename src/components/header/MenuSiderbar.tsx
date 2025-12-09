"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const List = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Product",
    path: "/dashboard/product",
  },
  {
    title: "Add Product",
    path: "/dashboard/add-product",
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
  },
  {
    title: "Customers",
    path: "/dashboard/customers",
  },
];

export default function MenuSiderbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer md:hidden">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px]">
        <SheetHeader>
          <SheetTitle>Welcome</SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col gap-2 p-2">
          {List.map((item, index) => (
            <SheetClose key={index} asChild>
              <button
                key={index}
                className={cn(
                  "w-full cursor-pointer rounded p-2 text-left font-bold text-gray-600 transition-all",
                  pathname === item.path && "bg-gray-500 text-white",
                )}
                onClick={() => router.push(item.path)}
              >
                {item.title}
              </button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
