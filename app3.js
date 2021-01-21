`use strict`
const fetch = require('node-fetch');
const urlAPI = "https://mul14.github.io/data/employees.json";

async function getEmployee(){
    const resData = await fetch(`${urlAPI}`);
    const responses = await resData.json();

    const salary =15000000;
    let dataSalary = responses.find((item) => {
        return resultSeacrh = item.salary === salary ? true : false;
    });
    console.log('dataSalary', dataSalary);

    const city = "DKI Jakarta";
    let dataCity = responses.filter((item) => {
        return resultSeacrh = item.addresses[0].city === city ? true : false;
    });
    console.log('dataCity', dataCity);

    const dept ="Research and development";
    let dataDept = responses.filter((item) => {
        return resultSeacrh = item.department.name === dept ?  true : false;
    });
    console.log('dataDept', dataDept);

}

getEmployee()

