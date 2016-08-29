var fs = require('fs');

var f=fs.readFileSync('Table_1.3.csv', 'utf8')

//console.log(f);
var row= f.split("\n");
//console.log(row);
var i,x,y,z,w,a,t;
var header=row[0].split(",");
//console.log(header);
for(i=0;i<header.length;i++)
{
 if(header[i]==="Population (Millions) 2013"){
   x=header.indexOf(header[i]);
 }
 if(header[i]==="GDP Billions (USD) 2013"){
    y=header.indexOf(header[i]);
 }
 if(header[i]==="Gross Domestic Product Per Capita Income at Current Price (USD) 2013"){
   z=header.indexOf(header[i]);
 }
 if(header[i]==="Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013"){
    w=header.indexOf(header[i]);
 }
}
//console.log(x);
var final1=[];
var content=[];
var newObj= new Object();
//console.log(row[1]);
var contentsep=[];
var arr=[];
for(i=1;i<row.length-2;i++){
  contentsep.push(contentsep=row[i].split(","));
  for( t=3;t>=1;t--)
  {
  if(t=='3')
     arr.push({Country:contentsep[0],Population:contentsep[x]});
     if(t=='2')
      arr.push({Country:contentsep[0],GDPBillions:contentsep[y]});
     if(t=='1')
     arr.push({Country:contentsep[0],PurchasingPowerParityPPP:contentsep[w]});

}
newObj[final1[i]]=arr;
}
console.log(newObj);
fs.writeFile( "aggregate.json", JSON.stringify(arr), "utf8", function(err) {
if (err) throw err;
});
