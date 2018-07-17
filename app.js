'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var allStores = [];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.sale = avgSale;
  this.hours = [];
  this.total = 0;

  allStores.push(this);
}

Store.prototype.bake = function() {
  for (var i=0; i<15; i++) {
    var hourlyCustomers = Math.floor(getRandomArbitrary(this.min, this.max));
    var hourlySales = Math.ceil(hourlyCustomers * this.sale);
    this.hours[i] = hourlySales;
    this.total += hourlySales;
  }
};

var pike = new Store('Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var center = new Store('SeattleCenter', 11, 38, 3.7);
var capHill = new Store('CapitolHill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

pike.bake();
seaTac.bake();
center.bake();
capHill.bake();
alki.bake();