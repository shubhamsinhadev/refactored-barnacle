"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { IProduct } from "@/lib/zod";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const addProduct = async (props: IProduct) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  const userId = session.user.id;

  try {
    await prisma.product.create({
      data: {
        userId,
        ...props,
        inventory: {
          create: {
            quantity: 5,
          },
        },
      },
    });

    return { status: true };
  } catch (error) {
    return { status: false };
  }
};
