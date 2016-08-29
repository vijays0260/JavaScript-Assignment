var fs = require("fs");
// Function to read the input file (.CSV)
var csv2array = require('csv2array');
//To read the file synchronously
var data = fs.readFileSync('Indicators.csv');
//Converting the whole data into string formate
var stringData=data.toString();
//Spliting the data row wise
var arrayOne= stringData.split('\r\n');
//To get the header portion ["A","B","C"] and it will make array of header
var header=arrayOne[0].split(',');
//For finding the index of perticular column (dynamic aproch)
var index_countryname,index_indicatorname,index_year,index_value;
index_countryname = header.indexOf('CountryName');
index_indicatorname = header.indexOf('IndicatorName');
index_year = header.indexOf('Year');
index_value = header.indexOf('Value');
var noOfRow = arrayOne.length;
var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++)
{
    var myNewLine=arrayOne[i].split(',');
    //Code for comma seprated values
    //var myNewLine = csv2array(arrayOne[i])[0];
 if((myNewLine[index_countryname] == 'India') && ((myNewLine[index_indicatorname] == 'Urban population (% of total)')
 || (myNewLine[index_indicatorname] == 'Rural population (% of total population)')))
 {
   final_obj[header[index_countryname]]=myNewLine[index_countryname];
   final_obj[header[index_indicatorname]]=myNewLine[index_indicatorname];
   final_obj[header[index_value]]=myNewLine[index_value];
   final_obj[header[index_year]]=myNewLine[index_year];
   jArray.push(final_obj);
 }
 final_obj={};
};
console.log("=== Data For India ===\n");
console.log(jArray);
console.log("=== Data For India Ends Here ===\n\n");
//Write the data into JSON file
var file = 'India.json';
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);
// Code 2 :- For all ASIAN Country --------------------------------------------------------------------------
//This array will list the all Asian country
var Asian_Country = ["Arab World","East Asia & Pacific (all income levels)","East Asia & Pacific (developing only)",
"South Asia","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China",
"Georgia","Indonesia","Iran, Islamic Rep.","Iraq","Israel","Japan","Jordan","India"];
var obj_Urban = {};
var obj_Rural = {};
for (var i = 1; i < noOfRow-1; i++)
{
 //For reading the one line at a time
 var myNewLine = csv2array(arrayOne[i])[0];
 //I m making the object year wise (for Urban)
 if(obj_Urban[myNewLine[index_year]] == undefined)
 {
   obj_Urban[myNewLine[index_year]] = 0;
 }
 //I m making the object year wise (for Rural)
 if(obj_Rural[myNewLine[index_year]] == undefined)
 {
   obj_Rural[myNewLine[index_year]] = 0;
 }
 if(Asian_Country.indexOf(myNewLine[index_countryname]) != -1 && myNewLine[index_indicatorname] == 'Urban population (% of total)')
 {
     obj_Urban[myNewLine[index_year]]+=parseFloat(myNewLine[index_value]);
 }
 if(Asian_Country.indexOf(myNewLine[index_countryname]) != -1 && myNewLine[index_indicatorname] == 'Rural population (% of total population)')
 {
     obj_Rural[myNewLine[index_year]]+=parseFloat(myNewLine[index_value]);
 }
};
var jArray = [];
// For pushing the values into array
for(var propt in obj_Urban)
{
var object = {};
object["Year"]=propt;
object["Value"]=obj_Urban[propt];
object["IndicatorName"]="Urban";
jArray.push(object);
console.log(propt);
}
// For pushing the values into array
for(var propt in obj_Rural)
{
var object = {};
object["Year"]=propt;
object["Value"]=obj_Rural[propt];
object["IndicatorName"]="Rural";
jArray.push(object);
}
//For sorting based on values(desending order)
jArray.sort(function(a,b)
{
   return b['Value']-a['Value'];
});
console.log(jArray);
//Write
var file = 'Asiaa.json';
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);
