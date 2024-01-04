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

Promise.race([
    // readFile('promiseText/user.json'),
    // readFile('promiseText/userCourse.json'),
    // readFile('promiseText/course.json')
])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
// 谁先完成就返回那个 promise 的结果，无论是 fullfilled 还是 rejected