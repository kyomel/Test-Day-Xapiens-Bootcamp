`use strict`

const axios = require("axios");
const urlPost = "https://jsonplaceholder.typicode.com/posts";
const urlUser= "https://jsonplaceholder.typicode.com/users";

async function combineUrl() {
    const posts = await axios.get(urlPost);
    const users = await axios.get(urlUser);
    const combine = posts.data.map((post) => {
        post.user = users.data.find((element) => element.id === post.userId);
        return post;
    });
    return combine;
};

combineUrl().then((res) => console.log(res));