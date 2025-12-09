import MainLayout from "@/components/main-layout";
import { RegistrationForm } from "@/components/registration-form";
import { height } from "@/lib/default-values";

export default async function page() {
  return (
    <MainLayout className="flex items-center justify-center p-6 md:p-10">
      <RegistrationForm style={{ transform: `translateY(-${height / 2}px)` }} />
    </MainLayout>
  );
}
