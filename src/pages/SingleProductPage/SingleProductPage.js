import NavBar from "../../components/UI/NavBar/NavBar";

import ProductSliderSingle from "../../components/SPP/ProductSliderSingle/ProductSliderSingle";
import SingleProduct from "../../components/SPP/SingleProduct/SingleProduct";
import SingleProductRes from "../../components/SPP/SingleProductRes/SingleProductRes";
import NavBarRes from "../../components/UI/NavBarRes/NavBarRes";

function SingleProductPage() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <NavBarRes />
      <SingleProduct />
      <SingleProductRes />
    </div>
  );
}

export default SingleProductPage;
