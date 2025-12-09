import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  const userId = session.user.id;

  const product = await prisma.product.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="max-w-[calc(100dvw-40px)] overflow-x-scroll">
      <table className="table-auto border border-gray-400">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 whitespace-nowrap">{item.name}</td>
              <td className="border p-2 whitespace-nowrap">
                {item.description}
              </td>
              <td className="border p-2 whitespace-nowrap">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(item.price)}
              </td>
              <td className="border p-2 whitespace-nowrap">
                {item.createdAt.toDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
