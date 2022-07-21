import "./DontMiss.css";
import "./DontMissResponsive.css";
import DMImageFull from "./nike8.jpg";
import DMImageRes from "./nike7.jpg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
function DontMiss() {
  const history = useHistory();
  const { setTypeSorting, setGenderSorting, setWomenCheck } = useContext(ProductContext);
  return (
    <div onClick={() => {
      setTypeSorting(['T-Shirt'])
      setGenderSorting(['Women'])
      setWomenCheck(true)
      history.push('/shopping')
    }} className="DM">
      <p className="DM-Header">Don't Miss</p>
      <div className="DM-ImageContainer">
        <img className="DM-ImgFull" src={DMImageFull} alt="NikeMain" />
        <img className="DM-ImgRes" src={DMImageRes} alt="NikeMainRes" />
        <div className="DM-TextContainer">
          <h1 className="DM-Text1">SUMMER TOPS</h1>
          <p className="DM-Text2">Fun tops for her.</p>
          <button className="DM-Btn">Shop</button>
        </div>
      </div>
    </div>
  );
}

export default DontMiss;
