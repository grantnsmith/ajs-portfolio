import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </BrowserRouter>
  );
}

export default App;
