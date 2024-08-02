import React from "react";
import ReactDOM from "react-dom";
const Header = React.lazy(() => import("nav/Header"));
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter basename="app">
    <div className="container">
      <div>This Story Platform</div>
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
