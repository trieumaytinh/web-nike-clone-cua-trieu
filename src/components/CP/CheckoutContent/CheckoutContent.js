import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
import OneProductInCheckout from "../OneProductInCheckout/OneProductInCheckout";
import "./CheckoutContent.css";
function CheckoutContent() {
  const ctx = useContext(ProductContext);
  const { productState } = ctx;
  const { price: finalPrice, items: finalItems } = productState;
  console.log("finalItems", finalItems);
  const allNullFinalItems = finalItems.findIndex((item) => item !== null);
  return (
    <div className="CC">
      <div className="CC-Wrapper">
        <div className="CC-LeftContainer">
          <p className="CC-LeftHeader">Bag</p>
          {allNullFinalItems === -1 && (
            <p style={{ marginTop: "10px" }}>There are no items in your bag.</p>
          )}
          {finalItems.map((item, itemIndexInBag) => {
            if (item !== null) {
              return (
                <OneProductInCheckout
                  itemIndexInBag={itemIndexInBag}
                  {...item}
                />
              );
            }
          })}
        </div>
        <div className="CC-RightContainer">
          <p className="CC-RightHeader">Summary</p>
          <div className="CC-CheckoutContainer">
            <div className="CC-SubtotalContainer">
              <p>Subtotal</p>
              <p>{`$ ${finalPrice}`}</p>
            </div>
            <div className="CC-ShippingContainer">
              <p>Estimated Delivery & Handling</p>
              {finalPrice === 0 && <p>$ 0</p>}
              {finalPrice > 0 && <p>$ 10</p>}
            </div>
          </div>
          <div className="CC-TotalContainer">
            <div className="CC-Total">
              <p>Total</p>
              {finalPrice === 0 && <p>$ 0</p>}
              {finalPrice > 0 && <p>{`$ ${finalPrice + 10}`}</p>}
            </div>
          </div>
          {allNullFinalItems === -1 && (
            <button
              style={{
                backgroundColor: "rgb(245, 245, 245)",
                color: "rgb(204, 204, 204)",
                cursor: "default",
              }}
              className="CC-CheckoutBtn"
            >
              Checkout
            </button>
          )}

          {allNullFinalItems !== -1 && (
            <button className="CC-CheckoutBtn">Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutContent;
