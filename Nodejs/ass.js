const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Table_1.3.csv')
 //input: fs.createReadStream('simple.csv'),
 //output: process.stdout
});

var i=0;
var result=[];
/*
function res1()
{
  this.A="";
  this.B="";
  this.C="";
  this.D="";
  this.E="";
  this.F="";
  this.G="";
}
*/

var ln=0;
var title=[];
//var rr={};
rl.on('line', function (line) {
 //console.log('Line from file:', line);
 var res = line.split(",");
 //var rr=new res1;
 if(ln==0)
 {
   for(ind in res)
   {
     if(ind<2)
     {
       title[ind]=res[ind];
     }
     else if(ind>2)
     {
       title[ind-1]=res[ind];
     }
   }
   ln=1;
   //console.log("hi");
 }
  //var rr={A:"",B:"",C:"",D:"",E:"",F:"",G:""};
  else{
    //console.log(res[0]);

    if(res[res.length-3]=="SP.DYN.LE00.FE.IN" || res[res.length-3]=="SP.DYN.LE00.MA.IN"){
      var rr={};
      for(idx  in title)
      {
        rr[title[idx]]="";
      }
      var j=0;
      for(ind in rr)
      {
        if(ind==title[0]||ind==title[1])
        {
          rr[ind]=res[j];
        }
        else if(ind==title[2])
        {
          rr[ind]=res[res.length-3];
        }
        else if(ind==title[3])
        {
          rr[ind]=res[res.length-2];
        }
        else if(ind==title[4])
        {
          rr[ind]=res[res.length-1];
        }

        j=j+1;
      }
      result[i]=rr;
      //console.log(result[i]);
      i=i+1;
    }
  }
 //console.log(res);
});


var out={};
var t;
rl.on('close',function(){
  /*
  result.reverse();
  result.pop();
  result.reverse();
  */
  out.LifeExpectancy=result;
  console.log(out);
  //console.log(String(out));
  //console.log(String(result[0].Year));
  t=JSON.stringify(out);
  console.log(String(t));
  fs.writeFile('message.json',t, function(err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

});
