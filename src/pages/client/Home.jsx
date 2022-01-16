import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { Cart } from "../../components/Modal";
import { DropDown } from "../../components/home/DropDown";
import { CategoriesLogo } from "../../components/home/CategoriesLogo";
import { Project } from "../../components/home/Project";
import { Item } from "../../components/home/Shoes";
import { NavPage, UsersContext } from "../../components/Context/NavPage";

import srcPro1 from "../../img/project1.jpg";
import srcPro2 from "../../img/project3.jpg";
import srcPro3 from "../../img/project4.jpg";

import { IoRestaurantOutline } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineApple,
  AiOutlineTwitter,
} from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { BiBed } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaGlassMartiniAlt, FaFacebookF } from "react-icons/fa";
import { GoOctoface } from "react-icons/go";
import { TiSocialInstagram, TiSocialGooglePlus } from "react-icons/ti";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./home.css";

import sbShape from "../../img/sb-shape.svg";

const axios = require("axios").default;

export function Nav() {
  const [status, setStatus] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const countCart = useContext(UsersContext);
  return (
    <nav className="sm:sticky z-1 top-0 bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  onClick={() => setShowMenuMobile(!showMenuMobile)}
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-semibold"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  to="/product"
                >
                  Product
                </Link>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  to="/categories"
                >
                  Categories
                </Link>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <form className="hidden lg:block">
              <input
                className="text-white text-sm border-none bg-transparent mr-4 h-7 w-64 outline-none"
                placeholder="Search"
              />
            </form>
            <button
              type="button"
              className="relative bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-3"
              onClick={() => setShowCart(!showCart)}
            >
              <span className="sr-only">Shopping Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span
                className={
                  countCart.length && countCart[0].cart.length > 0
                    ? "bg-[#ffb020] absolute top-0 right-0 p-1 rounded-full"
                    : ""
                }
              ></span>
            </button>

            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative">
              <div onClick={() => setStatus(!status)}>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={`${localStorage.getItem("img_path")}`}
                    alt="avatar"
                  />
                </button>
              </div>
              <div
                className={
                  (status ? "block" : "hidden") +
                  " origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                }
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="/#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="/#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700"
                  to="/login"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div
          className={
            (showMenuMobile ? "hidden " : "") + "px-2 pt-2 pb-3 space-y-1"
          }
        >
          <a
            href="/#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="/#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="/#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="/#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
          <div className="px-2 pt-2 pb-3">
            <form>
              <input
                className="text-gray-300 border-input bg-transparent outline-none mr-4 h-7 w-full placeholder-center"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <Cart open={showCart} setOpen={setShowCart} />
    </nav>
  );
}

function Header() {
  return (
    <div className="flex justify-center items-center md:h-screen bg-gray-700">
      <div className="w-2/4 h-auto py-10 md:py-0">
        <p
          after="All the top locations – from restaurants and clubs, to galleries, famous places and more."
          className="after:block after:content-[attr(after)] after:text-sm after:my-4 text-xl md:text-4xl text-white text-center font-bold"
        >
          WELCOME
        </p>
        <div className="grid grid-flow-row p-4 md:grid-flow-col md:grid-cols-4 gap-6 md:p-6 md:mt-4 rounded-md bg-white">
          <DropDown title="Name" />
          <DropDown title="Category" />
          <DropDown title="Location" />
          <button
            type="button"
            before="Search"
            className="before:content-[attr(before)] before:text-white flex justify-center items-center w-auto bg-gradient-to-r from-purpel_903af9 to-pink_f5548e h-auto border rounded-md py-1 md:py-0"
          ></button>
        </div>

        {/* Categories Button Logo */}
        <div className="flex flex-wrap justify-center gap-5 items-center mt-12 leading-10">
          <CategoriesLogo />
        </div>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="text-black text-center">
        <p
          after="Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories"
          className="after:content-[attr(after)] after:block after:text-sm after:mt-3 after:text-gray_7a82a6 text-xl md:text-4xl leading-loose"
        >
          What kind of activity do you want to try?
        </p>
      </div>

      {/* Project Components */}
      <div className="container md:w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 mt-10 gap-6">
        <Project
          src={srcPro1}
          title={"Restaurant"}
          logo={<IoRestaurantOutline size={30} style={{ color: "white" }} />}
        />
        <Project
          src={srcPro2}
          title={"Places & Destination"}
          logo={<MdPlace size={30} style={{ color: "white" }} />}
        />
        <Project
          src={srcPro3}
          title={"Shopping & Store"}
          logo={<AiOutlineShoppingCart size={30} style={{ color: "white" }} />}
        />
        <Project
          src={srcPro1}
          title={"Art & History"}
          logo={<BiBed size={30} style={{ color: "white" }} />}
        />
        <Project
          src={srcPro2}
          title={"Hotel & Travel"}
          logo={<BsBank size={30} style={{ color: "white" }} />}
        />
        <Project
          src={srcPro3}
          title={"Food & Drink"}
          logo={<FaGlassMartiniAlt size={30} style={{ color: "white" }} />}
        />
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 border-t-2 border-pink_f5548e">
      <div className="pt-20 text-center leading-10 pb-5">
        <p className="text-4xl font-semibold">Best Listings Around The World</p>
        <span className="text-base text-gray-400">
          Explore the popular listings around the world
        </span>
      </div>
      <div className="container md:w-auto grid grid-cols px-5 sm:px-0 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Item />
      </div>
      <a
        className="p-3 mt-10 text-center text-sm text-yellow-50 font-semibold bg-gradient-to-r from-pink_f5548e to-orange_fa8b0c hover:from-orange_fa8b0c hover:to-pink_f5548e rounded-lg"
        href="/#"
      >
        Explore All 200+
      </a>
    </div>
  );
}

function Section3() {
  return (
    <div className="flex-columns justify-center items-center pt-16 pb-16 border-b-2">
      {/* Heading title */}
      <div className="text-center leading-10">
        <p className="text-4xl">
          Why <span className="text-pink-400">Direo</span> for your Business?
        </p>
        <p className="text-gray-400">
          Explore the popular listings around the world
        </p>
      </div>
      <div className="grid xl:grid-cols-2 sm:grid-cols-1">
        {/* Left */}
        <div
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
          className="col-span-1 sm:justify-self-center xl:justify-self-end"
        >
          <video
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            poster="https://assets1.lottiefiles.com/render/ksd5oyhj.png"
          >
            <source
              type="video/mp4"
              src="https://assets3.lottiefiles.com/render/ksd5oyhj.mp4"
            />
          </video>
        </div>
        {/* Right */}
        <div
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="col-span-1 mt-20 ml-14 sm:justify-self-center xl:justify-self-start"
        >
          <div className="grid grid-flow-row h-full">
            <div className="flex justify-center items-center w-4/5">
              <div className="flex justify-center items-center border w-16 h-12 rounded-full bg-purple-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 font-thin text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="block leading-8 ml-5">
                <p className="text-lg">Claim Listing</p>
                <span className="overflow-ellipsis text-gray-400">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  officia deserunt mollit.
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center w-4/5">
              <div className="flex justify-center items-center border w-16 h-12 rounded-full bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="block leading-8 ml-5">
                <p className="text-lg">Paid Listing</p>
                <span className="overflow-ellipsis text-gray-400">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  officia deserunt mollit.
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center w-4/5">
              <div className="flex justify-center items-center border w-16 h-12 rounded-full bg-pink-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h6 w-6 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="block leading-8 ml-5">
                <p className="text-lg">Promote your Business</p>
                <span className="overflow-ellipsis text-gray-400">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  officia deserunt mollit.
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center text-white text-sm pt-6">
              <a
                className="p-2 md:p-3 lg:p-3 bg-green-500 rounded-md font-semibold hover:bg-green-600"
                href="/#"
              >
                See our Pricing
              </a>
              <a
                className="p-2 md:p-3 lg:p-3 ml-5 bg-pink-500 rounded-md font-semibold hover:bg-pink-600"
                href="/#"
              >
                Submit Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4(props) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-10 max-w-max mx-auto">
      <div className="text-center leading-10">
        <p className="text-4xl">Destination we love</p>
        <p className="text-gray-400">
          Explore best listings around the world by city
        </p>
      </div>
      <div className="container grid md:grid-cols-2 pt-5 gap-6 px-5 md:px-0">
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            className="min-w-full"
            src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="NewYork City"
          />
          <div className="absolute top-4 left-5 text-white">
            <p className="font-semibold">London, UK</p>
            <span className="text-sm">68 Listings</span>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            className="min-w-full"
            src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3lvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="NewYork City"
          />
          <div className="absolute top-4 left-5 text-white">
            <p className="font-semibold">London, UK</p>
            <span className="text-sm">68 Listings</span>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            className="min-w-full"
            src="https://images.unsplash.com/photo-1551352912-484163ad5be9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN5ZG5leXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt="NewYork City"
          />
          <div className="absolute top-4 left-5 text-white">
            <p className="font-semibold">Sydney</p>
            <span className="text-sm">68 Listings</span>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            className="min-w-full"
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt="NewYork City"
          />
          <div className="absolute top-4 left-5 text-white">
            <p className="font-semibold">Paris</p>
            <span className="text-sm">68 Listings</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 leading-10">
        <p className="text-xl sm:text-4xl">Trusted By Over 4000+ Users</p>
        <p className="text-sm pt-2 sm:text-lg text-gray-400">
          Here is what people say about Direo
        </p>
      </div>
      {props.children}
    </div>
  );
}

function Section5() {
  const content = [
    {
      image:
        "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Francis Burton",
      name: "Toronto, Canada",
      description:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident culpa officia deserunt mollit.",
      button: "More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Francis Burton",
      name: "Toronto, Canada",
      description:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident culpa officia deserunt mollit.",
      button: "More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Francis Burton",
      name: "Toronto, Canada",
      description:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident culpa officia deserunt mollit.",
      button: "More",
    },
  ];
  return (
    <Slider autoplay={3000}>
      {content.map((item, index) => (
        <div className="flex flex-col justify-center items-center" key={index}>
          <div
            className="center w-24 h-24 rounded-full"
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: "cover",
            }}
          />
          <div className="text-center">
            <h1 className="font-bold">{item.title}</h1>
            <p className="text-sm text-gray-400">{item.name}</p>
          </div>
          <p className="mt-10 text-center tracking-wide text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </Slider>
  );
}

function Section6() {
  const sponsoring = [
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
    {
      src: "https://images.unsplash.com/photo-1635340245676-b097d28a2257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Traveloka",
      width: "145px",
      height: "43px",
    },
  ];
  return (
    <div className="pt-10 pb-10 border-t-2">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-items-center items-center gap-y-10">
        {sponsoring.map((items, index) => (
          <img
            className="rounded-full"
            key={index}
            src={items.src}
            alt={items.alt}
            width={items.width}
            height={items.height}
          />
        ))}
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="container flex flex-col justify-center items-center px-5 pt-10 pb-6 mx-auto bg-repeat bg-cover bg-center">
      <div className="text-center leading-10 pb-6">
        <p className="text-3xl">Subscribe to Newsletter</p>
        <p className="text-gray_7a82a6 pt-2">
          Subscribe to get update and information. Don't worry, we won't send
          spam!
        </p>
      </div>
      <form className="flex justify-center items-center relative font-normal text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute left-8 top-3 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <input
          className="rounded-l-full text-gray_7a82a6 text-opacity-50 outline-none py-3 px-8 sm:px-16 shadow-2xl focus:placeholder-transparent"
          type="text"
          placeholder="Enter your email"
        />
        <input
          className="text-sm font-bold text-white rounded-r-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 py-3 px-6 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export function About() {
  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4 md:gap-y-6 sm:grid-cols-2 sm:gap-y-8 max-w-5xl mx-auto pt-10 pb-10 border-b-2 border-gray-400">
      <ul className="mx-auto leading-8 tracking-wider">
        <li className="text-base font-bold pb-4 cursor-default">
          Company Info
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            About Us
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Contact Us
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Our Listings
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Our Pricings{" "}
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Support
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Privacy Policy
          </a>
        </li>
      </ul>

      <ul className="mx-auto leading-8 tracking-wider">
        <li className="text-base font-bold pb-4 cursor-default">
          Helpful Links
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Join Direo
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Sign In
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            How it Work
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Advantages{" "}
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Direo App
          </a>
        </li>
        <li className="font-normal text-gray_7a82a6">
          <a className="hover:text-pink_f5548e" href="/#">
            Packages
          </a>
        </li>
      </ul>

      <ul className="pt-5 sm:pt-0 pl-8 mx-auto leading-10 tracking-wider">
        <li className="text-base font-bold pb-3 sm:pb-4 cursor-default">
          Connect with Us
        </li>
        <li className="flex items-center font-normal text-gray_7a82a6">
          <div className="p-1 bg-gray-200 mr-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-pink_f5548e"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
          <a className="hover:text-pink_f5548e" href="/#">
            Contact Support
          </a>
        </li>
        <li className="flex items-center font-normal text-gray_7a82a6">
          <div className="p-1 text-blue-400 bg-gray-200 mr-2 rounded-full">
            <AiOutlineTwitter size={16} />
          </div>
          <a className="hover:text-pink_f5548e" href="/#">
            Twitter
          </a>
        </li>
        <li className="flex items-center font-normal text-gray_7a82a6">
          <div className="p-1 text-blue-500 bg-gray-200 mr-2 rounded-full">
            <FaFacebookF size={15} />
          </div>
          <a className="hover:text-pink_f5548e" href="/#">
            Facebook
          </a>
        </li>
        <li className="flex items-center font-normal text-gray_7a82a6">
          <div className="p-1 text-pink-400 bg-gray-200 mr-2 rounded-full">
            <TiSocialInstagram size={16} />
          </div>
          <a className="hover:text-pink_f5548e" href="/#">
            Instagram
          </a>
        </li>
        <li className="flex items-center font-normal text-gray_7a82a6">
          <div className="p-1 text-red-500 bg-gray-200 mr-2 rounded-full">
            <TiSocialGooglePlus size={18} />
          </div>
          <a className="hover:text-pink_f5548e" href="/#">
            Google+
          </a>
        </li>
      </ul>

      <ul className="pt-5 sm:pt-0 sm:mx-auto sm:leading-8 sm:tracking-wider">
        <li className="text-left text-base font-bold sm:py-0 pb-2 sm:pb-4 cursor-default">
          Direo on Mobile
        </li>
        <p className="text-left font-normal text-gray_7a82a6 cursor-default pt-5 sm:pt-0">
          Download the Direo app today so you can find your events anytime,
          anywhere.
        </p>
        <div className="sm:inline-flex justify-center items-center grid-cols-2 w-full sm:w-max mt-3 text-white">
          <div className="inline-flex items-center py-2 px-3 bg-gray-500 rounded-md bg-gradient-to-r from-pink_f5548e to-orange_fa8b0c cursor-pointer">
            <span>
              <AiOutlineApple size={18} />
            </span>
            <span className="ml-1">App Store</span>
          </div>
          <div className="inline-flex items-center p-2 mt-4 sm:mt-0 sm:ml-3 bg-bg_272b41 rounded-md cursor-pointer">
            <span>
              <DiAndroid size={16} />
            </span>
            <span className="ml-1">Google play</span>
          </div>
        </div>
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <div className="container flex justify-around lg:justify-around items-center sm:justify-between w-full mx-auto pt-2 h-20 sm:px-10">
      <div className="hidden sm:flex items-center">
        <img
          className="block h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <span className="ml-5 text-gray_7a82a6">©2019 Direo. </span>
      </div>
      <div className="inline-flex items-center">
        <span className="px-2 pb-1">
          <GoOctoface className="text-purpel_903af9" size={20} />
        </span>
        <span className="text-gray_7a82a6">Made with by Phát Đỗ</span>
      </div>
      <a
        href="/#"
        className="hidden sm:block rounded-md py-2 px-4 text-white bg-bg_272b41"
      >
        English
      </a>
    </div>
  );
}

function Home() {
  const tokenHeader = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + tokenHeader;

  return tokenHeader ? (
    <>
      <NavPage />
      <Header />

      <section>
        <Categories />
      </section>
      <section>
        <Products />
      </section>

      <section>
        <Section3 />
      </section>

      <section>
        <Section4>{<Section5 />}</Section4>
      </section>

      <section>
        <Section6 />
      </section>

      <section
        style={{
          backgroundImage: `url(${sbShape})`,
          paddingBottom: "6rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Section7 />
      </section>

      <section>
        <About />
      </section>
      <Footer />
    </>
  ) : (
    <Redirect to="/login" />
  );
}

export { Home };
