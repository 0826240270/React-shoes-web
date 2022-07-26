const axios = require("axios").default;
// const host = "https://be-shoes-web.herokuapp.com";
const host = "http://localhost:3001";

const fetchCart = async () => {
  try {
    let { data } = await axios.get(`${host}/home`);
    localStorage.setItem("cart", JSON.stringify(data.cart));
    return data.infor;
  } catch (error) {
    console.log(`%c ${error}`, "color: red");
  }
};

const fetchProducts = async () => {
  try {
    let { data } = await axios.get(`${host}/categories`);
    return data;
  } catch (error) {
    console.log(`%c  ${error}`, "color: red");
  }
};

const fetchDetailProducts = async (_id) => {
  try {
    let { data } = await axios.get(`${host}/categories/${_id}`);
    return data;
  } catch (error) {
    console.log(`%c ${error}`, "color: red");
  }
};

const postProduct = async (detailProducts, setSoldOut) => {
  try {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    localCart.push(detailProducts);
    localStorage.setItem("cart", JSON.stringify(localCart));
    let { data } = await axios.post(`${host}/categories/${detailProducts._id}`);
    if (data.status !== 400) {
      setSoldOut(false);
      localCart.unshift(detailProducts);
    } else setSoldOut(true);
  } catch (err) {
    console.log(`%c ${err}`, "color: red");
  }
};

const removeItem = async (index, items, items_id) => {
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  await axios.post(`${host}/categories/${items_id}?_method=PUT`, items);
};

const getBrands = async () => {
  try {
    let { data } = await axios.get(`${host}/brands`);
    return data;
  } catch (error) {
    console.log(`%c ${error}`, "color: red");
  }
};

const sendFeedBack = async (email, message) => {
  try {
    let { data } = await axios.post(`${host}/sendMail/feedback`, {
      client: email,
      content: message,
    });
    return data;
  } catch (error) {
    console.log(`%c ${error}`, "color: red");
  }
};

export {
  fetchCart,
  fetchProducts,
  fetchDetailProducts,
  postProduct,
  removeItem,
  getBrands,
  sendFeedBack,
};
