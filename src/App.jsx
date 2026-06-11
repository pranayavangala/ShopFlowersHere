import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
//import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import About from "./components/About";
import Checkout from "./pages/Checkout";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/flowers" element={<Flowers />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/users" element={<Users />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
