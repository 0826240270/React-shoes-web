const axios = require("axios").default;
const host = "https://be-shoes-web.herokuapp.com";

const fetchUser = () => {
  return (
    axios
      .get(`${host}/dashboard/account`)
      // .get(`/dashboard/account`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

const fetchProductsAdmin = () => {
  return (
    axios
      .get(`${host}/dashboard/products`)
      // .get(`/dashboard/products`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

const fetchCustomers = () => {
  return (
    axios
      .get(`${host}/dashboard/customers`)
      // .get(`/dashboard/customers`)
      .then(({ data }) => {
        return data.customersList;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

export { fetchUser, fetchProductsAdmin, fetchCustomers };
