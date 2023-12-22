const fs = require('fs');
const { resolve } = require('path');

function readFile(path, isSetError) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err || isSetError) {
                reject('失败');
            }
            const resData = JSON.parse(data);
            resolve(resData);
        });
    });
}
readFile('promiseText/user.json').then((res) => {
    console.log('获取 res 内的数据');
    return Promise.reject('失败');
})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('reject: ' + err);
    })

// 控制台打印结果：
// 获取 res 内的数据
// reject: 失败