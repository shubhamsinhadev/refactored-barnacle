import Logout from "@/components/auth/Logout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function UserPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-md overflow-y-scroll border border-gray-200 p-4 shadow">
      <h1>Welcome {session.user.name}</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <Logout />
    </div>
  );
}
