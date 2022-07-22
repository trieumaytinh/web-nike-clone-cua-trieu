import { useContext } from "react";
import { GoSettings } from "react-icons/go";
import { UiContext } from "../../../store/UIContext";

import "./ShoppingPageHeaderRes.css";

function ShoppingPageHeaderRes() {
  const uiCtx = useContext(UiContext);
  const {sphResHeaderClass,setFilterRes} = uiCtx
  return (
    <div id="SPHRes" className="SPHRes">
      <p className={sphResHeaderClass}>Products</p>
      <div onClick={() => {
        setFilterRes(true)
      }} className="SPHRes-FilterContainer">
        <p className="SPHRes-FilterText">Filter</p>
        <GoSettings id="SPHRes-FilterIcon" className="SPHRes-FilterIcon" />
      </div>
    </div>
  );
}

export default ShoppingPageHeaderRes;
