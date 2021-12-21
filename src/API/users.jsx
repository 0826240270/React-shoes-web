const axios = require("axios").default;

const fetchInfo = () => {
  const api = "https://be-shoes-web.herokuapp.com";
  return axios
    .get(`${api}/home`)
    .then((res) => {
      localStorage.setItem("cart", JSON.stringify(res.data.cart));
      return res.data.infor;
    })
    .catch((err) => {
      console.log(`%c ${err}`, "color: red");
    });
};

export { fetchInfo };
