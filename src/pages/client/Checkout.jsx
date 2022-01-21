import React from "react";
import { Redirect } from "react-router-dom";

import { Nav } from "./Home";

const axios = require("axios").default;

const Main = () => {
  return <div className="grid grid-"></div>;
};

function Checkout() {
  const tokenHeader = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + tokenHeader;
  return tokenHeader ? (
    <div>
      <Nav />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export { Checkout };
