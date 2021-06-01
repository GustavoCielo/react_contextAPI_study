import Button from "../Button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      {type === "catalogue" && (
        <Container>
          <h2>Lista de produtos:</h2>
          <ul>
            {catalogue.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <Button type={type} item={item} />
              </li>
            ))}
          </ul>
        </Container>
      )}
      {type === "cart" && (
        <Container>
          <h2>Carrinho de produtos:</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <Button type={type} item={item} />
              </li>
            ))}
          </ul>
        </Container>
      )}
    </div>
  );
};

export default ProductList;
