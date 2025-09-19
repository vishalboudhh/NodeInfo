// // JS promises object are of 3 types
// // 1.Pending
// // 2.Fulfiled
// // 3.Rejected


// let bool = false

// //produce
// let prom = new Promise((resolve, reject) => {
//     // resolve("Vishal");
//     // reject("!Vishal");
//     if (bool) {
//         resolve("Resolve")
//     }else{
//         reject("Reject")
//     }

//     // console.log('Wait for 5 sec');


//     // setTimeout(() => {
//     //     let rollNo = [12, 13, 14];
//     //     //    resolve(rollNo)
//     //     //    reject("Not found")
//     // }, 5000);
// })
// let prom1 = new Promise((resolve, reject) => {
//     // resolve("Vishal");
//     // reject("!Vishal");
//     // if (bool) {
//     //     resolve("Resolve")
//     // }else{
//     //     reject("Reject")
//     // }

//     console.log('Wait for 5 sec');


//     setTimeout(() => {
//         let rollNo = [12, 13, 14];
//            resolve(rollNo)
//         //    reject("Not found")
//     }, 5000);
// })

// // console.log(prom);

// //consume
// prom.then((result) => {
//     console.log(result);
// })
// prom1.then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);

// })


// async Await

// async function Hello() {
//     return "Hello vishal"
// }

// Hello().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);

// })

// async function Hello() {
//     console.log("Process:2");
//     await console.log("Process:3");
//     await console.log("Process:4");
//     console.log("Process:5");
//     console.log("Process:6");
// }

// console.log("process:1");
// Hello();
// console.log("process:7");


// try {
//     Hello();
//     throw(new Error("Error is there "))
// } catch (error) {
//     console.log(error.message);
    
// } finally{

// }