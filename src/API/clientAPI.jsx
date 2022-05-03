const axios = require("axios").default;
// const host = "https://be-shoes-web.herokuapp.com";
const host = "http://localhost:3001";

const fetchCart = () => {
  return axios
    .get(`${host}/home`)
    .then((res) => {
      localStorage.setItem("cart", JSON.stringify(res.data.cart));
      return res.data.infor;
    })
    .catch((err) => {
      console.log(`%c ${err}`, "color: red");
    });
};

const fetchProducts = () => {
  return axios
    .get(`${host}/categories`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(`%c  ${err}`, "color: red");
    });
};

const fetchDetailProducts = (_id) => {
  return axios
    .get(`${host}/categories/${_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(`%c ${err}`, "color: red");
    });
};

const postProduct = async (detailProducts, setSoldOut) => {
  try {
    let localCart = JSON.parse(localStorage.getItem("cart"));
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

const removeItem = (index, items, removeItems) => {
  let itemRemove = items[index];
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  removeItems(JSON.parse(localStorage.getItem("cart")));
  axios.post(`${host}/categories/${itemRemove._id}?_method=PUT`, items);
};

export {
  fetchCart,
  fetchProducts,
  fetchDetailProducts,
  postProduct,
  removeItem,
};
