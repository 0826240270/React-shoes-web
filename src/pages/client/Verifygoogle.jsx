import React from "react";
import axios from "axios";

const host = "http://localhost:3001";

function Verifygoogle() {
  let { data } = axios.get(`${host}/auth/google/callback`);
  console.log(data);
  return <div>Verifygoogle</div>;
}

export { Verifygoogle };
