import React from "react";
import { Redirect } from "react-router-dom";

import { NavPage } from "../../components/Context/NavPage";
import { HeaderCategories } from "./Categories";

import { FaUserFriends, FaShieldAlt, FaStarHalfAlt } from "react-icons/fa";

const axios = require("axios").default;

const ContactInfo = () => {
  return (
    <div className="flex justify-between items-baseline pt-14 h-[fit-content]">
      <div className="flex flex-col h-max ml-2">
        <div className="grid place-content-center w-12 h-12 rounded-full bg-purpel_903af9">
          <FaUserFriends
            size={20}
            style={{
              color: "#fff",
            }}
          />
        </div>
        <p className="text-sm font-semibold pt-1 text-center">Login</p>
      </div>
      <span className="relative border-2 border-purpel_903af9 -top-1 h-3 bg-purpel_903af9 w-full -mx-2"></span>
      <div className="flex flex-col h-max">
        <div className="grid place-content-center w-12 h-12 rounded-full bg-purpel_903af9">
          <FaShieldAlt
            size={20}
            style={{
              color: "#fff",
            }}
          />
        </div>
        <p className="text-sm font-semibold pt-1">Confirm</p>
      </div>
      <span className="relative border-2 border-purpel_903af9 -top-1 h-3 bg-purpel_903af9 w-full -mx-2"></span>
      <div className="flex flex-col h-max">
        <div className="grid place-content-center w-12 h-12 rounded-full bg-purpel_903af9">
          <FaStarHalfAlt
            size={20}
            style={{
              color: "#fff",
            }}
          />
        </div>
        <p className="text-sm font-semibold pt-1">Success</p>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <video
          className="max-w-full md:max-w-max w-64 h-52"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          poster="https://cdnl.iconscout.com/lottie/premium/thumb/online-shopping-3572874-3017339.mp4"
        >
          <source
            type="video/mp4"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/online-shopping-3572874-3017339.mp4"
          />
        </video>
        <div>
          <p className="text-lg font-semibold">Payment is here</p>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="container mx-auto px-10 pb-10 grid grid-cols-1 md:grid-cols-2 pt-20">
      <ContactInfo />
      <Info />
    </div>
  );
};

function Checkout() {
  const tokenHeader = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + tokenHeader;
  return tokenHeader ? (
    <div>
      <NavPage />
      <HeaderCategories title={"Payment"} btnTitle={"Payment"} />
      <Main />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export { Checkout };
