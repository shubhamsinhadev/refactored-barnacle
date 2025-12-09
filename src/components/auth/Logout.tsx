"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.success("Logout successful");
              router.push("/");
            },
          },
        });
      }}
      className="rounded bg-red-600 p-2 font-bold text-white"
    >
      Logout
    </button>
  );
}
