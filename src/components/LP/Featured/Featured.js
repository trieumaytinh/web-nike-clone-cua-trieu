import "./Featured.css";
import "./FeaturedResponsive.css";
import FImage1Full from "./feature1full.jpg";
import FImage2Full from "./feature2full.jpg";
import FImage1Res from "./feature1res.jpg";
import FImage2Res from "./feature2res.jpg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
function Featured() {
  const history = useHistory();
  const { setTypeSorting } = useContext(ProductContext);
  return (
    <div className="F">
      <div className="F-Header">Featured</div>
      <div className="F-ImageContainer">
        <div
          onClick={() => {
            setTypeSorting(["Shoes"]);
            history.push("/shopping");
          }}
          className="F-Image1Container"
        >
          <img className="F-Img1Full" src={FImage1Full} alt="Nike1" />
          <img className="F-Img1Res" src={FImage1Res} alt="" />
          <div className="F-TextContainer1">
            <p>Newest Styles of the Season</p>
            <button>Shop</button>
          </div>
        </div>
        <div
          onClick={() => {
            setTypeSorting(["Shoes"]);
            history.push("/shopping");
          }}
          className="F-Image2Container"
        >
          <img className="F-Img2Full" src={FImage2Full} alt="Nike2" />
          <img className="F-Img2Res" src={FImage2Res} alt="" />
          <div className="F-TextContainer2">
            <p>Perfect for Picnics and Garden Parties</p>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
