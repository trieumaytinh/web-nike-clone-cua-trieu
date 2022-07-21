import { useContext, useEffect, useState } from "react";
import { UiContext } from "../../store/UIContext";
import "./ShoppingPage.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import ShoppingPageHeader from "../../components/SP/ShoppingPageHeader/ShoppingPageHeader";
import FilterBar from "../../components/SP/FilterBar/FilterBar";
import FilterBarRes from "../../components/SP/FilterBarRes/FilterBarRes";
import ShoppingPageHeaderRes from "../../components/SP/ShoppingPageHeaderRes/ShoppingPageHeaderRes";
import NavBarRes from "../../components/UI/NavBarRes/NavBarRes";
import ShoppingMenu from "../../components/SP/ShoppingMenu/ShoppingMenu";
import { data } from "../../data";
function ShoppingPage() {
  const uiCtx = useContext(UiContext);
  const { filterResIsShow } = uiCtx;
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      {!filterResIsShow && (
        <>
          <NavBar />
          <ShoppingPageHeader />
          <ShoppingPageHeaderRes />
        </>
      )}
      <FilterBarRes />
      <NavBarRes />
      <div className="ShoppingContainer">
        <FilterBar />
        {!filterResIsShow && <ShoppingMenu />}
      </div>
    </>
  );
}
export default ShoppingPage;
