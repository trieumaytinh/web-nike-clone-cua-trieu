import { useContext, useRef, useState } from "react";
import { ProductContext } from "../../../store/ProductContext";
import "./OneProductInCheckout.css";

function OneProductInCheckout(props) {
  const selectRef = useRef();
  const { name, gender, type, price, mainColor, i592, number, itemIndexInBag } =
    props;
  const [productNumber, setProductNumber] = useState(number);
  function adjustCheckoutHandler(e) {
    const priceOf1Item = price / number;
    const updatedPriceOf1Item = priceOf1Item * +e.target.value;
    const updatedTotalNumber = +e.target.value - number;
    const gapPrice = updatedPriceOf1Item - price;
    setProductNumber(e.target.value);
    dispatchProduct({
      type: "ADJUSTCHECKOUT",
      data: [
        e.target.value,
        itemIndexInBag,
        updatedPriceOf1Item,
        updatedTotalNumber,
        gapPrice,
      ],
      //! Truyền lại cho Context số lượng mới được thay đổi và index của sản phẩm
      //! được thay đổi trong giỏ hàng
    });
  }
  function removeButtonHandler() {
    dispatchProduct({
      type: "REMOVEBUTTON",
      data: [itemIndexInBag, number, price],
    });
  }
  const ctx = useContext(ProductContext);
  const { dispatchProduct } = ctx;
  return (
    <div className="OPIC">
      <div className="OPIC-ImageContainer">
        <img src={i592} alt="" />
      </div>
      <div className="OPIC-InfoContainer">
        <div className="OPIC-NamePriceContainer">
          <p>{name}</p>
          <p>{`$${price}`}</p>
        </div>
        <div className="OPIC-Info">
          <p>{`${gender}'s ${type}`}</p>
          <p>{mainColor}</p>
        </div>
        <div className="OPIC-SizeContainer">
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            {type !== "Shoes" ? (
              <>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
              </>
            ) : (
              <>
                <option value="38">38</option>
                <option value="38.5">38.5</option>
                <option value="38">39</option>
                <option value="38">39.5</option>
                <option value="38">40</option>
                <option value="38">40.5</option>
                <option value="38">41</option>
                <option value="38">41.5</option>
                <option value="38">42</option>
                <option value="38">42.5</option>
                <option value="38">43</option>
                <option value="38">43.5</option>
                <option value="38">44</option>
                <option value="38">44.5</option>
                <option value="38">45</option>
                <option value="38">45.5</option>
                <option value="38">46</option>
                <option value="38">46.5</option>
                <option value="38">47</option>
                <option value="38">47.5</option>
                <option value="38">48</option>
              </>
            )}
          </select>
          <label htmlFor="quantity">Quantity</label>
          <select
            onChange={adjustCheckoutHandler}
            value={productNumber}
            ref={selectRef}
            name="size"
            id="quantity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="OPIC-IconContainer">
          <svg
            className="OPIC-HeartIcon"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
            ></path>
          </svg>
          <svg
            onClick={removeButtonHandler}
            className="OPIC-TrashIcon"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default OneProductInCheckout;
