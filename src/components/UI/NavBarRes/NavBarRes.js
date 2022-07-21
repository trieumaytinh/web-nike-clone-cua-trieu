import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UiContext } from "../../../store/UIContext";
import "./NavBarRes.css";
import { ProductContext } from "../../../store/ProductContext";
function NavBarRes() {
  const uiCtx = useContext(UiContext);
  const ctx = useContext(ProductContext);

  const {
    navResClass,
    NBRcontentclass,
    NBRblankclass,
    setNavRes,
    setNBRcontentclass,
    setNBRblankclass,
  } = uiCtx;
  const {
    setGenderSorting,
    setMenCheck,
    setWomenCheck,
    setPriceSorting,
    setTypeSorting,
    setColorSorting,
  } = ctx;
  const history = useHistory();
  return (
    <>
      <div className={navResClass}>
        <div
          onClick={() => {
            setNavRes(false);
          }}
          className={NBRblankclass}
        ></div>
        <div className={NBRcontentclass}>
          <svg
            onClick={() => {
              setNavRes(false);
            }}
            className="NBR-Xicon"
            width="18px"
            height="18px"
            fill="#111"
            viewBox="-6 -6 26 26"
          >
            <path d="M12.12.36L7 5.48 1.88.36.44 1.88 5.48 7 .44 12.12l1.44 1.44L7 8.52l5.12 5.04 1.52-1.44L8.52 7l5.12-5.12z"></path>
          </svg>
          <ul className="NBR-List">
            <li
              onClick={() => {
                setGenderSorting(["Men"]);
                setMenCheck(true);
                setWomenCheck(false);
                setColorSorting([]);
                setTypeSorting([]);
                setPriceSorting("none");
                history.push("/shopping");
                setNavRes(false);
              }}
            >
              Men
            </li>
            <li
              onClick={() => {
                setGenderSorting(["Women"]);
                setWomenCheck(true);
                setMenCheck(false);
                setColorSorting([]);
                setTypeSorting([]);
                setPriceSorting("none");
                history.push("/shopping");
                setNavRes(false);
              }}
            >
              Women
            </li>
            <li>Kids</li>
            <li
              onClick={() => {
                history.push("/design");
                setNavRes(false);
              }}
            >
              Customise
            </li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarRes;
