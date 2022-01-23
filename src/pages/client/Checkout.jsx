import React, { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { fetchCart } from "../../API/clientAPI";
import * as Yup from "yup";

import { NavPage } from "../../components/Context/NavPage";
import { HeaderCategories } from "./Categories";

import { FaUserFriends, FaShieldAlt, FaStarHalfAlt } from "react-icons/fa";

const axios = require("axios").default;

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name *"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email *"),
  phone: Yup.string()
    .matches("^[0-9]+", "You can only type number")
    .max(11, "Only less than 10 number")
    .required("Please enter your number *"),
  address: Yup.string().required("Please enter your address"),
  message: Yup.string().required("Please enter your message *"),
});

const ShippingAddress = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    fetchCart()
      .then((result) => {
        setInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const form = useRef();

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema,
  });

  return (
    <div className="container mx-auto">
      <div className="pt-10">
        <p className="text-lg font-semibold tracking-wider font-roboto">
          Contact information
        </p>
        <div className="inline-flex items-center pt-5">
          <img
            className="w-10 h-10 rounded-full"
            src={info.avatar}
            alt="Avatar"
          />
          <div className="pl-2">
            <p className="text-xs font-semibold">Tấn Phát Đỗ</p>
            <p className="text-xs text-orange_fa8b0c font-semibold">Log out</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 ml-1">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-xs text-gray-900"
            >
              Keep me up to date on news and offers
            </label>
          </div>
        </div>
      </div>

      {/* Register Form */}
      <div className="pt-6 pb-8 ml-1">
        <h3 className="md:ml-0 text-lg font-medium leading-6 text-gray-900">
          Few more information
        </h3>
        <p className="mt-1 md:ml-0 text-sm text-[#3d424b]">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        id="contactForm"
        className="grid grid-cols-6 gap-6 shadow overflow-hidden sm:rounded-md bg-white sm:px-0 ml-1"
      >
        <div className=" col-span-6 lg:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-indigo-500 text-opacity-90"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="mt-1 transition-colors duration-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={info.firstName || ""}
            disabled
          />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-indigo-500 text-opacity-90"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="given-email"
            className="mt-1 transition-colors duration-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={info.email || ""}
            disabled
          />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <div className="">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-indigo-500 text-opacity-90"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="given-phone"
              className="mt-1 transition-colors duration-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={info.phone || ""}
              disabled
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-indigo-500 text-opacity-90"
            >
              Message
            </label>
            <textarea
              rows="10"
              name="message"
              id="message"
              form="contactForm"
              className="mt-1 transition-colors duration-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.message || ""}
              placeholder="Type here..."
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="animate-pulse text-[#f2566e] text-sm md:text-base">
                {formik.errors.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-indigo-500 text-opacity-90"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="given-address"
            className="mt-1 transition-colors duration-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={info.address || ""}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 sm:py-2 sm:px-10 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-[#5048e5] cursor-pointer"
        >
          <p className="w-full text-center font-Inter font-semibold text-[#5048e5]">
            Send
          </p>
        </button>
        <button
          type="submit"
          className="w-full py-2 px-4 sm:py-2 sm:px-10 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-[#5048e5] cursor-pointer"
        >
          <p className="w-full text-center font-Inter font-semibold text-[#5048e5]">
            Send
          </p>
        </button>
      </form>
    </div>
  );
};

const Process = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-baseline h-[fit-content]">
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
        <span className="relative border-2 border-gray_7a82a6 -top-1 h-3 bg-gray_7a82a6 w-full -mx-2"></span>
        <div className="flex flex-col h-max">
          <div className="grid place-content-center w-12 h-12 rounded-full bg-gray_7a82a6">
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
      <ShippingAddress />
    </div>
  );
};

const Info = () => {
  return (
    <>
      <div className="w-full h-full px-0 md:px-44 pt-5 sm:pt-0">
        <div className="flex flex-col items-center justify-center w-max p-16 bg-gray-700 rounded-md drop-shadow-xl">
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
          <p className="font-semibold">Payment is here</p>
          <div className="flex justify-around items-center mt-5 py-8 border-b border-t border-gray-600 w-full">
            <input
              className="rounded-full px-10 py-1 mr-4 border-1 border-gray-400"
              type="text"
              placeholder="Gift card or discount code"
            />
            <button
              className="flex justify-center items-center bg-purpel_903af9 px-4 py-2 rounded-full bg-opacity-35 font-roboto"
              type="button"
            >
              <span className="text-white text-xs font-roboto font-semibold tracking-wider">
                APPLY
              </span>
            </button>
          </div>
          <div className="flex flex-col w-full pt-5 pb-7 border-b border-gray-400">
            <div className="flex justify-between items-center w-full">
              <p>Discount</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p>Shipping Cost</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p>Taxes (estimated)</p>
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-9 w-full">
            <p>Total</p>
            <p className="text-lg font-semibold">$0.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Main = () => {
  return (
    <div className="container mx-auto px-10 pb-10 grid grid-cols-1 md:grid-cols-2 pt-20">
      <Process />
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
