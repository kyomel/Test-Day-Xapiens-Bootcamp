`use strict`

const axios = require("axios");
const where = require("lodash.where");

const url = "https://api.themoviedb.org/3/"

class movieAPI {
    async getData(search) {
        try {
            const api = url+search;
            let searchData = await axios(api)
            return searchData.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getDataPopular(search) {
        try {
            const api = url+search;
            let searchData = await axios(api)
            let moviesList = searchData.data.results;
            let movieVote = moviesList.filter((e) => e.vote_average > 7.5);
            return moviesList;
        } catch (error) {
            console.log(error);
        }
    }
}

const fetcher = new movieAPI();

async function searchAll() {
    const titleInd = 'search/movie?api_key=7b58770b016c4e14790232cf745065dd&query=indonesia';
    const getTitleData = await fetcher.getData(titleInd);

    const searchKeanu = 'search/person?api_key=7b58770b016c4e14790232cf745065dd&language=en-US&query=Keanu%20Reeves&page=1';
    const getKeanuData = await fetcher.getData(searchKeanu);

    const searchActor = 'search/multi?api_key=7b58770b016c4e14790232cf745065dd&language=en-US&query=Robert Downey Jr &query=Tom Holland&page=1';
    const getActor = await fetcher.getData(searchActor);

    const searchPopular = 'https://api.themoviedb.org/3/search/multi?api_key=7b58770b016c4e14790232cf745065dd&release_dates=2016&page=1&rating=75';
    const getPopular = await fetcher.getDataPopular(searchPopular);

    console.log('getDataInd: ', JSON.stringify(getTitleData));
    console.log('========='.repeat(15));
    console.log('getDataKeanu: ', JSON.stringify(getKeanuData));
    console.log('========='.repeat(15));
    console.log('getDataActor: ', JSON.stringify(getActor));
    console.log('========='.repeat(15));
    console.log('getPopular: ', JSON.stringify(getPopular));

}

searchAll();