'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var pikeLocation = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  getSaleData: function() {
    var data = {hours: [], total:0};
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      data.hours[i] = hourlySales;
      data.total += hourlySales;
    }
    return data;
  }
};
console.log(pikeLocation.getSaleData());

var seaTacLocation = {
  displayName: 'SeaTac Airport',
  minCustomerHour: 3,
  maxCustomerHour: 24,
  avgCookies: 1.2,
  getSaleData: function() {
    var data = {hours: [], total:0};
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      data.hours[i] = hourlySales;
      data.total += hourlySales;
    }
    return data;
  }
};
console.log(seaTacLocation.getSaleData());

var centerLocation = {
  displayName: 'Seattle Center',
  minCustomerHour: 11,
  maxCustomerHour: 38,
  avgCookies: 3.7,
  getSaleData: function() {
    var data = {hours: [], total:0};
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      data.hours[i] = hourlySales;
      data.total += hourlySales;
    }
    return data;
  }
};
console.log(centerLocation.getSaleData());

var capitolHillLocation = {
  displayName: 'Capitol Hill',
  minCustomerHour: 20,
  maxCustomerHour: 38,
  avgCookies: 2.3,
  getSaleData: function() {
    var data = {hours: [], total:0};
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      data.hours[i] = hourlySales;
      data.total += hourlySales;
    }
    return data;
  }
};
console.log(capitolHillLocation.getSaleData());

var alkiLocation = {
  displayName: 'Alki',
  minCustomerHour: 2,
  maxCustomerHour: 16,
  avgCookies: 4.6,
  getSaleData: function() {
    var data = {hours: [], total:0};
    for (var i=0; i<15; i++) {
      var hourlyCustomers = Math.floor(getRandomArbitrary(this.minCustomerHour, this.maxCustomerHour));
      var hourlySales = Math.ceil(hourlyCustomers * this.avgCookies);
      data.hours[i] = hourlySales;
      data.total += hourlySales;
    }
    return data;
  }
};
console.log(alkiLocation.getSaleData());