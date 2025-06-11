import { z } from "zod";

export const paymentMethods = ["credit", "debit", "cash"] as const;

export const PaymentMethodEnum = z.enum(paymentMethods, {
  required_error: "Por favor, selecione um método de pagamento",
  invalid_type_error: "Método de pagamento inválido",
});

export const addressFormSchema = z.object({
  zip: z.string().nonempty("Informe o CEP"),
  street: z.string().nonempty("Informe o endereço"),
  number: z.string().nonempty("Informe o número"),
  additional: z.string(),
  district: z.string().nonempty("Informe o bairro"),
  city: z.string().nonempty("Informe a cidade"),
  state: z.string().nonempty("Informe o estado"),
  paymentMethod: PaymentMethodEnum.refine((val) => val !== undefined, {
    message: "Selecione um método de pagamento",
  }),
});
