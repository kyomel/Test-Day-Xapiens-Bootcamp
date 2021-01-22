`use strict`

const ineed = require("ineed");

ineed.collect.images.hyperlinks.from('https://www.kompas.com/', 
    function (err, response, result) {
        let headline = result.hyperlinks;

        restRenameHead = JSON.parse(JSON.stringify(headline).split('"href":').join('"URL":'));

        restRenameText = JSON.parse(JSON.stringify(restRenameHead).split('"text":').join('"Title":'),);
        
        let resultProperty = restRenameText;
        console.log(resultProperty);
});
