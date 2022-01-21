import { useState, useEffect } from "react";
import { fetchUser } from "../../API/adminAPI";

function AccountSite() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    fetchUser()
      .then((info) => {
        setAccount(info);
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      });
  }, []);
  return (
    <div className="max-w-6xl pt-16 mx-auto">
      <p className="font-bold ml-5 text-3xl lg:ml-0">Account</p>
      <div className="flex flex-wrap flex-col md:flex-row pt-8">
        {/* Left */}
        <div className="w-full px-5 lg:px-0 md:w-[30%]">
          <div className="flex flex-col justify-center items-center px-6 py-8 rounded-md shadow-all-rounded">
            <div className="w-24 h-24">
              <img
                className="rounded-full w-full h-full"
                src={account.avatar}
                alt="Avatar"
              />
            </div>
            <p className="font-Inter font-semibold text-xl py-2">Phát Đỗ</p>
            <span className="font-Inter text-sm text-[#65748b] py-1">
              Los Angeles USA
            </span>
            <span className="font-Inter text-sm text-[#65748b]">GTM-7</span>
          </div>
          <div className="pt-3">
            <label htmlFor="file-upload">
              <div className="px-1 py-3 border-2 hover:border-opacity-60 rounded-md shadow-all-rounded transition-colors duration-500 hover:border-[#5048e5] cursor-pointer">
                <p className="w-full text-center font-Inter font-semibold text-[#5048e5]">
                  Upload picture
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </p>
              </div>
            </label>
          </div>
        </div>
        {/* Right */}
        <div className="pt-16 w-full md:w-[70%] md:pt-0 md:pl-6">
          <div className="sm:px-6 sm:pb-8">
            <h3 className="ml-5 md:ml-0 text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 ml-5 md:ml-0 text-sm text-[#65748b]">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="first-name"
                        defaultValue={account.firstName}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        defaultValue={account.lastName}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email-address"
                        autoComplete="email"
                        defaultValue={account.email}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
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
                        autoComplete="phone"
                        defaultValue={account.phone}
                        className="mt-1 transition-colors duration-500  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="passwo_"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="passwo_"
                        id="passwo_"
                        autoComplete="password"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        defaultValue={account.address}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className=" py-5 text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AccountSite };
