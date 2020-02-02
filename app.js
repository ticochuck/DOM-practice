'use strict';

var tableHeaders = ['6am', '7am','8am','9am','10am','11am','12pm'];

var dataperhour = [15, 16, 17, 18, 19, 20, 21];
var dataperhour2 = [12, 13, 14, 38, 29, 10, 41];
var name = 'seattle';
var name2 = 'Tokyo'
var parentEl = document.getElementById('data');
var thData = document.createElement('th');
thData.textContent = '';
parentEl.appendChild(thData);
for (var i = 0; i < tableHeaders.length; i++) {
  var thData = document.createElement('th');
  thData.textContent = tableHeaders[i];
  parentEl.appendChild(thData);
};

function makeTable(name) {
var parentEl = document.getElementById('data');
var thData = document.createElement('tr');
thData.textContent = '';
parentEl.appendChild(thData);
for (var i = 0; i < tableHeaders.length; i++) {
  if (i===0) {
    var thData = document.createElement('td');
    thData.textContent = name;
    parentEl.appendChild(thData);
  }
  var thData = document.createElement('td');
  thData.textContent = dataperhour[i];
  parentEl.appendChild(thData);
  
};
}
makeTable(name);
makeTable(name2);
