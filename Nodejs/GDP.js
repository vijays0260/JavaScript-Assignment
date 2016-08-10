var fs = require('fs');
var filedata = fs.readFileSync("Table_1.3.csv");
 var datatoString=filedata.toString();
 var myArray= datatoString.split('\r\n');
 var header=myArray[0].split(',');

  var row=myArray.length;
 var col=header.length;
  var newArray=[];
 var arrayValue=[];

var population = header.indexOf("Population (Millions) 2013");
 var gdp = header.indexOf("GDP Billions (USD) 2013");
 var ppp = header.indexOf("Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013");

 var continents = [
     ["Asia","Africa","Europe","NorthAmerica","SouthAmerica","Australia"],
     ["China","India","Indonesia","Japan","Republic of Korea","Saudi Arabia"],
     ["South Africa"],
     ["France","Germany","Italy","Russia","Turkey","United Kingdom","European Union"],
     ["Canada","Mexico","USA"],
     ["Argentina","Brazil"],
    ["Australia"]];

 population1 = [0,0,0,0,0,0];
 gdp1 = [0,0,0,0,0,0];

 for (var j = 1; j < continents.length; j++) {
for (var k = 0; k < continents[j].length; k++) {
 for (var i = 1; i < row-1; i++) {
   var myNewLine=myArray[i].split(',');
   if(myNewLine[0] === continents[j][k])
   {
       population1[j-1] +=  parseFloat(myNewLine[population]);
       gdp1[j-1] += parseFloat(myNewLine[gdp]);
   }
 }
}
}


var obj1 = {};
for (var i = 0; i < continents[0].length; i++)
 {
   continent_key = 'Continent';
 continent_value = continents[0][i];
  population_key = 'Population';
 population_value = population1[i];
 gdp_key = 'GDP';
  gdp_value = gdp1[i];
 obj1[continent_key] = continent_value;
 obj1[population_key] = population_value;
 obj1[gdp_key] = gdp_value;
 newArray.push(obj1);
var obj1 = {};

}
 console.log(newArray);

 fs.writeFile( "aggregate.json", JSON.stringify( newArray ));

 csvtojson(population,"Population.json");
 csvtojson(gdp,"GDP.json");
 csvtojson(ppp,"PPP.json");

 function csvtojson(index,filename){
 newArray=[];
 var i=0,j=0;
 for (i = 1; i < row-3; i++) {
    var newObj = {};
    var newLine=myArray[i].split(',');

    key = header[0];
      country = newLine[0];
    key1 = header[index];
      value1 = newLine[index];
     newObj[key] = country;
      newObj[key1] = value1;
      newArray.push(newObj);

};

   newArray.sort(function(a,b){
 return parseFloat(b[key1])-parseFloat(a[key1]);
});
console.log( newArray);
    fs.writeFile(filename, JSON.stringify( newArray ));

}
