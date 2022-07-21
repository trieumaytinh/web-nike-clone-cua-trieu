import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UiContext = createContext();

function UiContextProvider(props) {
  const [filterFullIsShow, setFilterFull] = useState(true);
  const [filterResIsShow, setFilterRes] = useState(false);
  const [sortFullIsShow, setSortFull] = useState(false);
  const [navResIsShow, setNavRes] = useState(false);
  const [headerFullIsSmall, setHeaderFull] = useState(false);
  const [headerResIsSmall, setHeaderRes] = useState(false);
  const [NBRcontentclass, setNBRcontentclass] = useState("NBR-Content");
  const [NBRblankclass, setNBRblankclass] = useState("NBR-Blank");
  let fbClass = filterFullIsShow ? "FB" : "FB notshow";
  let smClass = filterFullIsShow ? "SM" : "SM showfull";
  let fbresClass = filterResIsShow ? "FBR FBRshow" : "FBR";
  let navResClass = navResIsShow ? "NBR NBRShow" : "NBR";
  let dropdownClass = sortFullIsShow
    ? "SPH-Dropdown"
    : "SPH-Dropdown dropdownnotshow";
  let sphHeaderClass = headerFullIsSmall
    ? "SPH-Header smallfont"
    : "SPH-Header";
  let sphResHeaderClass = headerResIsSmall
    ? "SPHRes-Text ressmallfont"
    : "SPHRes-Text";
  useEffect(() => {
    if (navResClass == "NBR NBRShow") {
      setNBRcontentclass("NBR-Content NBRcontentshow");
      setTimeout(() => {
        setNBRblankclass("NBR-Blank NBRblankshow");
      }, 150);
    }
    if (navResClass == "NBR") {
      setNBRblankclass("NBR-Blank");
      setNBRcontentclass("NBR-Content");
    }
  }, [navResClass, NBRcontentclass]);

  let path = window.location.pathname;
  window.onscroll = function () {
    // if (path === "/shopping") {
      const sphHeaderFull = document
        .getElementById("SPH")
        .getBoundingClientRect().top;
      const sphHeaderRes = document
        .getElementById("SPHRes")
        .getBoundingClientRect().top;
      const filterBar = document.getElementById("FB");
      if (filterBar.getBoundingClientRect().top >= 111) {
        filterBar.style.position = "absolute";
        filterBar.style.top = "0px";
      }
      if (sphHeaderFull == 60 || sphHeaderRes == 60) {
        setHeaderFull(true);
        setHeaderRes(true);
        filterBar.style.position = "absolute";
        filterBar.style.top = "0px";
      } else {
        setHeaderFull(false);
        setHeaderRes(false);
      }
      if (filterBar.getBoundingClientRect().top < 111) {
        filterBar.style.position = "fixed";
        filterBar.style.top = "111px";
      }
    // }
  };
  window.onresize = function () {
    if (window.innerWidth < 960) {
      setFilterFull(false);
      setSortFull(false);
    } else {
      setFilterRes(false);
      setNavRes(false);
    }
  };
  const uiContextValue = {
    fbClass,
    smClass,
    fbresClass,
    sphHeaderClass,
    sphResHeaderClass,
    dropdownClass,
    navResClass,
    NBRcontentclass,
    NBRblankclass,
    sortFullIsShow,
    filterFullIsShow,
    filterResIsShow,
    setSortFull,
    setFilterFull,
    setFilterRes,
    setNavRes,
    setNBRblankclass,
    setNBRcontentclass,
  };
  return (
    <UiContext.Provider value={uiContextValue}>
      {props.children}
    </UiContext.Provider>
  );
}
export default UiContextProvider;
