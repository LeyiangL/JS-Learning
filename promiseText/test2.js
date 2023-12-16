const fs = require('fs');

let uid = 3;
fs.readFile('promiseText/user.json', 'utf8', function (err, data) {
    const userData = JSON.parse(data),
        userInfo = userData.filter(item => item.id === uid)[0];
    console.log(userInfo);
    fs.readFile('promiseText/userCourse.json', 'utf8', function (err, data) {
        const userCourseData = JSON.parse(data),
            userId = userInfo.id,
            userCourse = userCourseData.filter(item => item.uid === userId)[0];
            console.log(userCourse);

        fs.readFile('promiseText/course.json', 'utf8', function (err, data) {
            const courseData = JSON.parse(data);
            userCourses = userCourse.courses;
            let _arr = [];
            userCourses.map(id => {
                courseData.map(item => {
                    if (item.id === id) {
                        _arr.push(item);
                    }
                });
            });
            const userCourseInfo = {
                username: userInfo.username,
                courses: _arr
            }
            fs.writeFileSync(`./promiseText/${userInfo.username}.json`, JSON.stringify(userCourseInfo));
        });
    });
});