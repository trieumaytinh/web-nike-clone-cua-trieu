import { useHistory } from "react-router-dom";
import "./BigImage.css";
import "./BigImageResponsive.css";
import BIGfull from "./nike10.jpg";
import BIGRes from "./nike9.jpg";
function BigImage() {
  const history = useHistory()
  return (
    <div onClick={() => {
      history.push('/shopping')
    }}  className="BIG">
      <div className="BIG-ImageContainer">
        <img className="BIG-ImgFull" src={BIGfull} alt="NikeMain" />
        <img className="BIG-ImgRes" src={BIGRes} alt="NikeMainRes" />
      </div>
      <div className="BIG-TextContainer">
        <p className="BIG-Text1">Summer Essentials</p>
        <p className="BIG-Text2">NEVER DONE SUMMERING</p>
        <p className="BIG-Text3">
          Play. Let loose. Repeat. This season, turn it up in styles made for
          living life to the max.
        </p>
        <button className="BIG-Btn">Shop</button>
      </div>
    </div>
  );
}

export default BigImage;
