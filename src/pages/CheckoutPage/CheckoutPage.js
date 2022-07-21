import CheckoutContentRes from "../../components/CP/CheckoutContentRes/CheckoutContentRes";
import NavBar from "../../components/UI/NavBar/NavBar";
import CheckoutContent from "../../components/CP/CheckoutContent/CheckoutContent";
import NavBarRes from "../../components/UI/NavBarRes/NavBarRes";
function CheckoutPage() {
  return (
    <>
      <NavBar />
      <NavBarRes/>
      <CheckoutContent />
      <CheckoutContentRes/>
    </>
  );
}
export default CheckoutPage;
