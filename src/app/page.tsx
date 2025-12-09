import MainLayout from "@/components/main-layout";
import StarterPageNotAuth from "@/components/not-auth/StarterPageNotAuth";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/dashboard");

  return (
    <MainLayout className="p-6">
      <StarterPageNotAuth />
    </MainLayout>
  );
}
