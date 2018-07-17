'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var pikeLocation = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm'],
  total: 0,
  getSaleData: function() {
    var ulEl = document.createElement('ul');

    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;

      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = 'Total: ' + this.total;
    ulEl.appendChild(liElOne);
    var pikehourlySection = document.getElementById('pikehourly');
    pikehourlySection.appendChild(ulEl);
  }
};
pikeLocation.getSaleData();
console.log('pike', pikeLocation);

var seaTacLocation = {
  displayName: 'SeaTac Airport',
  minCustomerHour: 3,
  maxCustomerHour: 24,
  avgCookies: 1.2,
  hours: [],
  total: 0,
  getSaleData: function() {
    var ulEl = document.createElement('ul');

    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;

      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i];
      ulEl.appendChild(liEl);
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = this.total;
    ulEl.appendChild(liElOne);
    var seatachourlySection = document.getElementById('seatachourly');
    seatachourlySection.appendChild(ulEl);
  }
};
seaTacLocation.getSaleData();
console.log('SeaTac', seaTacLocation);

var centerLocation = {
  displayName: 'Seattle Center',
  minCustomerHour: 11,
  maxCustomerHour: 38,
  avgCookies: 3.7,
  hours: [],
  total: 0,
  getSaleData: function() {
    var ulEl = document.createElement('ul');

    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;

      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i];
      ulEl.appendChild(liEl);
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = this.total;
    ulEl.appendChild(liElOne);
    var centerhourlySection = document.getElementById('centerhourly');
    centerhourlySection.appendChild(ulEl);
  }
};
centerLocation.getSaleData();
console.log('Seattle Center', centerLocation);

var capitolHillLocation = {
  displayName: 'Capitol Hill',
  minCustomerHour: 20,
  maxCustomerHour: 38,
  avgCookies: 2.3,
  hours: [],
  total: 0,
  getSaleData: function() {
    var ulEl = document.createElement('ul');

    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;

      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i];
      ulEl.appendChild(liEl);
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = this.total;
    ulEl.appendChild(liElOne);
    var caphillhourlySection = document.getElementById('caphillhourly');
    caphillhourlySection.appendChild(ulEl);
  }
};
capitolHillLocation.getSaleData();
console.log('Capitol Hill', capitolHillLocation);

var alkiLocation = {
  displayName: 'Alki',
  minCustomerHour: 2,
  maxCustomerHour: 16,
  avgCookies: 4.6,
  hours: [],
  total: 0,
  getSaleData: function() {
    var ulEl = document.createElement('ul');

    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;

      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i];
      ulEl.appendChild(liEl);
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = this.total;
    ulEl.appendChild(liElOne);
    var alkihourlySection = document.getElementById('alkihourly');
    alkihourlySection.appendChild(ulEl);
  }
};
alkiLocation.getSaleData();
console.log('Alki', alkiLocation);