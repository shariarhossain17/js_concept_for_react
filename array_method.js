

const person2 = [

    { name: "john", age: 35, phone: 10302, house: '123a' },
    { name: "doe", age: 18, phone: 103, house: '12a' },
    { name: "mitchel", age: 55, phone: 10, house: '1a' },
    { name: "tony", age: 70, phone: 103022323, house: '12355a' }

]



// map 
const age=person2.map(p => p.age);


// const age=person2.map(p => {

// });

// console.log(age);


// foreach

// এরে এর প্রত্যকটা ইলিমেন্ট এর জন্য লুপ থ্রো করতে হবে বাট কোন কিছু রিটার্ন করবে না তার জন্য 

person2.forEach((p) => {
    console.log(p.name);
})


// filter

// filter  condition er upor base kore jodi amader kon element er proyojon hoy tar jonno amra filter use korbo

const search= person2.filter((p) => p.name.includes("n"));

// console.log(search);


const singleElement = person2.find(p => p.name.includes("n"));

// console.log(singleElement);



//  add or remove from array

// copy old products and then add product
const newData= { name: "tony", age: 100, phone: 103022323, house: '12355a' }
const newProducts=[...person2,newData]



// create a new array without john

const remaining=person2.filter(p=>p.name!="john");
console.log(remaining);