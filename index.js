const fetch = require('node-fetch');	//npm install node-fetch

// fetch the data from the API
async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/monxas/AOC-day-01/develop/data.txt');
    const body = await response.text();
    // array of lines linebreak
    const lines = body.split('\n');

    firstPart(lines);
    secondPart(lines);
};


// get price of bitcoin on coingecko api in usd
async function getPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
    const body = await response.json();
    console.log(body.market_data.current_price.usd);
};

// function to know if number is even
function isEven(num) {
    return num % 2 == 0;
}










function firstPart(lines) {
    let increased = 0;
    let decreased = 0;
    let lastValue = +lines[0];
    lines.forEach(val => {
        +val > lastValue ? increased++ : decreased++;
        lastValue = +val;
    });
    console.log(`increased: ${increased} 🎉 `); 
    // console.log(`decreased: ${decreased}`);
}

function secondPart(lines) {
    let increased = 0;
    let decreased = 0;
    let lastValue = +lines[0]+lines[1]+lines[2];
    const lastIndex = lines.length - 1;

    lines.forEach((val, i) => {
        if (i+2 <= lastIndex) {
            let currentValue = +lines[i] + +lines[i+1] + +lines[i+2];
            currentValue > lastValue ? increased++ : decreased++;
            lastValue = currentValue;
        }
    });
    console.log(`increased: ${increased} 🎉 `); 
    // console.log(`decreased: ${decreased}`);
}
getData();