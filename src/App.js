import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
    </BrowserRouter>
  );
}

export default App;
