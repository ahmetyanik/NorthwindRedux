import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dasboard from "./Dasboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail"

export default function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route exact path="/" element={<Dasboard />} />
        <Route exact path="/product" element={<Dasboard />} />
        <Route exact path="/cart" element={<CartDetail/>} />
      </Routes>
      
    </Container>
  );
}
