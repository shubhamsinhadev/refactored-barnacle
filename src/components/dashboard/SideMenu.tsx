"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

export default function SideMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 p-2">
      {List.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={cn(
            "w-full cursor-pointer rounded p-2 text-left font-bold text-gray-600 transition-all",
            pathname === item.path && "bg-gray-500 text-white",
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
