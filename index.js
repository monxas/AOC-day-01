const fetch = require('node-fetch');	//npm install node-fetch

// fetch the data from the API
async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/monxas/AOC-day-01/develop/data.txt');
    const body = await response.text();
    // array of lines linebreak
    const lines = body.split('\n');

    increased = 0;
    decreased = 0;
    lastValue = +lines[0];
    lines.forEach(val => {
        +val > lastValue ? increased++ : decreased++;
        lastValue = +val;
    });
    console.log(`increased: ${increased}`);
    console.log(`decreased: ${decreased}`);
};

getData();