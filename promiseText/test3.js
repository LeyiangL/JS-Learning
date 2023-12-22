const fs = require('fs');
let uid = 1;

function readFile(path, prevData) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            const resData = JSON.parse(data);
            resolve({
                prevData,
                resData
            });
        });
    });
}

readFile('promiseText/user.json')
    .then((res) => {
        const { resData } = res,
            userInfo = resData.filter(item => item.id === uid)[0];
        return readFile('promiseText/userCourse.json', userInfo);
    }).then((res) => {
        const { prevData, resData } = res,
            userId = prevData.id,
            userCourse = resData.filter(item => item.uid === userId)[0];
        return readFile('promiseText/course.json', {
            username: prevData.username,
            userCourse
        });
    }).then((res) => {
        const { prevData, resData } = res;
        userCourses = prevData.userCourse.courses;
        // console.log(prevData); // { username: 'Tom', userCourse: { uid: 1, courses: ['1', '2', '4'] } }
        let _arr = [];
        userCourses.map(id => {
            resData.map((item) => {
                if (item.id === id) {
                    _arr.push(item);
                }
            });
        });
        const userCourseInfo = {
            username: prevData.username,
            courses: _arr
        }
        fs.writeFileSync(`./promiseText/${userCourseInfo.username}.json`, JSON.stringify(userCourseInfo));
    }).catch((err) => {
        console.log(err);
    });
