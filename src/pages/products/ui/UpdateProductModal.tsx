import { IProduct } from "@/entities/products/model/types";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productUpdateValidationSchema } from "@/entities/products/model/validation.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import useUpdateProduct from "@/entities/products/model/services/useUpdateProduct";
import LoadingSpinner from "@/shared/ui/loading-spinner";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  product: IProduct;
}

export default function UpdateProductModal({
  isOpen,
  onOpenChange,
  product,
}: Props) {
  const { updateProduct, isUpdatingProduct } = useUpdateProduct({
    id: product.id,
    onSuccess: () => {
      onOpenChange(false);
    },
  });

  const form = useForm({
    values: {
      title: product.title,
      price: product.price,
    },

    mode: "onChange",
    resolver: zodResolver(productUpdateValidationSchema),
  });

  const isButtonDisabled =
    Object.values(form.formState.errors).length > 0 ||
    !form.formState.isDirty ||
    isUpdatingProduct;

  const onSubmit = (data: Partial<IProduct>) => {
    updateProduct(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2"
          >
            <DialogHeader>
              <DialogTitle>Редактирование товара</DialogTitle>
              <DialogDescription>
                Введите данные для редактирования
              </DialogDescription>
            </DialogHeader>

            <section>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите название..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Цена</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Введите цену..."
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) => {
                          const value = e.target.value;

                          form.setValue(
                            "price",
                            value === "" ? 0 : Number(value),
                            { shouldDirty: true, shouldValidate: true }
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <DialogFooter>
              <Button disabled={isButtonDisabled} type="submit">
                Сохранить {isUpdatingProduct && <LoadingSpinner />}
              </Button>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                type="button"
              >
                Отмена
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
