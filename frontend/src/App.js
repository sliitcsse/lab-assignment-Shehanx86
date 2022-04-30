import CreateProfile from "./pages/CreateProfile.jsx";
import Login from "./pages/Login.jsx";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CustomerHome from "./pages/home/CustomerHome.jsx";
import TraderHome from "./pages/home/TraderHome.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/trader" element={<TraderHome />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<CreateProfile />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="wishlist/" element={<Wishlist />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
