import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../button";

export interface CheckoutMenuProps {}

type Inputs = {
  plz: string;
  straßenname: string;
  hausnummer: string;
  adresszusatz: string;
  stadtviertel: string;
  ort: string;
};

export const CheckoutMenu: React.FC<CheckoutMenuProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <div>
            <MapPin />
          </div>
          <div>
            <h3>Lieferadresse</h3>
            <p>
              Bitte geben Sie die Adresse an, an die Sie Ihre Bestellung
              erhalten möchten.
            </p>
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="PLZ"
              aria-label="Postleitzahl"
              id="plz"
              {...register("plz")}
              required
            />
            <input
              type="text"
              placeholder="Straßenname"
              aria-label="straßenname"
              id="straßenname"
              {...register("straßenname")}
              required
            />
            <div className="inputLine">
              <input
                type="text"
                id="hausnummer"
                placeholder="Hausnummer"
                aria-label="Hausnummer"
                {...register("hausnummer")}
                required
              />
              <input
                type="text"
                id="adresszusatz"
                placeholder="Adresszusatz (optional)"
                aria-label="adresszusatz"
                {...register("adresszusatz")}
              />
            </div>
            <div className="inputLine">
              <input
                type="text"
                id="stadtviertel"
                placeholder="Stadtviertel"
                aria-label="stadtviertel"
                {...register("stadtviertel")}
                required
              />
              <input
                type="text"
                id="ort"
                placeholder="Ort"
                aria-label="ort"
                {...register("ort")}
                required
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <CurrencyDollar />
          </div>
          <div>
            <h3>Zahlung</h3>
            <p>
              Die Zahlung erfolgt bei Lieferung. Wählen Sie Ihre Zahlungsmethode
            </p>
            <div>
              <div className="paymentSelector" selected={false}>
                <CreditCard /> Kreditkarte
              </div>

              <div className="paymentSelector" selected={false}>
                <Bank /> Kreditkarte
              </div>

              <div className="paymentSelector" selected={false}>
                <Money /> Bargeld
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
