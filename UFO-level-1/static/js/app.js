// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("#form");

//get a reference to the table body
var tbody = d3.select("tbody");

function runEnter(data) {

    var input = d3.select("#datetime");

    var value = input.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === value)

    //Use d3 to append 1 cell per ufo sighting
    filteredData.forEach((ufosightings) => {
        
        var row = tbody.append("tr");
        Object.entries(ufosightings).forEach(([key,value]) => {
            var cell = row.append("td").text(value);
        });
    });
}

var input = d3.select("#datetime");

function runEnter2(){
    var input = d3.select("#datetime");
    var value = input.property("value");
    var newfilteredData = tableData.filter(sighting => sighting.datetime === value)
    tbody.text("")
}
//create event handlers
button.on("click", runEnter);
form.on("click", runEnter);
input.on("change", runEnter2);