import React from "react";
import banner from "../../img/banner.png";
import shoes from "../../img/running-shoes.png";

function mainPage() {
  return (
    <>
      {/* Khung */}
      <div
        className="w-full h-auto"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="w-full mx-auto">
          <div className="px-5">
            {/* 3 items headers */}
            <div className="flex flex-row justify-between items-center py-5">
              {/* Flex items 1 */}
              <div className="flex-col items-center py-5">
                <p className="w-max mb-36 mx-5 text-gray_7a82a6">Men shoes</p>
                <div className="grid place-content-center w-full">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500">
                    <span className="grid place-items-center h-full w-full text-center text-white">
                      0/2
                    </span>
                  </div>
                </div>
                <p className="w-max mt-36 mb-4 mx-5 text-gray_7a82a6">
                  Men shoes
                </p>
              </div>

              {/* Flex items 2 */}
              <div className="flex flex-col max-w-md">
                <p className="text-2xl text-red-500">New Running Shoes</p>
                <p className="text-5xl font-extrabold text-white pt-2">
                  Men's Like Plex
                </p>
                <p className="text-white text-sm py-5 font-Inter">
                  New Running ShoesMen's Like Plexipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-row items-center w-full">
                  <a
                    href="/#"
                    className="w-max py-2 px-4 sm:py-2 sm:px-10 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-red-500 cursor-pointer"
                  >
                    <p className="w-max text-center font-Inter font-semibold text-white">
                      Buy now
                    </p>
                  </a>
                  <a
                    href="/#"
                    className="w-max py-2 px-4 ml-6 sm:py-2 sm:px-10 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-red-500 cursor-pointer"
                  >
                    <p className="w-max text-center font-Inter font-semibold text-white">
                      See more
                    </p>
                  </a>
                </div>
              </div>

              {/* Flex items 3 */}
              <div>
                <div className="w-full">
                  <img src={shoes} alt="Shoes logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainPage;
