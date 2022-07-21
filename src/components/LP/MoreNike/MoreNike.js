import "./MoreNike.css";
import "./MoreNikeResponsive.css";
import MNImage1 from "./morenike1.jpg";
import MNImage2 from "./morenike2.jpg";
import MNImage3 from "./morenike3.jpg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";

function MoreNike() {
  const history = useHistory();
  const { setGenderSorting, setMenCheck, setWomenCheck } =
    useContext(ProductContext);
  return (
    <div className="MN">
      <p className="MN-Header">More Nike</p>
      <div className="MN-ImageContainer">
        <div
          onClick={() => {
            setGenderSorting(["Men"]);
            setMenCheck(true);
            history.push("/shopping");
          }}
          className="MN-Image1Container"
        >
          <img className="MN-Image1" src={MNImage1} />
          <button className="MN-Btn1">Men's</button>
        </div>
        <div
          onClick={() => {
            setGenderSorting(["Women"]);
            setWomenCheck(true);

            history.push("/shopping");
          }}
          className="MN-Image2Container"
        >
          <img className="MN-Image2" src={MNImage2} />
          <button className="MN-Btn2">Women's</button>
        </div>
        <div
          onClick={() => {
            history.push("/shopping");
          }}
          className="MN-Image3Container"
        >
          <img className="MN-Image3" src={MNImage3} />
          <button className="MN-Btn3">Kid's</button>
        </div>
      </div>
    </div>
  );
}

export default MoreNike;
