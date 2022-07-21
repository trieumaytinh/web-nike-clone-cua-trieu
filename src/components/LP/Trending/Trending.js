import Image1 from "./trending1.jpg";
import Image2 from "./trending2.jpg";
import "./Trending.css";
import "./TrendingResponsive.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
function Trending() {
  const history = useHistory();
  const { setTypeSorting } = useContext(ProductContext);
  return (
    <div className="T">
      <p className="T-Header">Trending</p>
      <div className="T-ImageContainer">
        <div onClick={() => {
          setTypeSorting(['T-Shirt'])
          history.push('/shopping')
        }} className="T-Image1Container">
          <img className="T-Image1Full" src={Image1} />
          <img className="T-Image1Res" src={Image1} />
          <div className="T-TextContainer1">
            <p>Tees to Rule Summer</p>
            <button>Shop</button>
          </div>
        </div>
        <div onClick={() => {
          setTypeSorting(['Shorts'])
          history.push('/shopping')
        }} className="T-Image2Container">
          <img className="T-Image2Full" src={Image2} />
          <img className="T-Image2Res" src={Image2} />
          <div className="F-TextContainer2">
            <p>Shorts to beat the Heat</p>
            <button>Shop</button>
          </div>
          {/* <p className="T-Image2Text">Shorts to beat the Heat</p>
          <button className="T-Image2Btn">Shop</button> */}
        </div>
      </div>
    </div>
  );
}
export default Trending;
