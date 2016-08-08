var fs = require('fs');
var filedata = fs.readFileSync("Table_1.3.csv");
 var datatoString=filedata.toString();
 var myArray= datatoString.split('\r\n');
 var header=myArray[0].split(',');
 var row=myArray.length;
 var col=header.length;
 var jArray=[];
 var Cont_Array=[];
 var population = header.indexOf("Population (Millions) 2013");
 var gdp = header.indexOf("GDP Billions (USD) 2013");
 var ppp = header.indexOf("Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013");
 csvtojson(population,"country_pop.json");
 csvtojson(gdp,"country_gdp.json");
 csvtojson(ppp,"country_ppp.json");

 function csvtojson(index,filename){
 jArray=[];
 var i=0,j=0;
 for (i = 1; i < row-1; i++) {
    var obj = {};
    var myNewLine=myArray[i].split(',');
    for (j = 0; j< col; j++) {
      key = header[0];
      value = myNewLine[0];
      key1 = header[index];
      value1 = myNewLine[index];
      obj[key] = value;
      obj[key1] = value1;
    }
      jArray.push(obj);

}
console.log( jArray);

}
