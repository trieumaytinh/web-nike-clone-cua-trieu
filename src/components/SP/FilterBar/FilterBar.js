import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../store/ProductContext";
import { UiContext } from "../../../store/UIContext";
import { data } from "../../../data";
import "./FilterBar.css";

function FilterBar() {
  const uiCtx = useContext(UiContext);
  const typeRef = useRef();
  const { fbClass } = uiCtx;
  const {
    typeState,
    setTypeSorting,
    typeSorting,
    genderSorting,
    setGenderSorting,
    colorSorting,
    setColorSorting,
    setIndex,
    menCheck,
    womenCheck,
    setMenCheck,
    setWomenCheck,
  } = useContext(ProductContext);
  function typeHandler(e) {
    let updatedTypeSort;
    if (e.target.className === 'nothing') {
      return 
    }
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
  const type1class = typeSorting.findIndex(item => item === 'T-Shirt')
  const type2class = typeSorting.findIndex(item => item === 'Hoodies')
  const type3class = typeSorting.findIndex(item => item === 'Sweatshirts')
  const type4class = typeSorting.findIndex(item => item === 'Pants')
  const type5class = typeSorting.findIndex(item => item === 'Shorts')
  const type6class = typeSorting.findIndex(item => item === 'Shoes')

  const color1class = colorSorting.findIndex(item => item === 'Black')
  const color2class = colorSorting.findIndex(item => item === 'Blue')
  const color3class = colorSorting.findIndex(item => item === 'Brown')
  const color4class = colorSorting.findIndex(item => item === 'Green')
  const color5class = colorSorting.findIndex(item => item === 'Grey')
  const color6class = colorSorting.findIndex(item => item === 'Multi')
  const color7class = colorSorting.findIndex(item => item === 'Orange')
  const color8class = colorSorting.findIndex(item => item === 'Pink')
  const color9class = colorSorting.findIndex(item => item === 'Purple')
  const color10class = colorSorting.findIndex(item => item === 'Red')
  const color11class = colorSorting.findIndex(item => item === 'White')
  const color12class = colorSorting.findIndex(item => item === 'Yellow')
  return (
    <div id="FB" className={fbClass}>
      <ul
        ref={typeRef}
        onClick={(e) => {
          typeHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FB-Type"
      >
        <p className="nothing">Type</p>
        <li className={type1class !== -1 && 'underlinetext' }>T-Shirts</li>
        <li className={type2class !== -1 && 'underlinetext' }>Hoodies</li>
        <li className={type3class !== -1 && 'underlinetext' }>Sweatshirts</li>
        <li className={type4class !== -1 && 'underlinetext' }>Pants</li>
        <li className={type5class !== -1 && 'underlinetext' }>Shorts</li>
        <li className={type6class !== -1 && 'underlinetext' }>Shoes</li>
      </ul>
      <ul
        onClick={(e) => {
          genderHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FB-Gender"
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
          colorHandler(e);
          setIndex((prev) => prev + 1);
        }}
        className="FB-Color"
      >
        <p>Color</p>
        <li className={color1class !== -1 && 'colorchoose'}>Black</li>
        <li className={color2class !== -1 && 'colorchoose'}>Blue</li>
        <li className={color3class !== -1 && 'colorchoose'}>Brown</li>
        <li className={color4class !== -1 && 'colorchoose'}>Green</li>
        <li className={color5class !== -1 && 'colorchoose'}>Grey</li>
        <li className={color6class !== -1 && 'colorchoose'}>Multi</li>
        <li className={color7class !== -1 && 'colorchoose'}>Orange</li>
        <li className={color8class !== -1 && 'colorchoose'}>Pink</li>
        <li className={color9class !== -1 && 'colorchoose'}>Purple</li>
        <li className={color10class !== -1 && 'colorchoose'}>Red</li>
        <li className={color11class !== -1 && 'colorchoose'}>White</li>
        <li className={color12class !== -1 && 'colorchoose'}>Yellow</li>
      </ul>
    </div>
  );
}

export default FilterBar;
