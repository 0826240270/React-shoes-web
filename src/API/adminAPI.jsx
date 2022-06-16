const axios = require("axios").default;
// const host = "https://be-shoes-web.herokuapp.com";
const host = "http://localhost:3001";
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

const uploadProduct = async (name, status, quantity, price) => {
  try {
    let result = await axios.post(`${host}/admin/insertProducts`, {
      name,
      status,
      quantity,
      price,
    });
    console.log(
      "🚀 ~ file: adminAPI.jsx ~ line 54 ~ uploadProduct ~ result",
      result
    );
  } catch (error) {
    console.log(`%c ${error}`, "color: red");
  }
};

export { fetchUser, fetchProductsAdmin, fetchCustomers, uploadProduct };
