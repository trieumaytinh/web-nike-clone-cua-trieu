import "./SingleProduct.css";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { data } from "../../../data";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../store/ProductContext";
function SingleProduct() {
  const history = useHistory();
  const { pathname } = useLocation();

  //! Phần phía /product trên url  !//
  const { id } = useParams();
  const ctx = useContext(ProductContext);
  const { dispatchProduct } = ctx;
  const indexInObj = +id.slice(id.length - 1, id.length);
  //! indexInObj là cái số cuối cùng của url !//
  const productIndexInData = +id.slice(0, id.length - 1);

  const productChosen = data[+productIndexInData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productIndexInData]);
  const {
    name,
    subs,
    gender,
    type,
    price,
    color: mainColor,
    i144,
    i592,
    i11080,
    i21080,
    i31080,
    i41080,
  } = productChosen;

  let fourImageShow;
  let checkoutProduct = {
    name,
    gender,
    type,
    price,
    mainColor,
    i592,
    number: 1,
  };
  if (indexInObj === 0) {
    fourImageShow = [i11080, i21080, i31080, i41080];
  } else {
    const { color, i592, i11080, i21080, i31080, i41080 } =
      subs[indexInObj - 1];
    fourImageShow = [i11080, i21080, i31080, i41080];
    checkoutProduct.mainColor = color;
    checkoutProduct.i592 = i592;
  }
  const otherImgShow = [i144];
  subs.forEach((subOtherImg) => {
    otherImgShow.push(Object.values(subOtherImg)[1]);
  });

  return (
    <div className="SP">
      <div className="SP-ImageContainer">
        {fourImageShow.map((image) => {
          return (
            <div className="SP-Image">
              <img src={image} />
            </div>
          );
        })}
      </div>
      <div className="SP-OptionContainer">
        <div className="SP-TextContainer">
          <p>{name}</p>
          <p>{`${gender}'s ${type}`}</p>
          <p>{`$${price}`}</p>
        </div>
        <div className="SP-OtherColorContainer">
          {otherImgShow.map((otherImg, otherImgIndex) => {
            if (otherImg) {
              return (
                <img
                  onClick={() => {
                    history.replace(
                      `/product/${productIndexInData}${otherImgIndex}`
                    );
                  }}
                  src={otherImg}
                />
              );
            }
          })}
        </div>
        <div className="SP-SizeContainer">
          <div className="SP-SizeTextContainer">
            <p>Select Size</p>
            <p>Size Guide</p>
          </div>
          <div className="SP-ButtonContainer">
            {type === "Shoes" ? (
              <>
                <button>EU 38</button>
                <button>EU 38.5</button>
                <button>EU 39</button>
                <button>EU 39.5</button>
                <button>EU 40</button>
                <button>EU 40.5</button>
                <button>EU 41</button>
                <button>EU 41.5</button>
                <button>EU 42</button>
                <button>EU 42.5</button>
                <button>EU 43</button>
                <button>EU 43.5</button>
                <button>EU 44</button>
                <button>EU 44.5</button>
                <button>EU 45</button>
                <button>EU 45.5</button>
                <button>EU 46</button>
                <button>EU 46.5</button>
                <button>EU 47</button>
                <button>EU 47.5</button>
                <button>EU 48</button>
              </>
            ) : (
              <>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>2XL</button>
                <button>3XL</button>
              </>
            )}
          </div>
        </div>
        <div className="SP-CheckoutContainer">
          <button
            onClick={() => {
              dispatchProduct({ type: "ADDNUMBER" });
              dispatchProduct({ type: "ADDPRODUCT", data: checkoutProduct });
            }}
          >
            Add to Bag
          </button>
          <button>Favourite</button>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
