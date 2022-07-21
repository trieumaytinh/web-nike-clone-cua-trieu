import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../../store/ProductContext";
import { UiContext } from "../../../store/UIContext";
import "./NavBar.css";
import "./NavBarResponsive.css";
function NavBar() {
  const uiCtx = useContext(UiContext);
  const ctx = useContext(ProductContext);
  const {
    setGenderSorting,
    setMenCheck,
    setWomenCheck,
    setPriceSorting,
    setTypeSorting,
    setColorSorting,
  } = ctx;
  const { setNavRes } = uiCtx;
  const { productState, setBudgetShow, budgetShow, setCustomGender } = ctx;
  const { number } = productState;
  const history = useHistory();
  return (
    <>
      <div className="NB">
        <svg
          onClick={() => {
            history.push("/");
          }}
          class="NB-NikeIcon"
          height="60px"
          width="60px"
          fill="#111"
          viewBox="0 0 69 32"
        >
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
        <ul className="NB-Middle">
          <li
            onClick={() => {
              setGenderSorting(["Men"]);
              setMenCheck(true);
              setWomenCheck(false);
              setColorSorting([]);
              setTypeSorting([]);
              setPriceSorting("none");
              history.push("/shopping");
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
            }}
          >
            Women
          </li>
          <li>Kids</li>
          <li
            onClick={() => {
              history.push("/design");
              if (document.getElementById("BT").style.display === "none") {
                document.getElementById("DC").style.opacity = 0;
                setTimeout(() => {
                  document.getElementById("DC").style.display = "none";
                  document.getElementById("BT").style.display = "block";
                  setCustomGender("");
                }, 300);
                setTimeout(() => {
                  setBudgetShow(true);
                }, 400);
              }
            }}
          >
            Customise
          </li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
        <div className="NB-Right">
          <div className="NB-SearchContainer">
            <svg
              class="NB-SearchIcon"
              fill="#111"
              height="30px"
              width="30px"
              viewBox="0 0 24 24"
            >
              <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
            </svg>
            <input
              className="NB-SearchInput"
              type="text"
              placeholder="Search"
            />
          </div>
          <svg
            className="NB-HeartIcon"
            width="24px"
            height="24px"
            fill="#111"
            viewBox="0 0 24 24"
          >
            <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
          </svg>
          <svg
            onClick={() => {
              history.replace("/checkout");
            }}
            id="a"
            className="NB-CartIcon"
            width="24px"
            height="24px"
            fill="#111"
            viewBox="0 0 24 24"
          >
            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
          </svg>
          <svg
            class="NB-SearchIconRes"
            fill="#111"
            height="30px"
            width="30px"
            viewBox="0 0 24 24"
          >
            <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
          </svg>
          <svg
            onClick={() => {
              setNavRes(true);
            }}
            className="NB-BarIcon"
            width="24px"
            height="24px"
            fill="#111"
            viewBox="0 0 24 24"
          >
            <path
              className="Baricon"
              d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"
            ></path>
          </svg>
          {number <= 9 && (
            <span
              onMouseOver={() => {
                document.getElementById("a").style.backgroundColor = "#e5e5e5";
              }}
              onMouseLeave={() => {
                document.getElementById("a").style.backgroundColor =
                  "transparent";
              }}
              onClick={() => {
                history.replace("/checkout");
              }}
              className="NB-CartNumber"
            >
              {number !== 0 && number}
            </span>
          )}
          {number > 9 && (
            <span
              onMouseOver={() => {
                document.getElementById("a").style.backgroundColor = "#e5e5e5";
              }}
              onMouseLeave={() => {
                document.getElementById("a").style.backgroundColor =
                  "transparent";
              }}
              onClick={() => {
                history.replace("/checkout");
              }}
              className="NB-CartNumber morenine"
            >
              9+
            </span>
          )}
        </div>
      </div>
      <div className="NB-Blank"></div>
    </>
  );
}

export default NavBar;
