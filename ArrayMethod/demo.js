// function doSth(t, cb) {
//     return function () {
//         if (--t === 0) {
//             cb();
//         }
//     }
// }
// function logSth(cb) {
//     console.log('logSth');
//     cb();

// }
// function logSth2(cb) {
//     console.log('logSth2');
//     cb();
// }
// function logSth3() {
//     console.log('logSth3');
// }
// let fn = doSth(4, logSth.bind(null, logSth2));
// fn();
// fn();
// fn();
// fn();

// function doSth(t) {
//     return function () {
//         if (--t === 0) {
//             logSth(function () {
//                 logSth2(function () {
//                     logSth3();
//                 })
//             })
//         }
//     }
// }


// let promise = new Promise((resolve, reject) => {
//     resolve('承诺实现');
// });

// // 控制台打印结果为 Global Then，由此可得出 Then 是异步调用
// promise.then((res) => {
//     console.log('Then');
// }, (error) => {
//     console.log(error);
// });

// console.log('Global');


// let promise = new Promise((resolve, reject) => {
//     reject('承诺石沉大海');
// });

// promise.then((res) => {
//     console.log(res);
// }, (error) => {
//     console.log(error); // 承诺石沉大海
// });
// console.log('Global');


