import OneProductInCheckoutRes from "../OneProductInCheckoutRes/OneProductInCheckoutRes";
import "./CheckoutContentRes.css";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
function CheckoutContentRes() {
  const ctx = useContext(ProductContext);
  const { productState } = ctx;
  const { price: finalPrice, items: finalItems, number } = productState;
  const allNullFinalItems = finalItems.findIndex((item) => item !== null);

  return (
    <div className="CCR">
      <div className="CCR-BagContainer">
        <p className="CCR-BagHeader">Bag</p>
        <div className="CCR-ItemPriceContainer">
          <p>
            <span style={{ marginRight: "8px" }}>{`${number} Item |`}</span>
            {`$ ${finalPrice}`}
          </p>
        </div>
      </div>
      {finalItems.length === 0 && (
        <p style={{ marginTop: "20px" }}>There are no items in your bag.</p>
      )}
      {finalItems.map((item, itemIndexInBag) => {
        if (item !== null) {
          return (
            <OneProductInCheckoutRes
              itemIndexInBag={itemIndexInBag}
              {...item}
            />
          );
        }
      })}

      <div className="CCR-SummaryContainer">
        <p className="CCR-SummaryHeader">Summary</p>
        <div className="CCR-SubtotalContainer">
          <p>Subtotal</p>
          <p>{`$ ${finalPrice}`}</p>
        </div>
        <div className="CCR-ShippingContainer">
          <p>Estimated Delivery & Handling</p>
          {finalPrice === 0 && <p>$ 0</p>}
          {finalPrice > 0 && <p>$ 10</p>}
        </div>
        <div className="CCR-TotalContainer">
          <p>Total</p>
          {finalPrice === 0 && <p>$ 0</p>}
          {finalPrice > 0 && <p>{`$ ${finalPrice + 10}`}</p>}
        </div>
        {allNullFinalItems === -1 && (
          <button
            style={{
              backgroundColor: "rgb(245, 245, 245)",
              color: "rgb(204, 204, 204)",
              cursor: "default",
            }}
            className="CCR-CheckoutBtn"
          >
            Checkout
          </button>
        )}

        {allNullFinalItems !== -1 && (
          <button className="CCR-CheckoutBtn">Checkout</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutContentRes;
