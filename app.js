'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var allStores = [];
var openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Total'];
var myTable = document.getElementById('myTable');

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
  var tbTr = document.createElement('tr');
  var tbTd = document.createElement('td');
  tbTd.textContent = this.name;
  tbTr.appendChild(tbTd);

  for (var i=0; i<14; i++) {
    var hourlyCustomers = Math.floor(getRandomArbitrary(this.min, this.max));
    var hourlySales = Math.ceil(hourlyCustomers * this.sale);
    this.hours[i] = hourlySales;
    this.total += hourlySales;
    var newTd = document.createElement('td');
    newTd.textContent = this.hours[i];
    tbTr.appendChild(newTd);
  }
  var totalTd = document.createElement('td');
  totalTd.textContent = this.total;
  tbTr.appendChild(totalTd);
  myTable.appendChild(tbTr);
};

function populateCookieTable() {
  var tbTh = document.createElement('thead');
  var tbTr = document.createElement('tr');
  var tbTd = document.createElement('td');
  tbTr.appendChild(tbTd);
  for (var i=0; i<openHours.length; i++) {
    tbTd = document.createElement('td');
    tbTd.textContent = openHours[i];
    tbTr.appendChild(tbTd);
  }
  tbTh.appendChild(tbTr);
  myTable.appendChild(tbTh);

  var pike = new Store('Pike', 23, 65, 6.3);
  var seaTac = new Store('SeaTac', 3, 24, 1.2);
  var center = new Store('Seattle Center', 11, 38, 3.7);
  var capHill = new Store('Capitol Hill', 20, 38, 2.3);
  var alki = new Store('Alki', 2, 16, 4.6);

  pike.bake();
  seaTac.bake();
  center.bake();
  capHill.bake();
  alki.bake();
}

populateCookieTable();

var fSubmit = document.getElementById('form-submit');

function clicked() {
  
}

fSubmit.addEventListener('click', clicked);

var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(allStores.length);

  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgSale = event.target.avgSale.value;

  var dynamicStore = new Store(name, minCust, maxCust, avgSale);
  dynamicStore.bake();
  console.log(allStores);
});
