import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import TermsConditions from "./pages/TermsConditions";

import "./sass/main.scss";
import "./App.css";
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/voltalia-caravan-shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/termsandconditions" element={<TermsConditions />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
