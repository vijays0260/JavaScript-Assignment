//console.log('Hello');
var fs=require('fs');

fs.readFileSync('Table_1.3.csv', "utf-8",function(err,contents)  {
  if (err)
  { throw err;
  }
  //console.log(data);

//console.log(f);
 row=contents.split("\n");
console.log(row);
});
/*
for(var i=0;i<row.length;i++){
  var cell=row[i].split(',');
  for(var j=0;j<cell.length;j++){
    if(cell[j]=='1')
    console.log(row[i]);
  }
}
});
*/
