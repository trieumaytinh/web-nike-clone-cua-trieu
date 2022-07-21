import "./ShoppingPageHeader.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { UiContext } from "../../../store/UIContext";
import { ProductContext } from "../../../store/ProductContext";
import { useHistory } from "react-router-dom";

function ShoppingPageHeader() {
  const [priceSortShow, setPriceSortShow] = useState("");
 
  const uiCtx = useContext(UiContext);
  const {
    sortFullIsShow,
    filterFullIsShow,
    setFilterFull,
    setSortFull,
    sphHeaderClass,
    dropdownClass,
  } = uiCtx;
  const ctx = useContext(ProductContext);
  const {
    dispatchSort,
    sortProductHandler,
    setIndex,
    setPriceSorting,
    priceSorting,
  } = ctx;
  const history = useHistory();
  const sortText = priceSorting;
  return (
    <div id="SPH" className="SPH">
      <p className={sphHeaderClass}>Products</p>
      <div className="SPH-Tool">
        <div
          onClick={() => {
            setFilterFull((prev) => !prev);
          }}
          className="SPH-FilterContainer"
        >
          <p>{filterFullIsShow ? "Hide Filter" : "Show Filter"}</p>
          <GoSettings className="SPH-FilterIcon" />
        </div>
        <div
          onClick={() => {
            setSortFull((prev) => !prev);
          }}
          className="SPH-SortContainer"
        >
          {priceSorting === "none" && <p>Sort By</p>}
          {priceSorting !== "none" && (
            <p>
              Sort By:{" "}
              <span style={{ color: "#757575" }}>
                {priceSorting === "highlow"
                  ? "Price: High-Low"
                  : "Price: Low-High"}
              </span>
            </p>
          )}
          {sortFullIsShow ? (
            <BsChevronUp className="SPH-UpIcon" />
          ) : (
            <BsChevronDown className="SPH-DownIcon" />
          )}
        </div>
      </div>
      <div className={dropdownClass}>
        <p
          id="highlow"
          onClick={(e) => {
            setPriceSortShow(e.target.innerText);
            setIndex((prev) => prev + 1);
            if (priceSorting === "highlow") {
              setPriceSorting("none");
            } else {
              setPriceSorting("highlow");
            }
          }}
          className={
            priceSorting === "highlow"
              ? "SPH-DropdownText1 pricechoose"
              : "SPH-DropdownText1"
          }
        >
          Price: High-Low
        </p>
        <p
          id="lowhigh"
          onClick={(e) => {
            setPriceSortShow(e.target.innerText);
            setIndex((prev) => prev + 1);
            if (priceSorting === "lowhigh") {
              setPriceSorting("none");
            } else {
              setPriceSorting("lowhigh");
            }
          }}
          className={
            priceSorting === "lowhigh"
              ? "SPH-DropdownText2 pricechoose"
              : "SPH-DropdownText2"
          }
        >
          Price: Low-High
        </p>
      </div>
    </div>
  );
}
export default ShoppingPageHeader;
