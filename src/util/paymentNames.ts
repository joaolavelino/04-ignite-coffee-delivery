export function paymentNames(method: "credit" | "debit" | "cash") {
  switch (method) {
    case "cash":
      return "Dinheiro";

    case "credit":
      return "Cartão de crédito";

    case "debit":
      return "Cartão de débito";

    default:
      break;
  }
}
