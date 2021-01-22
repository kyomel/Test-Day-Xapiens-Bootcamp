`use strict`

const axios = require("axios");
const fs = require('fs');

const getData = () => 
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch((error) => console.log({ user: error}));

const getAll = async() => {
    let datas = await getData();

    let searchAll = datas.filter((item) => {
        console.log("title: ", item.title);
        return item.title
    });
}

getAll();
