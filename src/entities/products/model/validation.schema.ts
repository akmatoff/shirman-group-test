import z from "zod";

export const productUpdateValidationSchema = z.object({
  title: z.string({ required_error: "Это поле обязательное " }),
  price: z.number({ required_error: "Это поле обязательное" }),
});
