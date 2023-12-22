const { promises } = require('dns');
const fs = require('fs');

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

Promise.all([
    readFile('promiseText/user.json'),
    readFile('promiseText/userCourse.json', true),
    readFile('promiseText/course.json', true)
])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// 控制台打印结果
// 失败