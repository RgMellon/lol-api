import React from "react";
import mainImage from "../../assets/image/main.png";

import * as S from "./styles";

export function Welcome() {
  return (
    <S.Container>
      <S.ImageApresentation source={mainImage} />

      <S.Title>Acompanhe os jogos que estão rolando</S.Title>
      <S.Subtitle>
        Veja os resultados alguns minutos antes da transmissão
      </S.Subtitle>

      <S.Button></S.Button>
    </S.Container>
  );
}
