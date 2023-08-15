import styled from "@emotion/styled";
import { CurrencySelected } from "../interfaces/Currency_selected";
import { CurrencyTransaction } from "../interfaces/Currency_transacction";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Text = styled.p`
  font-size: 1rem;
  color: white;
`;

const TextData = styled.span`
  font-size: 1rem;
  color: #00adb5;
  font-weight: 700;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const ImageCripto = styled.img`
  width: 100%;
`;

const ImageContainer = styled.section`
  display: flex;
  place-items: center;
`;

const DataContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface DataPriceProps {
  data: CurrencyTransaction;
  selectedValues: CurrencySelected;
}

export const DataPrice: React.FC<DataPriceProps> = ({
  data,
  selectedValues,
}) => {
  const coinInfo = data[selectedValues.from][selectedValues.to];
  return (
    <div>
      {Object.keys(data).length == 0 ? null : (
        <Container>
          <ImageContainer>
            <ImageCripto
              src={`https://www.cryptocompare.com/${coinInfo.IMAGEURL}`}
            />
          </ImageContainer>
          <DataContainer>
            <Price>
              El precio es de: <TextData>{coinInfo.PRICE}</TextData>
            </Price>
            <Text>
              El precio más alto del día:{" "}
              <TextData>{coinInfo.HIGHDAY}</TextData>
            </Text>
            <Text>
              El precio más bajo del día:<TextData>{coinInfo.LOWDAY}</TextData>
            </Text>
            <Text>
              Variación últimas 24hrs:{" "}
              <TextData>{coinInfo.CHANGEPCT24HOUR}</TextData>
            </Text>
            <Text>
              Última actualización: <TextData>{coinInfo.LASTUPDATE}</TextData>
            </Text>
          </DataContainer>
        </Container>
      )}
    </div>
  );
};
