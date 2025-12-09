import { height } from "@/lib/default-values";
import { cn } from "@/lib/utils";
import React from "react";

export default function MainLayout({
  style,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="main-layout"
      style={{ ...style, minHeight: `calc(100dvh - ${height}px)` }}
      className={cn("bg-gray-200", className)}
      {...props}
    />
  );
}
