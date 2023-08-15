import styled from "@emotion/styled";
import "./App.css";
import image from "./assets/cripto_image.png";
import { CriptoForm } from "./components/Form";
import { useEffect, useState } from "react";
import { CurrencySelected } from "./interfaces/Currency_selected";
import { apiBase } from "./api/instance";
import {
  ApiPriceResponse,
  CurrencyTransaction,
} from "./interfaces/Currency_transacction";
import { DataPrice } from "./components/DataPrice";

const Panel = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    max-width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageCripto = styled.img`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 50%;
  }
`;

const FormContainer = styled.div`
  padding: 10px 20px;
`;

function App() {
  const [selectedValues, setSelectedValues] = useState<CurrencySelected>({
    from: "",
    to: "",
  });

  const [transacction, setTransacction] = useState<{
    loading: boolean;
    data: CurrencyTransaction | null;
  }>({
    loading: true,
    data: null,
  });

  const onCurrenciesSeleted = (seleted: CurrencySelected) => {
    setTransacction({
      loading: true,
      data: null,
    });
    setSelectedValues(seleted);
  };

  useEffect(() => {
    if (Object.values(selectedValues).some((value) => value == "")) return;
    const loadData = async () => {
      const data = await apiBase.get<ApiPriceResponse>(
        `/data/pricemultifull?fsyms=${selectedValues.from}&tsyms=${selectedValues.to}`
      );
      setTransacction({
        loading: false,
        data: data.data.DISPLAY,
      });
    };

    loadData();
  }, [selectedValues]);

  return (
    <Panel>
      <ImageCripto
        src={image}
        alt="Imagen sobre la tematica de criptomonedas"
      />
      <FormContainer>
        <CriptoForm onCurrenciesSeleted={onCurrenciesSeleted} />
        {!transacction.loading && (
          <DataPrice
            data={transacction.data!}
            selectedValues={selectedValues}
          />
        )}
      </FormContainer>
    </Panel>
  );
}

export default App;
