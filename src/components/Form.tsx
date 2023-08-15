import styled from "@emotion/styled";
import { useCurrency } from "../hooks/useCurrency";
import { Currency } from "../interfaces/Curency_interface";
import { useEffect, useState } from "react";
import { CurrencyApiResponse, apiBase } from "../api/instance";
import { CurrencySelected } from "../interfaces/Currency_selected";

const FormContainer = styled.form`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 1.5em;

  @media (min-width: 678px) {
    font-size: 2em;
  }

  &:after {
    content: "";
    display: block;
    background-color: #00adb5;
    width: 100px;
    height: 5px;
    margin: 0 auto;
  }
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px 20px;
  color: white;
  background-color: black;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  font-size: large;

  &:hover {
    background-color: #00acb57a;
  }

  &:disabled {
    background-color: #00acb51a;
  }
`;

const currencies: Currency[] = [
  {
    name: "CRC",
    fullName: "Colón de Costa Rica",
  },
  {
    name: "USD",
    fullName: "Dolar de Estados Unidos",
  },
  {
    name: "MXN",
    fullName: "Peso Mexicano",
  },
  {
    name: "EUR",
    fullName: "Euro",
  },
  {
    name: "GBP",
    fullName: "Libra esterlina",
  },
];

interface CriptoFormProps {
  onCurrenciesSeleted: (seleted: CurrencySelected) => void;
}

export const CriptoForm: React.FC<CriptoFormProps> = ({
  onCurrenciesSeleted,
}) => {
  const [criptoCurrencies, setCriptoCurrencies] = useState<Currency[]>([]);

  const [formInvalid, setFormInvalid] = useState(true);

  const [SelectCurrencys, selectedCurrency] = useCurrency({
    currencies: currencies,
    label: "Elige tu moneda",
  });

  const [SelectCriptoCurrencys, selectedCriptoCurrency] = useCurrency({
    currencies: criptoCurrencies,
    label: "Elige tu Criptomoneda",
  });

  useEffect(() => {
    setFormInvalid(
      [
        selectedCurrency.toString().trim(),
        selectedCriptoCurrency.toString(),
      ].includes("")
    );
  }, [selectedCurrency, selectedCriptoCurrency]);

  useEffect(() => {
    const loadCriptoCurrencies = async () => {
      const data = await apiBase.get<CurrencyApiResponse>(
        "/data/top/mktcapfull?limit=20&tsym=USD"
      );
      const currenciesFromApi = data.data.Data;

      const criptoCurrencies = currenciesFromApi.map((c) => {
        return {
          name: c.CoinInfo.Internal,
          fullName: c.CoinInfo.FullName,
        } as Currency;
      });
      setCriptoCurrencies(criptoCurrencies);
    };
    loadCriptoCurrencies();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cripto = selectedCriptoCurrency as string;
    const currency = selectedCurrency as string;

    onCurrenciesSeleted({
      from: cripto,
      to: currency,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Cotiza Criptomonedas al Instante</Title>
      <SelectCurrencys />
      <SelectCriptoCurrencys />
      <SubmitButton type="submit" disabled={formInvalid}>
        Cotizar
      </SubmitButton>
    </FormContainer>
  );
};
