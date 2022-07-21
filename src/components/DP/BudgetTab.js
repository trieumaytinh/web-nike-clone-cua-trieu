import "./BudgetTab.css";
import manModel from "../../3dmodelcutted.png";
import womanModel from "../../womencutted.png";
import { useContext, useRef, useState , useEffect} from "react";
import { ProductContext } from "../../store/ProductContext";
function BudgetTab() {
  const {
    setBudget,
    customGender,
    setCustomGender,
    budgetShow,
    setBudgetShow,
  } = useContext(ProductContext);
  const budgetRef = useRef();
  function budgetHandler() {
    setBudget(budgetRef.current.value);
    if (
      customGender !== "" &&
      budgetRef.current.value !== "" &&
      budgetRef.current.value >= 200
    ) {
      setBudgetShow(false);
      setTimeout(() => {
        document.getElementById("BT").style.display = "none";
        document.getElementById("DC").style.display = "block";
      }, 500);
      setTimeout(() => {
        document.getElementById("DC").style.opacity = 1;
      }, 600);
    } else {
      document.getElementById('BT').classList.add('shaking')
      setTimeout(() => {
        document.getElementById('BT').classList.remove('shaking')
      }, 500);
    }
    budgetRef.current.value = ''
  }
  useEffect(() => {
    if (window.location.pathname !== '/desgin') {
      setBudgetShow(true);

    }
  },[window.location.href])

  return (
    <div id="BT" className={budgetShow ? "BT" : "BT slideleft"}>
      <p>Customise Your Outfit</p>
      <div className="BT-ImageContainer">
        <div
          onClick={() => {
            if (customGender === "Men") {
              setCustomGender("");
            } else {
              setCustomGender("Men");
            }
          }}
          className={
            customGender === "Men"
              ? "BT-Image1Container genderchoose"
              : "BT-Image1Container"
          }
        >
          <img src={manModel} />
          <p>Man</p>
        </div>
        <div
          onClick={() => {
            if (customGender === "Women") {
              setCustomGender("");
            } else {
              setCustomGender("Women");
            }
          }}
          className={
            customGender === "Women"
              ? "BT-Image2Container genderchoose"
              : "BT-Image2Container"
          }
        >
          <img src={womanModel} />
          <p>Woman</p>
        </div>
      </div>
      <input
        ref={budgetRef}
        placeholder="Enter your budget... ( > $200 )"
        type="number"
      />
      <button
        onClick={() => {
          budgetHandler();
        }}
      >
        Start Customise Your Outfit
      </button>
    </div>
  );
}

export default BudgetTab;
