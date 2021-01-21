`use strict`

const axios = require('axios');


async function join() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        let posts = response.data;

        let postJoin = posts.map(async post => {
            let response2 = await axios.get("https://jsonplaceholder.typicode.com/users");
            post.users = response2.data;
            return post;
        })
        let postUser = await Promise.all(postJoin);
        console.log(postUser);
    } catch (error) {
        console.log(error);
    }
}

join()
