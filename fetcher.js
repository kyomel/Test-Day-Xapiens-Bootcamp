`use strict`

const axios = require("axios");

const datas = {
    "id": 30,
    "name": "Someone"
};

class Fetcher {
    async getData() {
        try {
            const getJsonResponse = await axios.get("https://httpbin.org/get");
            console.log(getJsonResponse.data);
            console.log(getJsonResponse.status);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    async delData() {
        try {
            const deleteJsonResponse = await axios.delete("https://httpbin.org/delete");
            console.log(deleteJsonResponse.data);
            console.log(deleteJsonResponse.status);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    async postData() {
        try {
            const postJsonResponse = await axios.post("https://httpbin.org/post", datas);
            console.log(postJsonResponse.data);
            console.log(postJsonResponse.status);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    async putData() {
        try {
            const putJsonResponse = await axios.put("https://httpbin.org/put", datas);
            console.log(putJsonResponse.data);
            console.log(putJsonResponse.status);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    async patchData() {
        try {
            const patchJsonResponse = await axios.patch("https://httpbin.org/put", datas);
            console.log(patchJsonResponse.data);
            console.log(patchJsonResponse.status);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }
}

const fetcher = new Fetcher();

async function allFetcher(){
    const getData = await fetcher.getData();
    const delData = await fetcher.delData();
    const postData = await fetcher.postData();
    const putData = await fetcher.putData();
    const patchData = await fetcher.patchData();
}

allFetcher();