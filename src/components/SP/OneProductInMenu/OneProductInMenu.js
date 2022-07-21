import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./OneProductInMenu.css";
import "./OneProductInMenuResponsive.css";
function OneProductInMenu(props) {
  //! props này được truyền từ ShoppingMenu !//
  //! Đổi tên thành maini592 để không trùng với i592 của sub ở dưới !//
  const {
    name,
    gender,
    type,
    price,
    color: mainColor,
    i592: maini592,
    subs,
    id,
    productIndexInData,
    hiddenImg,
    hiddenSubIndex,
  } = props;
  const productColorNumber = subs.length + 1;
  const [productImg, setProductImg] = useState(maini592);
  const [productIndex, setProductIndex] = useState(0);
  const history = useHistory();

  const { i592: hiddeni592 } = hiddenImg !== undefined && hiddenImg[0];
  useEffect(() => {
    if (hiddeni592) {
      setProductImg(hiddeni592);
      setProductIndex(hiddenSubIndex);
    }
  }, []);
  return (
    <div
      onClick={() => {
        history.push(`/product/${productIndexInData}${productIndex}`);
      }}
      className="OPIM"
    >
      <div className="OPIM-ImageContainer">
        <img src={productImg} />
      </div>
      <div className="OPIM-InfoContainer">
        <p>{name}</p>
        <p>{`${gender}'s ${type}`}</p>
        <p>{`${productColorNumber} Colour`}</p>
        <div className="OPIM-OtherContainer">
          <img
            onMouseOver={() => {
              setProductImg(maini592);
              setProductIndex(0);
            }}
            className="OPIM-OtherImage"
            src={maini592}
          />
          {subs.map((subProduct, subIndex) => {
            const { i592 } = subProduct;
            if (i592) {
              return (
                <img
                  onMouseOver={() => {
                    setProductImg(i592);
                    setProductIndex(subIndex + 1);
                  }}
                  key={subIndex}
                  className="OPIM-OtherImage"
                  src={i592}
                />
              );
            }
          })}
        </div>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}

export default OneProductInMenu;
