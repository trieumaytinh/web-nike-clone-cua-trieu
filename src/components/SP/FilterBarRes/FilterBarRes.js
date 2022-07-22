import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../../store/ProductContext";
import { UiContext } from "../../../store/UIContext";
import "./FilterBarRes.css";
function FilterBarRes() {
  const uiCtx = useContext(UiContext);
  const history = useHistory();
  const { fbresClass, setFilterRes } = uiCtx;
  const {
    setPriceSorting,
    setIndex,
    setColorSorting,
    setGenderSorting,
    genderSorting,
    colorSorting,
    priceSorting,
    typeSorting,
    setTypeSorting,
    menCheck,
    womenCheck,
    setMenCheck,
    setWomenCheck,
  } = useContext(ProductContext);
  const [underlineClass1, setUnderlineClass1] = useState("");
  const [underlineClass2, setUnderlineClass2] = useState("");

  function genderHandler(e) {
    let updatedGenderSort;
    if (!e.target.checked) {
      updatedGenderSort = genderSorting.filter(
        (item) => item !== e.target.value
      );
    } else {
      updatedGenderSort = genderSorting.concat(e.target.value);
    }
    setGenderSorting(updatedGenderSort);
  }
  function typeHandler(e) {
    let updatedTypeSort;
    if (e.target.className === "underlinetext") {
      e.target.classList.remove("underlinetext");
      updatedTypeSort = typeSorting.filter(
        (item) => item !== e.target.innerText
      );
    } else {
      updatedTypeSort = typeSorting.concat(e.target.innerText);
      e.target.classList.add("underlinetext");
    }
    setTypeSorting(updatedTypeSort);
  }
  function colorHandler(e) {
    let updatedColorSort;
    if (e.target.className === "colorchoose") {
      e.target.classList.remove("colorchoose");
      updatedColorSort = colorSorting.filter(
        (item) => item !== e.target.innerText
      );
    } else {
      updatedColorSort = colorSorting.concat(e.target.innerText);
      e.target.classList.add("colorchoose");
    }
    setColorSorting(updatedColorSort);
  }
  const type1class = typeSorting.findIndex((item) => item === "T-Shirt");
  const type2class = typeSorting.findIndex((item) => item === "Hoodies");
  const type3class = typeSorting.findIndex((item) => item === "Sweatshirts");
  const type4class = typeSorting.findIndex((item) => item === "Pants");
  const type5class = typeSorting.findIndex((item) => item === "Shorts");
  const type6class = typeSorting.findIndex((item) => item === "Shoes");

  const color1class = colorSorting.findIndex((item) => item === "Black");
  const color2class = colorSorting.findIndex((item) => item === "Blue");
  const color3class = colorSorting.findIndex((item) => item === "Brown");
  const color4class = colorSorting.findIndex((item) => item === "Green");
  const color5class = colorSorting.findIndex((item) => item === "Grey");
  const color6class = colorSorting.findIndex((item) => item === "Multi");
  const color7class = colorSorting.findIndex((item) => item === "Orange");
  const color8class = colorSorting.findIndex((item) => item === "Pink");
  const color9class = colorSorting.findIndex((item) => item === "Purple");
  const color10class = colorSorting.findIndex((item) => item === "Red");
  const color11class = colorSorting.findIndex((item) => item === "White");
  const color12class = colorSorting.findIndex((item) => item === "Yellow");
  return (
    <div className={fbresClass}>
      <svg
        onClick={() => {
          setFilterRes(false);
        }}
        className="FBR-Xicon"
        fill="#111"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm5.2 15.28l-1.92 1.92L12 13.84 8.72 17.2 6.8 15.28 10.16 12 6.8 8.72 8.72 6.8 12 10.08l3.28-3.28 1.92 1.92L13.92 12l3.28 3.28z"></path>
      </svg>
      <p className="FBR-Header">Filter</p>
      <ul className="FBR-PriceContainer">
        <p>Sort By</p>
        <li
          onClick={() => {
            if (priceSorting === "highlow") {
              setPriceSorting("none");
            } else {
              setPriceSorting("highlow");
            }
          }}
          className={priceSorting === "highlow" && "underlinetext"}
          style={{ paddingLeft: "10px", cursor: "pointer" }}
        >
          Price: High-Low
        </li>
        <li
          onClick={() => {
            if (priceSorting === "lowhigh") {
              setPriceSorting("none");
            } else {
              setPriceSorting("lowhigh");
            }
          }}
          className={priceSorting === "lowhigh" && "underlinetext"}
          style={{ paddingLeft: "10px", cursor: "pointer" }}
        >
          Price: Low-High
        </li>
      </ul>
      <ul
        onClick={(e) => {
          genderHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FBR-GenderContainer"
      >
        <p>Gender</p>
        <li>
          <input
            onClick={() => {
              setMenCheck((prev) => !prev);
            }}
            checked={menCheck}
            id="men"
            value="Men"
            type="checkbox"
          />
          <label style={{ marginLeft: "8px", cursor: "pointer" }}>Men</label>
        </li>
        <li>
          <input
            onClick={() => {
              setWomenCheck((prev) => !prev);
            }}
            checked={womenCheck}
            id="women"
            value="Women"
            type="checkbox"
          />
          <label style={{ marginLeft: "8px", cursor: "pointer" }}>Women</label>
        </li>
      </ul>
      <ul
        onClick={(e) => {
          typeHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FBR-TypeContainer"
      >
        <p>Type</p>
        <li className={type1class !== -1 && "underlinetext"}>T-Shirt</li>
        <li className={type2class !== -1 && "underlinetext"}>Hoodies</li>
        <li className={type3class !== -1 && "underlinetext"}>Sweatshirts</li>
        <li className={type4class !== -1 && "underlinetext"}>Pants</li>
        <li className={type5class !== -1 && "underlinetext"}>Shorts</li>
        <li className={type6class !== -1 && "underlinetext"}>Shoes</li>
      </ul>
      <ul
        onClick={(e) => {
          colorHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FBR-Colour"
      >
        <p>Colour</p>
        <li className={color1class !== -1 && "colorchoose"}>Black</li>
        <li className={color2class !== -1 && "colorchoose"}>Blue</li>
        <li className={color3class !== -1 && "colorchoose"}>Brown</li>
        <li className={color4class !== -1 && "colorchoose"}>Green</li>
        <li className={color5class !== -1 && "colorchoose"}>Grey</li>
        <li className={color6class !== -1 && "colorchoose"}>Multi</li>
        <li className={color7class !== -1 && "colorchoose"}>Orange</li>
        <li className={color8class !== -1 && "colorchoose"}>Pink</li>
        <li className={color9class !== -1 && "colorchoose"}>Purple</li>
        <li className={color10class !== -1 && "colorchoose"}>Red</li>
        <li className={color11class !== -1 && "colorchoose"}>White</li>
        <li className={color12class !== -1 && "colorchoose"}>Yellow</li>
      </ul>
      <div className="FBR-BtnContainer">
        <button
          onClick={() => {
            history.replace("/shopping");
          }}
        >
          Clear
        </button>
        <button
          className="FBR-ApplyBtn"
          onClick={() => {
            setFilterRes(false);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterBarRes;
