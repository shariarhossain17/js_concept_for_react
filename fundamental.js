// 1 how to declare variable using let and const

// kon kicu change na howyar khetere
const firstName="Arnold";

console.log(firstName);

// kon kicu change howyar khetre
let season = "rainy"
season="winter";



//  no 2 condition

// কিভাবে আপনি একটা কন্ডিশন দিতে পারেন এটা বড় নাকি ছোট নাকি সমান সমান এর জন্য ৬ টা  ব্যাসিক কন্ডিন

// ৬ বেসিক কন্ডিশন <,>,===,<=,>=,!==

// মাল্টিপল কন্ডিশন && এবং ।।


if(firstName ==="arnold" && season==="rainy"){

}
else if(firstName==="Arnold"){}
else{}


// 3 array . কোন একটা এরে কিভাবে ডিক্লেয়ার করতে হয় এটা মাস্ট বি জানতে হবে।

// index
// length
// push


const numbers = [89,35,70,10];

numbers[0]=56;

numbers.length;
numbers.push(100);


// 4 loop  fundamental loop ta amra kom use korbo tobu jinis ta jene rakhar proyojon ace


for(let i=0;i<numbers.length;i++){
   const numbers=numbers[i];
   console.log(numbers); 
}


//  5 function  simple akta function amra declare korte pari kina. akta function diya 2ta number er jog biog gun vag korte pari ki na


function multiply(num1,num2){

    return num1 * num2;
}


const output=multiply(5,2);



// 6 object . object mane ki onek gula jinis er boisisto. ei object ta amra declare korte pari ki na and ai object er value gula ke access korte pari ki na


const person = {

    name:"john",
    age:37,
    movies:["dhakar-mastar","gulistaner king khan"]
    
}


//  ekhon object ke 3 way te access kora jai ata jante hbe

// way no 1 direct by property

console.log(person.name);
// way no 2 access via property string
console.log(person["name"]);


// way no 3 কোন একটা ভ্যারিয়েবল থাকবে সেটার মধ্য স্ট্রিং থাকবে

const myVariable = "age";

console.log(person[myVariable]);


