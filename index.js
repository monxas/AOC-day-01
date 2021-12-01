const fetch = require('node-fetch');	//npm install node-fetch

// fetch the data from the API
async function getData() {
const response = await fetch('httpdata.txt');
const body = await response.text();

console.log(body);
};

getData();