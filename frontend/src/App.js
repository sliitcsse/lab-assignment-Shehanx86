import CreateProfile from "./pages/CreateProfile.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Home from "./pages/home/index.jsx";
import Promotion from "./pages/promotions/index.js";
import Customers from "./pages/Customers.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/" element={<Login />} />
          <Route path="signup/" element={<CreateProfile />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="wishlist/" element={<Wishlist />} />
          <Route path="/promotions" element={<Promotion/>} />
          <Route path="/customers" element={<Customers/>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;
