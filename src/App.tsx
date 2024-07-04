import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Marketplace from "./pages/Marketplace";
import Add from "./pages/Add";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import Delivery from "./pages/Delivery";
import Sale from "./pages/Sale";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/add" element={<Add />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn} />} />
      </Routes>
      {loggedIn && <Nav />}
    </BrowserRouter>
  );
}

export default App;
