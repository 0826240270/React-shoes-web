import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalMessage } from "../../components/Modal";

const axios = require("axios").default;

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email *"),
  password: Yup.string().required("Please enter your password *"),
});

function Login() {
  // Lưu state thay đổi để aos animation được render lại
  const [pageId, setPageId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [authen, setAuthen] = useState(false);

  const api = "http://intense-retreat-81423.herokuapp.com";

  // Sau khi state thay đổi thì did mound sẽ re-render lại component
  useEffect(() => {
    setPageId(Math.random());
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      axios
        .post(`${api}/login`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          if (res.data.authen) {
            localStorage.setItem("token", res.data.token);
            setAuthen(res.data.authen);
          } else {
            setShowModal(!showModal);
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    validationSchema,
  });
  return (
    <div className="relative w-full h-screen">
      <div className="grid grid-flow-row xl:grid-flow-col xl:grid-cols-2 absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 md:w-max">
        {/* Left animation */}
        <div
          // Key ID page để re-render lại nếu có sự thay đổi
          key={pageId}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <video
            className="max-w-full md:max-w-max"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            poster="https://cdnl.iconscout.com/lottie/premium/thumb/online-shopping-3575842-2997680.mp4"
          >
            <source
              type="video/mp4"
              src="https://cdnl.iconscout.com/lottie/premium/thumb/online-shopping-3575842-2997680.mp4"
            />
          </video>
        </div>
        {/* Right formik */}
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-once="true"
          className="xl:max-w-max self-center"
        >
          <div className="sm:px-6 sm:pb-5">
            <h3 className="ml-5 md:ml-0 text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 ml-5 md:ml-0 text-sm text-[#65748b]">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          {/* Register Form */}
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
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
                        autoComplete="email"
                        className="mt-1 transition-colors duration-500  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <p className="animate-pulse text-[#f2566e] text-sm md:text-base">
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-indigo-500 text-opacity-90"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-1 transition-colors duration-500  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <p className="animate-pulse text-[#f2566e] text-sm md:text-base">
                          {formik.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <button
                      type="submit"
                      className="py-1 px-4 sm:py-3 sm:px-5 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-[#5048e5] cursor-pointer"
                    >
                      <p className="w-full text-center font-Inter font-semibold text-[#5048e5]">
                        Sign In
                      </p>
                    </button>

                    <Link to="/register">
                      <button className="py-1 px-4 sm:py-3 sm:px-5 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-[#5048e5] cursor-pointer">
                        <p className="w-full text-center font-Inter font-semibold text-[#5048e5]">
                          Register
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {authen ? (
        <Redirect to="/" />
      ) : (
        <ModalMessage
          showModal={showModal}
          setShowModal={setShowModal}
          caption={"Please check your email or password !"}
        />
      )}
    </div>
  );
}

export { Login };
