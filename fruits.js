`use strict`

const axios = require("axios");
const where = require("lodash.where");

const api = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

const getPost = () => 
    axios
    .get(`${api}`)
    .then((response) => response.data)
    .catch((error) => console.log({ user: error}));

const allPost = async() => {
    let post = await getPost();
    let filtering = where(post, { "category" : "fruits"});

    console.log("filtering", filtering);
    return filtering;
};

allPost();
