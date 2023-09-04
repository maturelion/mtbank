import React from "react";
import { CreditCardsStyle } from "./CreditCards.styled";
import CreditCard from "../CreditCard/CreditCard";

const CreditCards = (props) => {
  const { pockets } = props;

  return (
    <CreditCardsStyle>
      {pockets &&
        pockets.map((data, index) => (
          <CreditCard
            key={index}
            card_name={data.card_name}
            card_number={data.card_number}
            card_caption={data.card_caption}
            card_balance={data.card_balance}
            bg_img={data.bg_img}
          />
        ))}
    </CreditCardsStyle>
  );
};

export default CreditCards;
