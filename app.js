'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var pikeLocation = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  hours: [],
  total: 0,
  getSaleData: function() {
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;
    }
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
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;
    }
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
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;
    }
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
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      this.hours[i] = hourlySales;
      this.total += hourlySales;
    }
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
      // for(var j = 0; j < this.hours.length; i++) {
      // }
    }
    var liElOne = document.createElement('li');
    liElOne.textContent = this.total;
    ulEl.appendChild(liElOne);
    var hourlySection = document.getElementById('hourly');
    hourlySection.appendChild(ulEl);

  }
};
alkiLocation.getSaleData();
console.log('Alki', alkiLocation);