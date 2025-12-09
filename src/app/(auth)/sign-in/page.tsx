import { LoginForm } from "@/components/login-form";
import MainLayout from "@/components/main-layout";
import { height } from "@/lib/default-values";

export default async function page() {
  return (
    <MainLayout className="flex items-center justify-center p-6 md:p-10">
      <LoginForm style={{ transform: `translateY(-${height / 2}px)` }} />
    </MainLayout>
  );
}
