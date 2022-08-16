import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import ScrollTop from "./components/ScrollTop";
import SportShoes from "./components/Shoes/Shoes";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SportShoes />} />
          <Route path="/shopping-cart" element={<Cart />} />
        </Routes>

        <ScrollTop />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
