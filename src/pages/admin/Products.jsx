import React, { useState, useEffect } from "react";
import { UpSearch } from "./Customers";
import { Pagination } from "../client/Categories";

import { fetchProductsAdmin } from "../../API/adminAPI";
import { Hypnosis } from "react-cssfx-loading";

function ListProducts({ name }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  useEffect(() => {
    fetchProductsAdmin()
      .then((items) => {
        setProducts(items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mt-[15%]">
          <Hypnosis duration="4s" width="70px" height="70px" />
        </div>
      ) : (
        <>
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
                      {currentPosts
                        .filter((item) =>
                          item
                            ? item.name
                                .toLowerCase()
                                .includes(name.toLowerCase())
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
                                    alt="shoes-img"
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
          <div className="grid place-items-center w-full">
            <Pagination
              products={products}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              path={"dashboard/products"}
            />
          </div>
        </>
      )}
    </>
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
        path="#/"
      />
      <ListProducts name={search} />
    </div>
  );
}

export { ProductsSite };
