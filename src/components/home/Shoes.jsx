import React from "react";
import { Link } from "react-router-dom";

import { FaGlassMartiniAlt } from "react-icons/fa";

const srcPro1 =
  "https://minimal-kit-react.vercel.app/static/mock-images/products/product_2.jpg";

function Item() {
  const products = [
    {
      name: "Flanders Heat & Air Systems",
      status: ["Featured", "Popular"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: true,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
    {
      name: "Sydney Restaurant Towers",
      status: ["Featured", "Popular"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: false,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
    {
      name: "Kung Food & Drinks",
      status: ["Featured", "Popular", "New"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: false,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
    {
      name: "Favorite Place Fog Bank",
      status: ["Featured", "Popular"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: true,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
    {
      name: "Store Clothing Shopping Mall",
      status: ["Featured", "Popular"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: false,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
    {
      name: "Flanders Heat & Air Systems",
      status: ["Featured", "Popular"],
      imageSrc: srcPro1,
      star: 4.5,
      price: 55.0,
      open: true,
      address: "Los Angeles, United States",
      phone: "(415) 796-3633",
      date: "Posted 2 months ago",
      type: "Restaurant",
      view: "900",
    },
  ];
  return (
    <>
      {products.length &&
        products.map((items, index) => (
          <article
            className="transition-transform duration-500 hover:-translate-y-3 md:w-auto xl:w-96 cursor-pointer"
            key={index}
          >
            <div className="relative">
              <a href="/#">
                <img
                  src={srcPro1}
                  className="w-full h-full object-cover rounded-t-3xl"
                  alt="Restaurant"
                />
              </a>
              <ul className="absolute list-none inline-flex top-3 left-5 text-xs text-white font-medium">
                {items.status.length &&
                  items.status.map((items, index) => (
                    <li
                      key={index}
                      className={
                        (items === "Featured"
                          ? "bg-yellow-500"
                          : items === "New"
                          ? "bg-blue-500"
                          : "bg-pink_f5548e") +
                        " flex justify-center items-center w-16 h-6  mr-2"
                      }
                    >
                      {items}
                    </li>
                  ))}
              </ul>
              <a href="/#" className="absolute -bottom-3 right-10">
                <img
                  src={items.imageSrc}
                  className="object-cover rounded-full"
                  width="40"
                  height="40"
                  alt="Small detail"
                />
              </a>
            </div>

            <div className="flex flex-col items-start p-4 bg-white rounded-b-3xl space-y-4 border-b-4 border-l-2 border-r-2 hover:shadow-xl pt-7">
              <a
                href="/#"
                className="font-semibold text-lg font-sans transition duration-500 hover:text-pink-500"
              >
                {items.name}
              </a>
              <div className="flex flex-row justify-start w-full">
                <button className="flex flex-row items-center pt-1 pb-1 pl-2 pr-2 mr-3 text-white text-sm font-semibold bg-green-400">
                  <span className="pr-1">{items.star}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
                <button className="flex items-center pt-1 pb-1 pl-2 pr-2 mr-3 text-white bg-pink_f5548e  text-sm font-semibold">
                  $ {items.price}
                </button>
                <button
                  className={
                    (items.open ? "text-green-600" : "text-pink_f5548e") +
                    " flex items-center font-bold py-1 px-2 sm:px-1 xl:px-2 mr-3 bg-white border-2 text-xs"
                  }
                >
                  {items.open ? "Open now" : "Closed"}
                </button>
              </div>
              <span className="inline-flex tracking-wide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="pl-1 text-sm">{items.address}</span>
              </span>
              <span className="inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="pl-1 text-sm">{items.phone}</span>
              </span>
              <span className="inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="pl-1 text-sm">{items.date}</span>
              </span>

              <div className="flex justify-between items-center w-full border-t-2 pt-2">
                <div className="inline-flex items-center">
                  <FaGlassMartiniAlt size={14} style={{ color: "red" }} />
                  <span className="pl-3 text-sm text-gray-400">
                    {items.type}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center">
                  <div className="inline-flex mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-1"
                      fill="none"
                      viewBox="0 0 30 30"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span className="flex items-center text-sm text-gray-400">
                      {items.view}+
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1 text-pink-500"
                    fill="none"
                    viewBox="0 0 30 30"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        ))}
    </>
  );
}

function ShoesComponent({ ...props }) {
  return (
    <div className="w-full md:w-1/2 lg:1/3 xl:w-1/4 md:h-max gap-y-5 px-5 sm:px-0">
      <Link to={`/categories/${props._id}`}>
        <article className="transition-transform duration-500 hover:-translate-y-3 cursor-pointer w-full sm:w-4/5 font-Public">
          <img
            className="h-[270px] object-cover rounded-t-xl w-max"
            src={props.url}
            alt="Nike Air Force 1 NDESTRUKT"
          />
          <div className="w-full py-6 border-b-2 drop-shadow-lg rounded-b-lg hover:text-gray_7a82a6 px-4 sm:px-1">
            <div className="flex justify-between items-center text-sm font-semibold text-bg_272b41 ">
              <span>{props.name}</span>
              <span>{props.quantity}</span>
            </div>
            <div className="flex justify-between items-center pt-3 font-semibold text-bg_272b41">
              <span className="text-sm">Màu</span>
              <span>${props.price}</span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

export { Item, ShoesComponent };
