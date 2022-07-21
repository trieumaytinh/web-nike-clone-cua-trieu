import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import DesignPage from "./pages/DesignPage/DesignPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ShoppingPage from "./pages/ShoppingPage/ShoppingPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import UiContextProvider from "./store/UIContext";

function App() {
  return (
    <UiContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/shopping">
            <ShoppingPage />
          </Route>
          <Route path="/product/:id">
            <SingleProductPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/design">
            <DesignPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </UiContextProvider>
  );
}

export default App;
