"use client";

import { LoaderCircle } from "lucide-react";
import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();

  return (
    <>
      {pending && (
        <div className="fixed top-0 left-0 flex h-dvh w-full items-center justify-center">
          <LoaderCircle size={64} className="animate-spin text-blue-600" />
        </div>
      )}
    </>
  );
}
