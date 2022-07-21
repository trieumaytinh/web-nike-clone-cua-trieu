import AdSlider from "../../components/LP/AdSlider/AdSlider";
import BigImage from "../../components/LP/BigImage/BigImage";
import DontMiss from "../../components/LP/DontMiss/DontMiss";
import Featured from "../../components/LP/Featured/Featured";
import MoreNike from "../../components/LP/MoreNike/MoreNike";
import NearEndList from "../../components/LP/NearEndList/NearEndList";
import ProductSlider from "../../components/LP/ProductSlider/ProductSlider";
import Trending from "../../components/LP/Trending/Trending";
import NavBar from "../../components/UI/NavBar/NavBar";
import NavBarRes from "../../components/UI/NavBarRes/NavBarRes";
import Ending from "../../components/UI/Ending/Ending";
import EndingRes from "../../components/UI/EndingRes/EndingRes";
import "./LandingPage.css";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../store/ProductContext";
function LandingPage() {
  const {
    setTypeSorting,
    setPriceSorting,
    setGenderSorting,
    setColorSorting,
    setMenCheck,
    setWomenCheck,
  } = useContext(ProductContext);
  useEffect(() => {
    setTypeSorting([]);
    setPriceSorting("none");
    setGenderSorting([]);
    setColorSorting([]);
    setMenCheck(false)
    setWomenCheck(false)
  }, []);
  return (
    <>
      <NavBar />
      <NavBarRes />
      <AdSlider />
      <BigImage />
      <Featured />
      <ProductSlider />
      <Trending />
      <DontMiss />
      <MoreNike />
      <NearEndList />
      <Ending />
      <EndingRes />
    </>
  );
}

export default LandingPage;
