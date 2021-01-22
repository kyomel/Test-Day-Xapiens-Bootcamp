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

    const birthday = " -04- "
    let dataBirthday = responses.filter((item) => {
        return resultSeacrh = item.birthday === birthday ? true : false;
    });

    const startDate = "2019-10-01";
    const EndDate = "2019-10-31";
    let absense = responses.filter((item) => {
        return resultSeacrh = item.presence_list[0] > startDate && item.presence_list < EndDate ? true : false;
    });

}

getEmployee()