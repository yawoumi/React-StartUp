import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,

} from "./components";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
     <Route>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();
