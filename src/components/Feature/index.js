import React from "react";
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Promoção do dia</h1>
      <p>Burguer A copm 40% de desconto use o codigo #ota9z0.</p>
      <FeatureButton>Pedir agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
