import { useHistory } from "react-router-dom";
import "./OneProductInSlider.css";

function OneProductInSlider(props) {
  const { i592, name, type, gender, price, productIndexInData } = props;
  const history = useHistory()
  return (
    <div
      onClick={() => {
        history.push(`/product/${productIndexInData}0`);
      }}
      id="OPIS"
      className="OPIS"
    >
      <img src={i592} alt="Nike" />
      <div className="OPIS-TextContainer">
        <p>{name}</p>
        <p>{`${gender}'s ${type}`}</p>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}
export default OneProductInSlider;
