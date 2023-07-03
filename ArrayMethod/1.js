// var arr = [1, 2, 3, 4, 5];
// for (var keys of arr.keys(arr)) {
//     console.log(keys);
// }
// for (var values of arr.values(arr)) {
//     console.log(values);
// }
// for (var [keys, values] of arr.entries(arr)) {
//     console.log(keys, values);
// }


// var arr = [1, 2, 3, 4];
// var obj = {
//     a: 1
// }
// arr.forEach(function (item, index, arr) {
//     console.log(this); // Window
// }); 


// var arr = [1, 2, 3, 4];
// arr.forEach(function (item, index, arr) {
//     console.log(this); // (4) [1, 2, 3, 4]
// }, arr);


// var obj = {
//     name: 'zhangsan',
//     times: [1, 2, 3],
//     print: function () {
//         console.log(this);
//         // this.times.forEach(function (item) {
//         //     console.log(this); // {name: 'zhangsan', times: Array(3), print: ƒ}
//         // }, this);
//         this.times.forEach(() => {
//             console.log(this);
//         })
//     }
// }
// obj.print();


// var arr = [1, , 3];
// delete arr[1];
// arr.forEach(function (item) {
//     console.log(item); // 1 3 
// })
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // 1 undefined 3 
// }


// var arr = [1, , 3];
// for (var i = 0; i < arr.length; i++) {
//     if (i == 1) {
//         continue;
//     }
//     console.log(i);
// }

// arr.forEach(function (item) {
//     if (item == 2) {
//     }
//     console.log(item);
// })


// function test(...arg) {
//     arg.forEach(item => console.log(item)); // 1 2 3 4 5
//     // Array.prototype.forEach.call(arg, function (item) {
//     //     console.log(item);
//     // });
// }
// test(1, 2, 3, 4, 5);


// var arr = [1, 2, 3, 4, 5];
// var arr1 = arr.map(function (item, index, arr) {
//     return item * 2;
// });
// console.log(arr, arr1); // [ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]


// var arr = ['a', 'b', 'c'];
// var arr1 = [1, 2].map(function (item, index, arr) {
//     return this[item];
// }, arr);
// console.log(arr1); // (2) ['b', 'c']


// var user = [
//     {
//         'name': 'zhangsan',
//         'age': 18,
//         'sex': 'male'
//     }, {
//         'name': 'xiaoming',
//         'age': 27,
//         'sex': 'female'
//     }
// ];
// var nameArr = user.map(function (item) {
//     return item.name
// });
// console.log(nameArr); // (2) ['zhangsan', 'xiaoming']


// 筛选出undefined、null
// var arr = [-1, 0, 1, 2, 3, undefined, 4, null, 5, '', false, NaN];
// var arr1 = arr.filter(function (item, index, arr) {
//     return item != undefined;
// });
// console.log(arr1); // (10) [-1, 0, 1, 2, 3, 4, 5, '', false, NaN]


// var test;
// console.log(test); // undefined
// var obj = {};
// console.log(obj.a);


// var test = function () {
//     return function () { }
// }
// test();
// test = null;


// var arr = [1, 2, 3, 4, 5];
// var res1 = arr.some(function (item, index, arr) {
//     return item % 2 === 0;
// });
// var res2 = arr.every(function (item, index, arr) {
//     return item % 2 === 0;
// });
// console.log(res1, res2); // true false


// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x,
//     0,
// );

// console.log(sum); // 6


// var data = [
//     {
//         course: 'JS'
//     },
//     {
//         course: 'JAVA'
//     }
// ];
// var newArr = data.reduce(function (prev, elem, index, arr) {
//     prev.push(elem.course);
//     return prev;
// }, []);
// console.log(newArr); // (2) ['JS', 'JAVA']


// const flattened = [[0, 1], [2, 3], [4, 5],].reduce(
//     (accumulator, currentValue) => accumulator.concat(currentValue), []);
//     // flattened 的值是 [0, 1, 2, 3, 4, 5]


// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// const countedNames = names.reduce((allNames, name) => {
//     const currCount = allNames[name] ?? 0;
//     return {
//         ...allNames,
//         [name]: currCount + 1,
//     };
// }, {});
// // countedNames 的值是：
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// console.log(countedNames);


// const flattened = [[0, [1]], [2, [3]], [4, [5]]].reduce(
//     function (a, b) {
//         return [...a, ...b];
//     }, []);
// const res = flattened.reduce(
//     function (a, b) {
//         return a.concat(b);
//     }, []);
// console.log(res); // (6) [0, 1, 2, 3, 4, 5]


// function* generator() {
//     yield '周一：JS';
//     yield '周二：JAVA';
//     yield '周三：Vue';
//     yield '周四：React';
//     return '周五：SQL';
// }
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// const arr = ['周一：JS', '周二：JAVA', '周三：Vue', '周四：React']
// function* generator(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         yield arr[i];
//     }
//     return '周五：SQL';
// }
// const iterator = generator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function generator(arr) {
//     var nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < arr.length ?
//                 { value: arr[nextIndex++], done: false } :
//                 { value: arr[nextIndex++], done: true };
//         }
//     }
// }
// var iterator = generator([1, 2, 3, 4, 5]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// const arr = ['周一：JS', '周二：JAVA', '周三：Vue', '周四：React']
// function* generator(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         yield arr[i];
//     }
//     return '周五：SQL';
// }
// const iterator = generator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // {value: undefined, done: true}
// 将每一次遍历进行拆分