"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { IProduct, ZProduct } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { addProduct } from "@/server/product";
import { toast } from "sonner";

export default function AddProduct() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ZProduct),
  });

  const onSubmit = async (data: IProduct) => {
    const { status } = await addProduct(data);

    if (status) {
      toast.success("Product added successfully");
    } else {
      toast.error("Failed to add product");
    }
  };
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
          <CardDescription>Add a new product to your store</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input {...register("name")} />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea {...register("description")} />
                {errors.description && (
                  <FieldError>{errors.description.message}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="price">Price</FieldLabel>
                <Input {...register("price")} type="number" />
                {errors.price && (
                  <FieldError>{errors.price.message}</FieldError>
                )}
              </Field>
              <Field>
                <Button type="submit">
                  {isSubmitting ? "Loading..." : "Add Product"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => reset()}
                  className="cursor-pointer"
                >
                  Reset
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
