'use strict';

const calcTip=function(bill){

    if(bill<300 && bill>50 ){
        let tip=bill*0.15;
        return tip;
    }
    else {
       let tip= bill*0.2;
       return tip;
    }
}
const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips=[];
const totals=[];
for(let i=0;i<bills.length;i++){

    let newtip=calcTip(bills[i]);
    let newbill=calcTip(bills[i])+bills[i];
    tips.push(newtip);
    totals.push(newbill);
    // console.log(`Tips for bill ${i} is ${tips[i]} and total is ${totals[i]} `);
    // console.log(`Tip for bill ${i} is ${tips[i]} `);
    // console.log(`tips and total is ${i} is ${totals[i]}`);
    // console.log(`${bills[i]+tips[i]}`);
    // console.log(`${newbill}`);
}
console.log(totals);
let sum=0;
const calAverage=function(arr){

for(let i=0;i<arr.length;i++){
  
    sum=sum+arr[i];
  
}
return sum/arr.length
}
console.log("Average is "+ calAverage([4,4,4]));
console.log(calAverage(totals));