'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


//form w3 schools

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let seattle = {
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
lima.render();