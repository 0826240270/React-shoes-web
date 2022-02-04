const axios = require("axios").default;
const host = "https://be-shoes-web.herokuapp.com";

const fetchCart = () => {
  return (
    axios
      .get(`${host}/home`)
      // .get(`/home`)
      .then((res) => {
        localStorage.setItem("cart", JSON.stringify(res.data.cart));
        return res.data.infor;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

const fetchProducts = () => {
  return (
    axios
      .get(`${host}/categories`)
      // .get(`/categories`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(`%c  ${err}`, "color: red");
      })
  );
};

const fetchDetailProducts = (_id) => {
  return (
    axios
      .get(`${host}/categories/${_id}`)
      // .get(`/categories/${_id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      })
  );
};

const postProduct = (detailProducts) => {
  try {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    localCart.unshift(detailProducts);
    localStorage.setItem("cart", JSON.stringify(localCart));
    axios.post(`${host}/categories/${detailProducts._id}`);
    // axios.post(`/categories/${detailProducts._id}`);
  } catch (err) {
    console.log(`%c ${err}`, "color: red");
  }
};

const removeItem = (index, items, removeItems) => {
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  removeItems(JSON.parse(localStorage.getItem("cart")));
  axios.post(`${host}/categories/${items._id}?_method=PUT`, items);
  // axios.post(`/categories/${items._id}?_method=PUT`, items);
};

export {
  fetchCart,
  fetchProducts,
  fetchDetailProducts,
  postProduct,
  removeItem,
};
