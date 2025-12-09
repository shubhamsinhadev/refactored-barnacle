import { height } from "@/lib/default-values";
import { CircleUserRound, Hexagon } from "lucide-react";
import Link from "next/link";
import MenuSiderbar from "./MenuSiderbar";

export const HeaderMain = () => {
  return (
    <header
      style={{ height: `${height}px` }}
      className="sticky flex flex-row items-center gap-4 bg-white px-4 shadow"
    >
      <MenuSiderbar />
      <Link href={"/"}>
        <Hexagon />
      </Link>
      <Link href={"/user"} className="ml-auto">
        <CircleUserRound />
      </Link>
    </header>
  );
};
