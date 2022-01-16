const axios = require("axios").default;

const fetchUser = () => {
  // const api = "https://intense-retreat-81423.herokuapp.com";
  return (
    axios
      // .get(`${api}/dashboard/account`)
      .get(`/dashboard/account`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

const fetchProductsAdmin = () => {
  // const api = "https://be-shoes-web.herokuapp.com";
  return (
    axios
      // .get(`${api}/dashboard/products`)
      .get(`/dashboard/products`)
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
      // .get(`${api}/dashboard/customers`)
      .get(`/dashboard/customers`)
      .then(({ data }) => {
        return data.customersList;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

export { fetchUser, fetchProductsAdmin, fetchCustomers };
