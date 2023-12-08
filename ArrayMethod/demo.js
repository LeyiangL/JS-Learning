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



