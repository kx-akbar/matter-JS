"use script";

for(let belgi = "*"; belgi.length < 9; belgi = belgi + "*"){
    console.log(belgi);
};

let natija = "";
let qator1 = " * * * * * * * *";
let qator2 = "* * * * * * * *";

for(let i = 0; i < 8; i++){
    if(i % 2 == 0) natija = natija + qator1 + "\n";
    else natija = natija + qator2 + "\n";
};

console.log(natija);


function min(a,b){
    return (a > b ? b : a);
};

console.log(min(5,15));
console.log(min(0,-10));