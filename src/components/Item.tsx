import React from "react";

import Button from "@material-ui/core/Button";
// Types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <div className="item-cover">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-content">
        <div className="item-title">
          <h3> {item.title} </h3>
        </div>
        <div className="desc">
          <p> {item.description} </p>
        </div>
        <h3> ${item.price} </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
