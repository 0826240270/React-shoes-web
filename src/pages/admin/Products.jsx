import React, { useState, useEffect } from "react";
import { UpSearch } from "./Customers";

const axios = require("axios").default;

const fetchProducts = () => {
  const api = "https://intense-retreat-81423.herokuapp.com";
  return axios
    .get(`${api}/dashboard/products`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(`%c ${err}`, "color: red");
    });
};

function ListProducts({ name }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts()
      .then((items) => {
        setProducts(items || []);
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      });
  }, []);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border border-gray-300 border-opacity-50 sm:rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-gray_7a82a6 tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-gray_7a82a6 tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-gray_7a82a6 tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-gray_7a82a6 tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="font-semibold sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products
                  .filter((item) =>
                    item
                      ? item.name.toLowerCase().includes(name.toLowerCase())
                      : name === ""
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={item.path}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <span className="text-sm text-gray_7a82a6">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray_7a82a6">
                          {item.quantity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-gray_7a82a6">
                        {item.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="/#"
                          className="text-indigo-600 hover:text-indigo-900 font-semibold"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsSite() {
  let [search, setSearch] = useState("");
  return (
    <div className="pt-10 px-8 mx-auto w-full">
      <UpSearch
        headTitle={"Products"}
        upTitle={"Add Product"}
        placeSearch={"Search product"}
        setSearch={setSearch}
      />
      <ListProducts name={search} />
    </div>
  );
}

export { ProductsSite };
