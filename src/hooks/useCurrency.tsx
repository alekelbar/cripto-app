import styled from "@emotion/styled";
import { Currency } from "../interfaces/Curency_interface";
import { useState } from "react";

interface UseCurrencyProps {
  label: string;
  currencies: Currency[];
}

const Label = styled.label`
  color: white;
  font-size: 1rem;
  font-style: oblique;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  appearance: none;
`;

export const useCurrency = ({
  currencies: currencies,
  label,
}: UseCurrencyProps) => {
  const [selected, setSelected] = useState("");

  const SelectCurrency = () => {
    return (
      <FormContainer>
        <Label htmlFor={label}>{label}</Label>
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          id={label}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => {
            return (
              <option key={currency.name} value={currency.name}>
                {currency.fullName}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    );
  };

  return [SelectCurrency, selected];
};
