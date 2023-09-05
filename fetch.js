// convert json

const programmer ={
    name:"j khan",
    age:35,
    language:["javascript","python","c++"],
}

const programmerJson = JSON.stringify(programmer);

// console.log(programmerJson);

// convert to object

// const programmerObject=JSON.parse(programmerJson)
// console.log(programmerObject);


//2 fetch data

// fetch(url)
// .then((res)=>res.json())
// .then((data)=> console.log(data))


// 3 object keys and values\

const keys=Object.keys(programmer)
const values=Object.values(programmer)


// for (const result in programmer) {

//     if (Object.hasOwnProperty.call(programmer, result)) {
//         const element = programmer[result];
//         console.log(element);
//     }
// }
