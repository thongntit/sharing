import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        Chuyện bé xé ra to{" "}
        <span role="img" aria-label="Smile">
          😄
        </span>
      </header>
    </div>
  );
}
