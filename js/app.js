'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


//form w3 schools

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let Shops = [];
function Shop(locationName, minCustomers, maxCustomers, avgCookies) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalCookiesPerDay = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    // console.log(this);
    Shops.push(this);
}


Shop.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
    }
}
Shop.prototype.calecCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
        this.totalCookiesPerDay += this.cookiesEachHour[i];
    }
}


//make new ins

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);





//seattle.calcCustomersEachHour();
//seattle.calecCookiesEachHour();
//console.log(seattle);

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

//header fun

function makeHeader() {

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let firstTh = document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {

        let hoursTh = document.createElement('th');
        headerRow.appendChild(hoursTh);
        hoursTh.textContent = hours[i];


    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = '  Daily Location Total';

}


//render meth

Shop.prototype.render = function () {

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let nameTd = document.createElement('td');
    dataRow.appendChild(nameTd);
    nameTd.textContent = this.locationName;

    for (let i = 0; i < hours.length; i++) {

        let cookiesTd = document.createElement('td');
        dataRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesEachHour[i];

    }
    let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);
    totalTd.textContent = this.totalCookiesPerDay;



}
//footer fun
function makefooter() {

    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);

    firstTh.textContent = 'Totals';

    let totalOfTotals = 0;


    for (let i = 0; i < hours.length; i++) {

        let totalForEachHour = 0;
        for (let j = 0; j < Shops.length; j++) {

            // console.log(Shops[j].cookiesEachHour[i]);
            totalForEachHour += Shops[j].cookiesEachHour[i];
            totalOfTotals += Shops[j].cookiesEachHour[i];
        }
        // console.log(totalForEachHour);
        // console.log('totalsss', totalOfTotals);
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalForEachHour;

    }

    let lastTh = document.createElement('th');
    footerRow.appendChild(lastTh);

    lastTh.textContent = totalOfTotals;


}

////calls

makeHeader();
for (let i = 0; i < Shops.length; i++) {
    console.log(Shops[i]);
    Shops[i].calcCustomersEachHour();
    Shops[i].calecCookiesEachHour();
    Shops[i].render();
}

makefooter();




/*let seattle = {
    location: 'Seattle',
    minCustormers: 23,
    maxCustormers: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            //console.log(hours[i]);
            this.customersEachHour.push(random(this.minCustormers, this.maxCustormers));
        }
    },
    calecCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            //this.total=this.total+this.cookiesEachHour[i];
            this.total += this.cookiesEachHour[i];
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        // console.log(parent);
        let nameElement = document.createElement('h2');
        //console.log(nameElement);
        parent.appendChild(nameElement);
        nameElement.textContent = this.location;
        let unoderedList = document.createElement('ul');
        parent.appendChild(unoderedList);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unoderedList.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}  cookies`;

        }

        let totalElement = document.createElement('li');
        unoderedList.appendChild(totalElement);
        totalElement.textContent = `Total:${this.total} cookies`;

    }

}


seattle.calcCustomersEachHour();
//console.log(seattle.customersEachHour);
seattle.calecCookiesEachHour();
//console.log(seattle.cookiesEachHour);
seattle.render();







//for Tokyo:
let tokyo = {
    location: 'Tokyo',
    minCustormers: 3,
    maxCustormers: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            //console.log(hours[i]);
            this.customersEachHour.push(random(this.minCustormers, this.maxCustormers));
        }
    },
    calecCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            //this.total=this.total+this.cookiesEachHour[i];
            this.total += this.cookiesEachHour[i];
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        // console.log(parent);
        let nameElement = document.createElement('h2');
        //console.log(nameElement);
        parent.appendChild(nameElement);
        nameElement.textContent = this.location;
        let unoderedList = document.createElement('ul');
        parent.appendChild(unoderedList);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unoderedList.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.cookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unoderedList.appendChild(totalElement);
        totalElement.textContent = `Total:${this.total} cookies`;

    }

}


tokyo.calcCustomersEachHour();
//console.log(seattle.customersEachHour);
tokyo.calecCookiesEachHour();
//console.log(seattle.cookiesEachHour);
tokyo.render();





//for dubai
let dubai = {
    location: 'Dubai',
    minCustormers: 11,
    maxCustormers: 38,
    avgCookies: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            //console.log(hours[i]);
            this.customersEachHour.push(random(this.minCustormers, this.maxCustormers));
        }
    },
    calecCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            //this.total=this.total+this.cookiesEachHour[i];
            this.total += this.cookiesEachHour[i];
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        // console.log(parent);
        let nameElement = document.createElement('h2');
        //console.log(nameElement);
        parent.appendChild(nameElement);
        nameElement.textContent = this.location;
        let unoderedList = document.createElement('ul');
        parent.appendChild(unoderedList);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unoderedList.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.cookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unoderedList.appendChild(totalElement);
        totalElement.textContent = `Total:${this.total} cookies`;

    }

}


dubai.calcCustomersEachHour();
//console.log(seattle.customersEachHour);
dubai.calecCookiesEachHour();
//console.log(seattle.cookiesEachHour);
dubai.render();




//paris

let paris = {
    location: 'Paris',
    minCustormers: 20,
    maxCustormers: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            //console.log(hours[i]);
            this.customersEachHour.push(random(this.minCustormers, this.maxCustormers));
        }
    },
    calecCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            //this.total=this.total+this.cookiesEachHour[i];
            this.total += this.cookiesEachHour[i];
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        // console.log(parent);
        let nameElement = document.createElement('h2');
        //  console.log(nameElement);
        parent.appendChild(nameElement);
        nameElement.textContent = this.location;
        let unoderedList = document.createElement('ul');
        parent.appendChild(unoderedList);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unoderedList.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.cookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unoderedList.appendChild(totalElement);
        totalElement.textContent = `Total:${this.total} cookies`;

    }

}


paris.calcCustomersEachHour();
//console.log(seattle.customersEachHour);
paris.calecCookiesEachHour();
//console.log(seattle.cookiesEachHour);
paris.render();

//for lima
let lima = {
    location: ' lima',
    minCustormers: 2,
    maxCustormers: 16,
    avgCookies: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            //console.log(hours[i]);
            this.customersEachHour.push(random(this.minCustormers, this.maxCustormers));
        }
    },
    calecCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            //this.total=this.total+this.cookiesEachHour[i];
            this.total += this.cookiesEachHour[i];
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        // console.log(parent);
        let nameElement = document.createElement('h2');
        //console.log(nameElement);
        parent.appendChild(nameElement);
        nameElement.textContent = this.location;
        let unoderedList = document.createElement('ul');
        parent.appendChild(unoderedList);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unoderedList.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.cookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unoderedList.appendChild(totalElement);
        totalElement.textContent = `Total:${this.total} cookies`;

    }

}


lima.calcCustomersEachHour();
//console.log(seattle.customersEachHour);
lima.calecCookiesEachHour();
//console.log(seattle.cookiesEachHour);
lima.render();*/
