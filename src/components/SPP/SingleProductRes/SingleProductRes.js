import "./SingleProductRes.css";
import { useHistory, useParams } from "react-router-dom";
import { data } from "../../../data";
import { ProductContext } from "../../../store/ProductContext";
import { useContext, useState } from "react";
function SingleProductRes() {
  const [imgShow, setImgShow] = useState(0);
  const history = useHistory();
  //! Phần phía /product trên url  !//
  const { id } = useParams();
  const ctx = useContext(ProductContext);
  const { dispatchProduct } = ctx;
  const indexInObj = +id.slice(id.length - 1, id.length);
  //! indexInObj là cái số cuối cùng của url !//
  const productIndexInData = +id.slice(0, id.length - 1);
  const productChosen = data[+productIndexInData];
  const {
    name,
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
    subs,
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
    // checkoutProduct = { name, gender, type, price, mainColor, i592 };
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
  const nextSlide = () => {
    setImgShow((oldIndex) => {
      let index = oldIndex + 1;
      if (index > fourImageShow.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setImgShow((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = fourImageShow.length - 1;
      }
      return index;
    });
  };
  return (
    <div className="SPR">
      <div className="SPR-TextContainer">
        <p>{name}</p>
        <p>{`${gender}'s ${type}`}</p>
        <p>{`$${price}`}</p>
      </div>
      <div className="SPR-ImageContainer">
        <img
          className="SPR-Blank"
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoe-WrLlWX.png"
          alt="Nike1"
        />
        {fourImageShow.map((img, imgIndex) => {
          let position = "nextImg";
          if (imgIndex === imgShow) {
            position = "activeImg";
          }
          if (
            imgIndex === imgShow - 1 ||
            (imgShow === 0 && imgIndex === fourImageShow.length - 1)
          ) {
            position = "lastImg";
          }

          return <img src={img} className={position} />;
        })}
        <svg
          onClick={prevSlide}
          className="SPR-LeftIcon"
          aria-hidden="true"
          fill="#111"
          height="30px"
          width="30px"
          viewBox="0 0 185.4 300"
        >
          <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
        </svg>
        <svg
          onClick={nextSlide}
          className="SPR-RightIcon"
          aria-hidden="true"
          fill="#111"
          height="30px"
          width="30px"
          viewBox="0 0 185.4 300"
        >
          <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
        </svg>
      </div>
      <div className="SPR-OtherContainer">
        {otherImgShow.map((otherImg, otherImgIndex) => {
          if (otherImg !== "") {
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
      <div className="SPR-SizeContainer">
        <div className="SPR-SizeTextContainer">
          <p>Select Size</p>
          <p>Size Guide</p>
        </div>
        <div className="SPR-ButtonContainer">
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
      <div className="SPR-CheckoutContainer">
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
  );
}
export default SingleProductRes;
