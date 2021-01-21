`use strict`

const fetch = require('node-fetch');
let api = "https://mul14.github.io/data/employees.json";

async function getEmployee(){
    let resData = await fetch(`${api}`);
    let responses = await resData.json();

    let salary = 15000000;
    let dataSalary = responses.find((item) => {
        return dataSalary = item.salary === salary ? true : false;
    });
    console.log('dataSalary', dataSalary);

    let city =  "DKI Jakarta";
    let dataCity = responses.filter(item) => {
        return dataCity = item.addresses[0].city === city ? true : false;
    });
    console.log('dataCity', dataCity);

    let dept = "Research and development";
    let dataDept = responses.filter((item) => {
        return dataDept =  item.department.name === dept ?  true : false;
    });

    console.log('dataDept', dataDept);
}

getEmployee()