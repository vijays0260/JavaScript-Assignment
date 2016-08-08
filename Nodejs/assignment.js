var fs = require('fs');

fs.readFile('Table_1.3.csv',"utf-8",function(err, contents) {
if (err){
  throw err;
}
  //console.log(contents);
  var final1=[];
  var newObj= new Object();
var row = contents.split("\n");
var i=0,k=0,j=0;
var head=row[0].split(',');

for(i=1;i<row.length-2;i++)
{
  var arr=[];
var country=row[i].split(',');

//console.log(head[0]+":"+country[0]);
for(j=5;j<country.length;j=j+6)
{

  for(k=j;k<head.length;k++)
  {
    arr({head[k]}=country[j]);
//console.log(head[k]+":"+country[j]+"\n");
break;
}
}
}
arr.push(arr);
newObj[final1[i]]=arr;
console.log(newObj);
});
