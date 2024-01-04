// const fetch = require('node-fetch');

// function getData() {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//             .then((res) => {
//                 // 使用 .json() 方法将 Response 对象的内容解析为 JSON 格式
//                 return res.json();
//             })
//             .then((res) => {
//                 // 将解析后的 JSON 数据传递给 Promise 的 resolve 函数
//                 resolve(res);
//             })
//             .catch((err) => {
//                 // 如果出现错误，将错误传递给 Promise 的 reject 函数
//                 reject(err);
//             })
//     });
// }

// async function logData() {
//     const data = await getData();
//     console.log(data);
// }
// logData()
// console.log('Global');


// await 是一个操作符，等待一个 Promise 对象产出结果的操作手段
// await 功能是暂停 async 函数的执行，等待 Promise 处理后的结果


// const fetch = require('node-fetch');

// function getData() {
//     return new Promise((resolve, reject) => {
//         // Promise 处理的结果是 rejected
//         reject('失败了');
//     });
// }

// async function logData() {
//     // 假如 Promise 处理的结果是 rejected ，则会抛出异常
//     const data = await getData();
//     console.log(data);
// }

// logData()




async function myAsyncFunction() {
    return "Hello, Async World!";
}

const resultPromise = myAsyncFunction();
resultPromise.then(result => console.log(result));
