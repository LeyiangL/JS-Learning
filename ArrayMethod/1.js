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


// const arr = [1, 2, 3, 4, 5];
// const _ = arr.entries();
// console.log(_); // Array Iterator {} 数组 迭代器 对象


// const arr = [1, 2, 3, 4, 5];
// const iterator = arr.entries();

// console.log(iterator); // Array Iterator {} 数组 迭代器 对象
// console.log(iterator.next()); // {value: Array(2), done: false}
// console.log(iterator.next()); // {value: Array(2), done: false}
// console.log(iterator.next()); // {value: Array(2), done: false}
// console.log(iterator.next()); // {value: Array(2), done: false}
// console.log(iterator.next()); // {value: Array(2), done: false}
// console.log(iterator.next()); // {value: Array(2), done: false}
// // {value: [index, item], done: ?}


// const arr = [1, 2, 3, 4, 5];
// const iterator = arr.entries();
// // var o = {
// //     a: 1,
// //     b: 2,
// //     c: 3
// // }
// for (let collection of iterator) {
//     // console.log(collection);
//     // (2) [0, 1]
//     // (2) [1, 2]
//     // (2) [2, 3]
//     // (2) [3, 4]
//     // (2) [4, 5]
//     const [i, v] = collection;
//     console.log(i, v);
// }

// 类数组
// var o = {
//     a: 1,
//     b: 2,
//     c: 3,
//     length: 3
// }

// Object.prototype[Symbol.iterator]= Array.prototype[Symbol.iterator];
// var o = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3,
// }
// for (let v of o) {
//     console.log(v); // 1 2 3
// }


// var o = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// for (let v of Array.from(o)) {
//     console.log(v); // 1 2 3
// }


// const arr = [1, 2, 3, 4, 5];
// const it = arr.entries();
// var newArr = [];
// for (var i = 0; i < arr.length + 1; i++) {
//     var item = it.next();
//     console.log(item);
//     !item.done && (newArr[i] = item.value);
// }
// console.log(newArr);


// const newArr = [
//     [56, 23],
//     [56, 34, 100, 1],
//     [123, 234, 12]
// ]
// function sortArr(arr) {
//     var _it = arr.entries(), // _it 为 Array Iterator {}
//         _doNext = true;
//     while (_doNext) {
//         var _r = _it.next();
//         if (!_r.done) { // _r.done == false
//             _r.value[1].sort((a, b) => a - b);
//             _doNext = true;
//         } else {
//             _doNext = false;
//         }
//     }
//     return arr;
// }
// console.log(sortArr(newArr));


// const newArr = [
//     [56, 23],
//     [56, 34, 100, 1],
//     [123, 234, 12]
// ]
// function sortArr(arr) {
//     var _it = arr.entries(),
//         _doNext = true;
//     while (_doNext) {
//         var _r = _it.next();
//         if (!_r.done) {
//             _r.value[1].sort((a, b) => a - b);
//             _doNext = true;
//         } else {
//             _doNext = false;
//         }
//     }
//     return arr;
// }
// console.log(sortArr(newArr));


// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.fill('a', 1,);
// console.log(newArr); // (5) [1, 'a', 'a', 'a', 'a']


// const newObj = Array.prototype.fill.call({ length: 3 }, 4);
// console.log(newObj); // {0: 4, 1: 4, 2: 4, length: 3}


// function makeArrayLike(arr) {
//     var arrLike = {
//         length: arr.length,
//         push: [].push,
//         splice: [].splice,
//     };
//     arr.forEach(function (item, index) {
//         [].fill.call(arrLike, item, index, index + 1);
//     });
//     return arrLike;
// }
// const newObj = makeArrayLike([
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '赵四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ]);
// console.log(newObj); // Object(5) ['a', 'b', 'c', 'd', 'e', push: ƒ, splice: ƒ]


// Array.prototype.myFill = function () {
//     var value = arguments[0] || undefined,
//         start = arguments[1] >> 0,
//         end = arguments[2]; // >> 0 保证为数字
//     if (this == null) {
//         throw new TypeError('This is null or not defined')
//     }
//     var obj = Object(this),
//         len = obj.length >>> 0; // >>> 0 保证为正整数
//     start = start < 0 ?
//         Math.max(len + start, 0) :
//         Math.min(start, len);
//     end = end === undefined ? len : end >> 0;
//     end = end < 0 ?
//         Math.max(len + end, 0) :
//         Math.min(end, len);
//     while (start < end) {
//         obj[start] = value;
//         start++;
//     }
//     return obj;
// }

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.myFill('a', 2, 4);
// console.log(newArr); // (5) [1, 2, 'a', 'a', 5]


// try {
//     console.log("开始执行 try 块"); // 开始执行 try 块
//     throw new Error("人为抛出的错误");
//     console.log("这行代码不会执行");
// } catch (error) {
//     console.log("捕获到错误：" + error.message); // 捕获到错误：人为抛出的错误
// }


// Array.prototype.myFill = function () {
//     var value = arguments[0] || undefined,
//         start = arguments[1] >> 0,
//         end = arguments[2];
//     if (this == null) {
//         throw new TypeError('this is null or not defined');
//     }
//     var obj = Object(this),
//         len = obj.length >>> 0;
//     start = start < 0 ?
//         Math.max(len + start, 0) :
//         Math.min(start, len);
//     end = end === undefined ? len : end >> 0;
//     end = end < 0 ?
//         Math.max(len + end, 0) :
//         Math.min(end, len);
//     while (start < end) {
//         obj[start] = value;
//         start++;
//     }
//     return obj;
// }
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.myFill('a', 2, 4);
// console.log(newArr); // (5) [1, 2, 'a', 'a', 5]


// const arr = [1, 2, 3, 4, 5];
// const item = arr.find(function (item) {
//     return item > 5; // undefined
// })
// console.log(item);


// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ]
// const item = arr.find(item => item.name === '李四');
// console.log(item); // {id: 2, name: '李四'}
// console.log(item === arr[1]); // true


// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ]
// const item = arr.find(function (item, index, arr) {
//     console.log(item, index, arr);
//     console.log(this); // Window
// })


// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ]
// const item = arr.find(function (item) {
//     return item.id > 1;
// })
// console.log(item); // {id: 2, name: '李四'}


// const arr = Array(5);
// // console.log(arr); // (5) [empty × 5]
// arr[0] = 1;
// arr[2] = 3;
// arr[4] = 5;
// // console.log(arr); // (5) [1, empty, 3, empty, 5]
// const item = arr.find(function (item) {
//     console.log(item); // 1 undefined 3 undefined 5
//     // console.log("Gone"); // Gone * 5
//     return false;
// })


// const arr = Array(5);
// arr[0] = 1;
// arr[2] = 3;
// arr[4] = 5;
// const item = arr.some(function (item) {
//     console.log("Gone"); // Gone * 3
//     return false;
// }, [])


// //           0  1  2  3  4
// const arr = [1, 2, 3, 4, 5];
// const item = arr.find(function (item, index) {
//     arr.splice(1, 1); // undefined占位
//     // index  item       arr
//     // 0      1          (4) [1, 3, 4, 5]
//     // 1      3          (3) [1, 4, 5]
//     // 2      5          (2) [1, 5]
//     // 3      undefined  [1]
//     // 4      undefined  [1]
//     console.log(index, item, arr);
// });
// console.log(arr); // [1]


// const arr = [1, , 3, , , , 7, 8, 9];
// arr.find(function (item, index) {
//     if (index === 0) {
//         arr.splice(1, 1);
//     }
//     console.log(index, item);
// })

// // [1, 3, , , , 7, 8, 9];


// const arr = [1, 2, 3, , , , 7, 8, 9];
// arr.find(function (item, index) {
//     if (index === 0) {
//         arr.pop();
//     }
//     console.log(index, item);
// });


// Array.prototype.myFind = function (cb) {
//     console.log(arguments[1]);
//     if (this === null) {
//         throw new TypeError('"this" is null');
//     }
//     if (typeof cb !== 'function') {
//         throw new TypeError('Callback must be a function type');
//     }
//     var obj = Object(this),
//         len = obj.length >>> 0,
//         arg = arguments[1],
//         step = 0;
//     while (step < len) {
//         var value = obj[step];
//         if (cb.apply(arg, [value, step, obj])) {
//             return value;
//         }
//         step++;
//     }
//     return undefined;
// }

// const arr = [1, 2, 3, 4, 5];
// const item = arr.myFind(item => item > 3);
// console.log(item);


// const arr = [1, 2, 3, 4, 5];
// const idx = arr.findIndex(item => item > 6);
// console.log(idx); // -1


// const arr = [, 2, , , , ,];
// const idx = arr.findIndex(item => item === undefined);
// console.log(idx); // 0


// const arr = [, 2, , , , , ,];
// const idx = arr.findIndex(function (item, index, arr) {
//     console.log(this); // {a: 1}
// }, { a: 1 });

// 'use strict'
// const arr = [, 2, , , , , ,];
// const idx = arr.findIndex(function (item, index, arr) {
//     console.log(this); // undefined
// });

// const arr = [, 2, , , , , ,];
// const idx = arr.findIndex(function (item) {
//     arr.push(6);
//     console.log(item); // undefined 2 undefined undefined undefined undefined undefined
// });
// console.log(arr); // (14) [empty, 2, empty × 5, 6, 6, 6, 6, 6, 6, 6]


// const arr = [1, 2, 3, 4, 5];
// const idx = arr.findIndex(function (item, index) {
//     if (index === 0) {
//         arr.pop();
//     }
//     console.log(item); // 1 2 3 4 undefined
// });
// console.log(arr); // (4) [1, 2, 3, 4]


// Array.prototype.myFindIndex = function (cb) {
//     if (this === null) {
//         throw new TypeError('"this" is null');
//     }
//     if (typeof cb !== 'function') {
//         throw new TypeError('Callback must be a function');
//     }
//     var obj = Object(this),
//         len = obj.length >>> 0,
//         arg = arguments[1],
//         step = 0;
//     while (step < len) {
//         var value = obj[step];
//         if (cb.apply(arg, [value, step, obj])) {
//             return step;
//         }
//         step++;
//     }
//     return -1;
// }
// const arr = [1, 2, 3, 4, 5];
// const idx = arr.myFindIndex(function (item, index, arr) {
//     // console.log(item, index, arr);
//     // console.log(this);
//     return item > 2;
// });
// console.log(idx); // 2


// const arr = [0, 1, [2, 3], 4, 5];
// const newArr = arr.flat();
// console.log(newArr); // (6) [0, 1, 2, 3, 4, 5]
// console.log(arr === newArr); // false


// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// const newArr = arr.flat(Infinity); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(newArr);


// var a = 3,
//     b = [1, 2],
//     c = [3, 4];
// const newArr0 = b.concat(a); //(3) [1, 2, 3]
// const newArr1 = b.concat(a, c); //(5) [1, 2, 3, 3, 4]
// console.log(newArr1);


// // reduce
// function shallowFlat(arr) {
//     return arr.reduce(function (prev, current) {
//         return prev.concat(current);
//     }, []);
// }

// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// console.log(shallowFlat(arr)); // (4) [0, 1, 2, Array(3)]


// reduce
// function shallowFlat(arr) {
//     return [].concat(...arr);
// }

// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// console.log(shallowFlat(arr)); // (4) [0, 1, 2, Array(3)]


// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// Array.prototype.deepFlat = function () {
//     var arr = this,
//         deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity;
//     return deep > 0 ?
//         arr.reduce(function (prev, current) {
//             return prev.concat(
//                 Array.isArray(current) ?
//                     current.deepFlat(deep - 1) :
//                     current
//             );
//         }, [])
//         : arr
// }
// console.log(arr.deepFlat(Infinity));


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity,
//         res = []; // 结果集合

//     (function _(arr, deep) {
//         // 数组拓展方法是会剔除empty
//         arr.forEach(function (item) {
//             if (Array.isArray(item) && deep > 0) {
//                 _(item, deep - 1);
//             } else {
//                 res.push(item);
//             }
//         });
//     })(arr, deep);

//     return res;
// }

// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// console.log(arr.deepFlat(Infinity)); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         deep = arguments[0] !== Infinity ? arguments >>> 0 : Infinity,
//         res = [];

//     (function _(arr, deep) {
//         for (var item of arr) {
//             if (Array.isArray(item) && deep > 0) {
//                 _(item, deep - 1);
//             } else {
//                 // null === void 0 使用"void 0"代替"undefined"可以防止在代码中无意中修改全局变量"undefined"的值，从而确保判断的准确性。
//                 item !== void 0 && res.push(item)
//             }
//         }
//     })(arr, deep);

//     return res;
// }
// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// console.log(arr.deepFlat(Infinity)); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var myVariable = undefined;

// if (myVariable === void 0) {
//     console.log("myVariable is empty");
// } else {
//     console.log("myVariable is not empty");
// }


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         stack = [...arr],
//         res = [];

//     while (stack.length) {
//         const popItem = stack.pop(); // 返回删除的最后一项
//         console.log('stack', stack);
//         if (Array.isArray(popItem)) { // 判断是否为数组
//             stack.push(...popItem);
//         } else {
//             res.push(popItem);
//         }
//     }

//     return res;
// }


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         stack = [...arr],
//         res = [];
//     while (stack.length) {
//         const popItem = stack.pop();
//         if (Array.isArray(popItem)) {
//             stack.push(...popItem);
//         } else {
//             res.push(popItem);
//         }
//     }

//     return res;
// }

// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];
// console.log(arr.deepFlat(Infinity)); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var a1 = (function (a) { }).length  // 1
// var a2 = (function (...a) { }).length // 0
// var a3 = (function (b, ...a) { }).length // 1
// var a4 = (function (b, c, ...a) { }).length // 2
// var a5 = (function (b, c, d = 0, ...a) { }).length // 2

// console.log(a1, a2, a3, a4, a5); // 1 0 1 2 2


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         stack = [...arr],
//         res = [];

//     while (stack.length) {
//         const popItem = stack.pop(); // 返回删除的最后一项
//         // console.log('stack', stack);
//         if (Array.isArray(popItem)) { // 判断是否为数组
//             stack.push(...popItem);
//         } else {
//             res.push(popItem); // (10) [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
//         }
//     }

//     return res.reverse();
// }


// Array.prototype.deepFlat = function () {
//     var arr = this,
//         res = [];
//     (function _(arr) {
//         arr.forEach(function (item) {
//             if (Array.isArray(item)) {
//                 _(item);
//             } else {
//                 res.push(item);
//             }
//         });
//     })(arr);
//     return res;
// }


// // 定义一个生成器函数 deepFlat，接收一个数组参数 arr
// function* deepFlat(arr) {
//     // 遍历数组中的每一个元素
//     for (var item of arr) {
//         // 如果当前元素是数组
//         if (Array.isArray(item)) {
//             // 递归调用 deepFlat，并通过 yield* 将递归结果扁平化地作为生成器的输出
//             yield* deepFlat(item);
//         } else {
//             // 如果当前元素l不是数组，直接 yield 该元素
//             yield item;
//         }
//     }
// }

// // 定义一个嵌套层次深的多维数组
// const arr = [0, [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]];

// // 打印扁平化后的数组，将生成器对象转换为数组，并通过扩展操作符展开
// console.log([...deepFlat(arr)]);


// // 创建一个生成器函数，只使用yield
// function* genYield() {
//     yield [1, 2, 3];
// }


// // 创建一个生成器函数，yield后继续使用yield*
// function* genYieldStar() {
//     yield* [1, 2, 3];
// }


// // 创建两个生成器对象
// const generatorYield = genYield();
// const generatorYieldStar = genYieldStar();


// // 调用.next()方法以获取生成器产出的值
// console.log(generatorYield.next().value); // 输出: [1, 2, 3]
// console.log(generatorYieldStar.next().value); // 输出: 1
// console.log(generatorYieldStar.next().value); // 输出: 2
// console.log(generatorYieldStar.next().value); // 输出: 3
// console.log(Array.from(genYield())); // 输出:[1，2，3]




// const arr = ['123', '456', '789'];

// const newArr = arr.flatMap(function (item, index, arr) {
//     console.log(this); // {a: 1}
// }, { a: 1 });


// const arr = ['My name\'s LiHua', 'I\'m 27', 'years old.'];
// const newArr = arr.flatMap(function (item) {
//     return item.split(' ')
// });
// console.log(newArr); // (7) ['My', "name's", 'LiHua', "I'm", '27', 'years', 'old.']


// const arr = [1, -2, -3, 5, 8, -9, 6, 7, 0];
// const newArr = arr.flatMap(function (item, index) {
//     if (item < 0 && index >= 1) {
//         return [item, `${item} + ${arr[index - 1]} = ${item + arr[index - 1]}`]
//     }
//     return item;
// });
// console.log(newArr);


// const arr = ['123', '456', '789'];

// Array.prototype.myFlatMap = function (cb) {
//     if (typeof cb !== 'function') {
//         throw new TypeError('Callback must be a function');
//     }
//     var arr = this,
//         arg2 = arguments[1],
//         res = [],
//         item;

//     for (var i = 0; i < arr.length; i++) {
//         item = cb.apply(arg2, [arr[i], i, arr]);
//         item && res.push(item);
//     }

//     return res.flat();
// }

// const newArr = arr.myFlatMap(function (item) {
//     return item.split('');
// });

// console.log(newArr); // (9) ['1', '2', '3', '4', '5', '6', '7', '8', '9']


// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ];
// const newArr = Array.from(arr);
// console.log(newArr); // (3) [{…}, {…}, {…}]
// console.log(arr === newArr); // false
// console.log(arr[1] === newArr[1]); // true

// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ];

// const newArr = JSON.parse(JSON.stringify(arr));

// console.log(arr === newArr); // true
// console.log(arr[1] === newArr[1]); // true

// arr[0].name = '新名字';
// console.log(arr); // [{id: 1, name: '新名字'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}]
// console.log(newArr); // [{id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}]


// const sm = Symbol('123');
// const newArr = Array.from(sm);
// console.log(newArr === sm); // []


// const arr = [
//     {
//         id: 1,
//         name: '张三'
//     },
//     {
//         id: 2,
//         name: '李四'
//     },
//     {
//         id: 3,
//         name: '王五'
//     }
// ];

// const newArr = Array.from(arr);

// newArr[0].id = 666;
// console.log(arr); // (3) [{…}, {…}, {…}]
// console.log(newArr); // (3) [{…}, {…}, {…}]
// console.log(arr[1] === newArr[1]); // true


// const str = '123';
// const newArr = Array.from(str);

// newArr[0] = 'A';
// console.log(newArr);  // 输出：['A', '2', '3']
// console.log(str);     // 输出：'123'


// const mySymbol = Symbol();


// const newArr = Array.from(/** undefined */);
// const newArr = Array.from(undefined);
// console.log(newArr);
// Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))


// const arrLike = {
//     a: 1,
//     b: 2,
//     c: 3,
//     length: 3
// }
// const newArr = Array.from(arrLike);
// console.log(newArr); // (3) [undefined, undefined, undefined]


// const arrLike = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 5
// }
// const newArr = Array.from(arrLike);
// console.log(newArr); // (5) [undefined, 1, 2, 3, undefined]


// const m = new Map([
//     ['a', 1],
//     ['b', 1],
//     ['c', 3]
// ]);

// console.log(m); // Map(3) {'a' => 1, 'b' => 1, 'c' => 3}

// const newArr = Array.from(m).flat();

// console.log(newArr[0]==m[0]);


// const s = new Set([1, 2, 3, 4]);

// console.log(s); // Set(4) {1, 2, 3, 4}

// const newArr = Array.from(s);

// console.log(newArr); // (4) [1, 2, 3, 4]


// const arrLike = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }

// const newArr = Array.from(arrLike, function (item, index, array) {
//     console.log(this); // {a: 1}
// }, { a: 1 });


// const arrLike = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }

// const newArr = Array.from(arrLike).map(function (item, index, arr) {
//     console.log(item, index, arr);
//     console.log(this); // {a: 1}
// }, { a: 1 });


// console.log(Array.from.length); // 1


// const arrLike = {
//     0: 1,
//     1: 2,
//     push: [].push,
//     length: 2.5
// }
// arrLike.push(3);
// console.log(arrLike); // {0: 1, 1: 2, 2: 3, length: 3, push: ƒ}


// function range(start, end, step) {
//     return Array.from({ length: (end - start) / step + 1 }, function (item, index) {
//         return start + (index * step);
//     });
// }

// const r = range(1, 10, 2); // 参数: (start开始, end结束, step间隔)

// console.log(r); // (5) [1, 3, 5, 7, 9]


// function combine() {
//     const arr = Array.prototype.concat.apply([], arguments);
//     console.log(arr);
//     return Array.from(new Set(arr));
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 4, 5, 6];
// const arr3 = [3, 4, 5, 6, 7];

// console.log(combine(arr1, arr2, arr3)); // (7) [1, 2, 3, 4, 5, 6, 7]


// Array.myFrom = (function () {
//     // 判断是否可调用
//     const isCallable = function (fn) {
//         return typeof fn === 'function' ||
//             Object.prototype.toString.call(fn) === '[object Function]';
//     }
//     // 对 类数组里面的length 进行转换处理
//     const toInt = function (value) {
//         // 将value值转换为数字
//         const v = Number(value);
//         // 判断当前数字是否是NaN
//         if (isNaN(v)) {
//             // 如果是NaN则返回0
//             return 0;
//         }
//         // 判断数字为 0 或者 不是有限值
//         if (v === 0 || !isFinite(v)) {
//             return v;
//         }
//         // // 将当前的数字转为整数，利用-1和1的方式：floor向下取整(abs取绝对值)
//         return (v > 0 ? 1 : -1) * Math.floor(Math.abs(v));
//     }
//     // 设置JS最大安全正整数2^53 - 1
//     const maxSafeInt = Math.pow(2, 53) - 1;
//     // 封装设置length属性的函数
//     const toLength = function (value) {
//         // 利用toInt函数将length转为整数
//         const len = toInt(value);
//         return Math.min(Math.max(len, 0), maxSafeInt);
//     }
//     // 抛出接口
//     return function (arrayLike) {
//         // 获取当前调用者
//         const caller = this;
//         // 判断当前调用者是否为null
//         if (arrayLike === null || arrayLike === undefined) {
//             throw new TypeError('Method `from` requires an array-like object');
//         }
//         // 包装arrayLike数据类型
//         const origin = Object(arrayLike);
//         // arg2为改变this指向的值
//         let arg2;
//         // 获取mapFn参数：arguments.length > 1 证明上传了第二个参数（回调函数）
//         const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
//         // 判断当前mapFn是否存在
//         if (typeof mapFn !== 'undefined') {
//             // mapFn存在，判断是否可调用
//             if (!isCallable(mapFn)) {
//                 throw new TypeError('mapFn must be a function');
//             }
//             // arguments.length > 2证明上传了第三个参数（更改回调内部的this指向）
//             if (arguments.length > 2) {
//                 arg2 = arguments[2];
//             }
//         }
//         // 获取当前对象的长度
//         const len = toLength(origin.length);
//         // 判断当前调用者是否可被调用，false针对Array.from.call(1, { length: 2 })的情况
//         const arr = isCallable(caller) ? Object(new caller(len)) : new Array(len);
//         // 设置计步器
//         let i = 0,
//             val;
//         // 开始循环遍历
//         while (i < len) {
//             // 获取当前元素的值
//             val = origin[i];
//             // 判断map是否存在
//             if (mapFn) {
//                 arr[i] = typeof arg2 === 'undefined' ? mapFn(val, i) : mapFn.apply(arg2, [val, i]);
//             } else {
//                 // 如果map不存在的话
//                 arr[i] = val;
//             }
//             // 计步器自增
//             i++;
//         }
//         return arr;
//     }
// })();

// const arrLike = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// const newArr = Array.myFrom(arrLike, function (item, index) {
//     console.log(item, index);
//     return item + 1;
// });
// console.log(newArr);


// console.log(typeof document.all); // undefined
// console.log(undefined == document.all); // true


// var obj = {};

// Object.defineProperty(obj, 'myZero', {
//     value: -0,
//     writable: false,
//     configurable: false,
//     enumerable: false
// });

// Object.defineProperty(obj, 'myZero', {
//     value: -0 // 不报错
// });


// var obj = {};

// Object.defineProperty(obj, 'myNaN', {
//     value: NaN,
//     writable: false,
//     configurable: false,
//     enumerable: false
// });

// Object.defineProperty(obj, 'myNaN', {
//     value: NaN, // 不报错
// });


// var zero1 = 0;
// var zero2 = -0;

// console.log(zero1 === zero2);  // 输出 true

// var res = Object.is({}, {});
// console.log(res); // false


// Object.myIs = function (a, b) {
//     if (a === b) {
//         // 存在+0，-0的情况，利用Infinity进行处理
//         // 1 / +0 = Infinity; 1 / -0 = -Infinity
//         return a !== 0 || 1 / a === 1 / b; // 后者用于判断-0与+0的情况
//     }
//     // 存在NaN的问题，NaN === NaN => true
//     return a !== a && b !== b;
// }

// const res = Object.myIs(NaN, NaN);
// console.log(res); // true


// var arr = ['1', 'a', 3, 4, 5];
// console.log(arr.includes(1)); // false
// console.log(arr.includes('A')); // false

// console.log(String.prototype);


// var str = '1abcde';
// console.log(str.includes(1)); // true
// console.log(str.includes('1')); // true
// console.log(str.includes('c')); // true
// console.log(str.includes('C')); // false
// console.log(str.includes('f')); // false


// var arr = [0, 1, 2, 3, 4, 5];
// console.log(arr.includes(0)); // true
// console.log(arr.includes(-0)); // true
// console.log(arr.includes(+0)); // true


// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
// };
// console.log(Array.prototype.includes.call(arrayLike, 2)); // true
// console.log(Array.prototype.includes.call(arrayLike, 1)); // false


// Array.prototype.myIncludes = function (value) {
//     if (this === null) {
//         throw new TypeError('"this" is null');
//     }

//     var fromIndex = arguments[1],
//         obj = Object(this),
//         len = obj.length >>> 0;

//     if (len === 0) {
//         return false;
//     }
//     // | 位或运算：fromIndex 为 undefined 时，取 0
//     fromIndex = fromIndex | 0;
//     // 相当于
//     // if (fromIndex === undefined) {
//     //     fromIndex = 0;
//     // }

//     fromIndex = Math.max(fromIndex >= 0 ? fromIndex : fromIndex + len, 0);

//     while (fromIndex < len) {
//         if (obj[fromIndex] === value) {
//             return true;
//         }

//         fromIndex++;
//     }

//     return false;
// }

// var arr = [1, 2, 3, 4, 5];
// console.log(arr.myIncludes.length);


// var arr = [true, false];
// console.log(arr.sort()); // (2) [false, true]


// var arr = ['abc', 'aba'];
// console.log(arr.sort()); // (2) ['aba', 'abc']


// var arr = [5, 1, 2, 4, 6, 3, 3];
// console.log(arr.sort()); // (7) [1, 2, 3, 3, 4, 5, 6]


// var arr = [5, 1, 2, 4, 6, 3, 3];
// console.log(arr.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0
//     }
// }));


// var arr = [5, 1, 2, 4, 6, 3, 3];
// console.log(arr.sort(function (a, b) {
//     return 0;
// })); // (7) [5, 1, 2, 4, 6, 3, 3]


// var arr = [5, 1, 2, 4, 6, 3, 3];
// console.log(arr.sort(function (a, b) {
//     if (Math.random() > 0.5) {
//         return 1;
//     }
//     if (Math.random() < 0.5) {
//         return -1;
//     }
//     return 0;
// }));


// var arr = ['Zhangsan', 'LiHua', 'MIKE', 'tony'];

// console.log(arr.sort(function (a, b) {
//     var _a = a.toLocaleLowerCase(),
//         _b = b.toLocaleLowerCase();
//     if (_a < _b) {
//         return -1;
//     }
//     if (_a > _b) {
//         return 1;
//     }
//     else return 0;
// })); // (4) ['LiHua', 'MIKE', 'tony', 'Zhangsan']


// var arr = ['Zhangsan', 'LiHua', 'MIKE', 'tony'];

// var newArr = arr.map(function (item, index) {
//     var it = {
//         index,
//         value: item.toLocaleLowerCase()
//     };
//     return it;
// });
// // console.log(newArr);

// newArr.sort(function (a, b) {
//     if (a.value > b.value) {
//         return 1;
//     }
//     if (a.value < b.value) {
//         return -1;
//     }
//     return 0;
// });
// // console.log(newArr);

// var res = newArr.map(function (item) {
//     return arr[item.index];
// });

// console.log(res); // (4) ['LiHua', 'MIKE', 'tony', 'Zhangsan']


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // for 循环
// function uniqueArr(array) {
//     var _arr = [],
//         isRepeat = false;

//     for (var i = 0; i < array.length; i++) {
//         isRepeat = false;
//         for (var j = i + 1; j < array.length; j++) {
//             if (array[j] === array[i]) {
//                 isRepeat = true;
//                 break;
//             }
//         }
//         if (!isRepeat) {
//             _arr.push(array[i]);
//         }
//     }

//     return _arr;
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // for 循环
// function uniqueArr(array) {
//     return array.filter(function (item, index) {
//         // 如果当前项的indexOf(item)不等于当前遍历出的index，证明元素item不可能只出现一次
//         // 比如：item = 1, index = 1, 但是 array.indexOf(1) = 0
//         return array.indexOf(item) === index;
//     })
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // forEach
// function uniqueArr(array) {
//     var _arr = [];

//     array.forEach(item => {
//         if (_arr.indexOf(item) === -1) {
//             _arr.push(item);
//         }
//     });

//     return _arr;
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // includes
// function uniqueArr(array) {
//     var _arr = [];

//     array.forEach(item => {
//         if (!_arr.includes(item)) {
//             _arr.push(item)
//         }
//     });

//     return _arr;
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // sort + reduce
// function uniqueArr(array) {
//     return array.sort().reduce(function (prev, item) {
//         if (prev.length === 0 || prev[prev.length - 1] !== item) {
//             prev.push(item);
//         }
//         return prev;
//     }, []);
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // map
// function uniqueArr(array) {
//     var _arr = [],
//         _temp = new Map();

//     for (var i = 0; i < array.length; i++) {
//         if (!_temp.get(array[i])) {
//             _temp.set(array[i], 1);
//             _arr.push(array[i]);
//         }
//     }

//     return _arr;
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// var arr = [1, 1, 2, 6, 3, 5, 0, 3, 6, 8, 9, 4, 4, 2, 0, 9, 5, 2, 7, 4, 2, 3, 4, 6];

// // Set
// function uniqueArr(array) {

//     // Array.from 类数组转为数组
//     return Array.from(new Set(array));
// }

// console.log(uniqueArr(arr).sort()); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// var arr = [1, 2, 3, 4, ['a', 'b', 'c'], 5, [[['d', ['e', 'f']], {}, null, undefined, [null, {}], 6, 7], {}, null, 'g', [[[[[8, {}]], null]]]]];

// function flatten1(arr) {
//     var _arr = arr || [], // 初始数组
//         finalArr = [], // 装载遍历过程中元素的数组
//         len = arr.length, // 原数组长度
//         item; // 循环的每一项

//     for (var i = 0; i < len; i++) {
//         item = _arr[i];
//         // 是数组的情况
//         if (_isArr(item)) {
//             finalArr = finalArr.concat(flatten1(item));
//         } else {
//             finalArr.push(item);
//         }
//     }

//     return finalArr;

//     function _isArr(obj) {
//         return {}.toString.call(obj) === '[object Array]';
//     }
// }

// console.log(flatten1(arr)); // (24) [1, 2, 3, 4, 'a', 'b', 'c', 5, 'd', 'e', 'f', {…}, null, undefined, null, {…}, 6, 7, {…}, null, 'g', 8, {…}, null]


// var arr = [1, 2, 3, 4, ['a', 'b', 'c'], 5, [[['d', ['e', 'f']], {}, null, undefined, [null, {}], 6, 7], {}, null, 'g', [[[[[8, {}]], null]]]]];

// Array.prototype.flatten2 = function () {
//     var _arr = this,
//         toStr = {}.toString;

//     if (toStr.call(_arr) !== '[object Array]') {
//         throw new TypeError('只有数组类型的数据可以使用flatten2方法');
//     }

//     var finalArr = [];

//     _arr.forEach(function (elem) {
//         toStr.call(elem) === '[object Array]'
//             ? finalArr = finalArr.concat(elem.flatten2())
//             : finalArr.push(elem);
//     });

//     return finalArr;
// }

// console.log(arr.flatten2());


// var arr = [1, 2, 3, 4, ['a', 'b', 'c'], 5, [[['d', ['e', 'f']], {}, null, undefined, [null, {}], 6, 7], {}, null, 'g', [[[[[8, {}]], null]]]]];

// Array.prototype.flatten3 = function () {
//     var _arr = this,
//         toStr = {}.toString;

//     if (toStr.call(_arr) !== '[object Array]') {
//         throw new TypeError('只有数组类型的数据可以使用flatten3方法');
//     }

//     return _arr.reduce(function (prev, elem) {
//         return prev.concat(
//             toStr.call(elem) === '[object Array]'
//                 ? elem.flatten3()
//                 : elem)
//     }, []);
// }

// console.log(arr.flatten3());


// var arr = [1, 2, 3, 4, ['a', 'b', 'c'], 5, [[['d', ['e', 'f']], {}, null, undefined, [null, {}], 6, 7], {}, null, 'g', [[[[[8, {}]], null]]]]];

// const flatten4 = arr =>
//     arr.reduce(
//         (prev, elem) =>
//             prev.concat(
//                 {}.toString.call(elem) === '[object Array]'
//                     ? flatten4(elem)
//                     : elem
//             ),
//         []);

// console.log(flatten4(arr));


// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// // 定义一个函数，用来实现数组扁平化
// function flatten(arr) {
//     var _arr = arr || [],  // 如果arr为空，设置默认值为空数组
//         finalArr = [],    // 存储扁平化后的结果
//         len = _arr.length,  // 数组长度
//         item,   // 当前元素
//         toStr = {}.toString;  // 获取toString方法的引用

//     for (var i = 0; i < len; i++) {
//         item = _arr[i];
//         if (_isArr(item)) {   // 判断当前元素是否是数组
//             finalArr = finalArr.concat(flatten(item));  // 如果是数组，递归调用flatten函数进行扁平化
//         } else {
//             finalArr.push(item);  // 如果不是数组，直接将元素添加到finalArr中
//         }
//     }

//     return finalArr;  // 返回扁平化后的结果

//     // 判断当前元素是否是数组的辅助函数
//     function _isArr(item) {
//         return toStr.call(item) === '[object Array]';  // 使用toString方法判断当前元素的类型是不是数组
//     }
// }

// console.log(flatten(arr)); // (17) [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10]


// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// Array.prototype.flatten = function () {
//     var _arr = this,
//         finalArr = [],
//         toStr = {}.toString;

//     if (toStr.call(_arr) !== '[object Array]') {
//         throw new Error('只有数组才能调用flatten方法');
//     }

//     _arr.forEach(function (item) {
//         toStr.call(item) === '[object Array]'
//             ? finalArr = finalArr.concat(item.flatten())
//             : finalArr.push(item);
//     });

//     return finalArr;
// }

// console.log(arr.flatten());


// // 定义一个数组 arr
// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// Array.prototype.flatten = function () {
//     var _arr = this,
//         toStr = {}.toString;

//     return _arr.reduce(function (prev, item) {
//         return prev.concat(
//             toStr.call(item) === '[object Array]'
//                 ? item.flatten()
//                 : item
//         )
//     }, []);
// }

// console.log(arr.flatten());


// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// // 定义一个箭头函数 flatten，用于将多维数组扁平化
// const flatten = arr => {
//     return arr.reduce((prev, item) => {
//         // 判断 item 是否为数组，如果是数组则递归调用 flatten 函数，否则直接将 item 添加到 prev 中
//         return prev.concat(
//             {}.toString.call(item) === '[object Array]'
//                 ? flatten(item)
//                 : item
//         );
//     }, []);
// }

// // 调用 flatten 函数并打印结果
// console.log(flatten(arr));


// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// console.log(Array.from(new Set(arr.flat(Infinity))));

// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// console.log(Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)); // (14) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]



// 闭包
// function test(a, b, type) {
//     var c = 3;
//     function add() {
//         console.log(a + b);
//     }
//     function minus() {
//         console.log(a - b);
//     }
//     switch (type) {
//         case 'PLUS':
//             add();
//             break;
//         case 'MIUNS':
//             minus();
//             break;
//         default:
//             break;
//     }
// }
// test(1, 2, 'PLUS'); // 3


// // 函数是可以互相嵌套使用的
// var a = 1;
// function test1() { // 形成闭包
//     console.log(a);
//     var b = 2;
//     function test2() { // 函数 test2 所形成的闭包是针对 test1 函数的
//     }
//     debugger
//     test2();
// }
// test1();


// var a = 1;
// function test1() {
//     console.log(a);
//     var b = 2;
//     function test3() { }
//     function test2() {
//         console.log(b);
//         test3();
//     }
//     debugger
//     test2();
// }
// test1();


// function test(initialValue) {
//     let num = initialValue;

//     function changeNum(value) {
//         num += value;
//     }

//     function add(value) {
//         changeNum(value);
//     }

//     function minus(value) {
//         changeNum(-value);
//     }

//     function value() {
//         return num;
//     }

//     return {
//         add,
//         minus,
//         value,
//     }
// }
// const t = test(100); // 赋初值
// t.add(8); // 改变值
// console.log(t.value()); // 获取值


// function test() {
//     function test2() { } // 闭包

//     return test2;
// }
// const t = test(); // 返回test2引用


// 柯里化函数编写
// function test() {
//     return function test1() {
//         return function test2() {
//             return function test3() {
//             }
//         }
//     }
// }
// const t0 = test();
// const t1 = t0();
// const t2 = t1();


// // 获取 id 为 "textInput" 的元素
// const oInput = document.querySelector('#textInput');
// // 给 oInput 元素添加 input 事件监听器，当 input 内容发生变化时触发
// // 事件处理函数为 throttle(handler, 800)，即在 800 毫秒内只执行一次 handler
// oInput.addEventListener('input', throttle(handler, 800), false);

// // input 事件处理函数
// function handler() {
//     // 在事件处理函数中，this 指向被绑定的元素，即 oInput，输出当前输入框的值
//     console.log(this.value);
// }

// // 节流函数，限制 handler 函数在一定时间间隔内只执行一次
// // 参数：handler - 要节流的函数，delay - 延迟时间
// function throttle(handler, delay) {
//     // 函数内部声明的局部变量均为私有变量
//     // 声明一个局部变量 _delay，用于存储延迟时间，默认为 1000 毫秒
//     const _delay = delay || 1000;
//     // 声明一个局部变量 _initalTime，用于存储初始时间，初始为当前时间
//     let _initialTime = new Date().getTime();

//     // 返回一个新的事件处理函数
//     return function (args) { // 闭包函数可以对外部函数 handler 进行二次封装，以达到按条件进行执行的目的
//         // 获取当前时间
//         const currentTime = new Date().getTime();
//         // 存储当前上下文
//         const ctx = this;

//         // 如果当前时间与初始时间的差值大于等于延迟时间
//         if (currentTime - _initialTime >= _delay) {
//             // 调用 handler 函数，并传入当前上下文和参数
//             handler.apply(ctx, args);
//             // 更新初始时间为当前时间
//             _initialTime = currentTime;
//         }
//     }
// }


// function add(a, b) {
//     return console.log(a + b);;
// }
// function minus(a, b) {
//     return console.log(a - b);;
// }

// var a = 101;
// var b = 99;

// if (a > 100 && b > 100) {
//     add(a, b);
// } else {
//     minus(a, b);
// }


// function compute(methods) {
//     return function (a, b) {
//         if (a > 100 && b < 100) {
//             return methods.add(a, b);
//         } else {
//             return methods.minus(a, b);
//         }
//     }
// }

// var a = 101;
// var b = 99;
// const c = compute({
//     add(a, b) {
//         return a + b;
//     },
//     minus(a, b) {
//         return a - b;
//     },
// })

// console.log(c(a, b));


// const oLi = document.querySelectorAll('li');
// /**
//  * for 执行的流程是什么
//  *
//  * 1. var i   i = 0
//  * 2. 0 < 3
//  *    符合 ：1. body（ oLi[i].addEventListener('click', function () { console.log(i); }, false); ）
//  *    不符合：停止
//  * 3. i = i++ = 1
//  * 4. 1 < 3
//  *    符合 ：1. body（ oLi[i].addEventListener('click', function () { console.log(i); }, false); ）
//  *    不符合：停止
//  * 5. i = i++ = 2
//  * 6. 2 < 3
//  *    符合 ：1. body（ oLi[i].addEventListener('click', function () { console.log(i); }, false); ）
//  *    不符合：停止
//  * 7. i = i++ = 3
//  * 8. 3 < 3 不符合 停止
//  *
//  *    最终 i === 3
//  */
// for (var i = 0; i < oLi.length; i++) { // 这个函数自始至终都没有执行过
//     oLi[i].addEventListener('click', function () {
//         console.log(i);
//         // 因此不能确定函数内部的变量 i 到底是多少
//         // 只有在 handler 执行的时候，console.log 才会执行
//         // 点击 li 的时候，才能去访问 i，此时 i = 3
//     }, false);
// }
// /**
//  * i === 0
//  *  oLi[0].addEventListener('click', function () {
//         console.log(i); i = ?
//     }, false);
//  */

// // 我需要一个作用域在循环的时候，帮我保存一个独一无二的 i，值为循环中的 i 赋值时候的值
// const oLi = document.querySelectorAll('li');
// for (var i = 0; i < oLi.length; i++) {
//     (function (i) {
//         // 参数为函数内部的临时局部变量
//         // 每一次当函数执行时，相当于：声明 i，将实参的 i 值赋值给形参的 i 值
//         oLi[i].addEventListener('click', function () {
//             console.log(i);
//         }, false);
//     })(i);
// }


// const oLi = document.querySelectorAll('li');
// for (let i = 0; i < oLi.length; i++) {
//     oLi[i].addEventListener('click', function () {
//         console.log(i);
//     }, false);
// }


// function test({ a, b, c }) {
//     let _a = a;
//     let _b = b;
//     let _c = c;

//     function testA() {
//         function setA(value) {
//             _a = value;
//             return _a;
//         }
//         return {
//             get a() {
//                 return _a;
//             },
//             set a(newValue) {
//                 _a = newValue;
//             },
//             setA
//         }
//     }

//     function testB() {
//         function setB(value) {
//             _b = value;
//             return _b;
//         }
//         return {
//             get b() {
//                 return _b;
//             },
//             setB
//         }
//     }

//     function testC() {
//         function setC(value) {
//             _c = value;
//             return _c;
//         }
//         return {
//             get c() {
//                 return _c;
//             },
//             setC
//         }
//     }

//     return {
//         testA,
//         testB,
//         testC
//     }
// }

// const { testA, testB, testC } = test({ a: 1, b: 2, c: 3 });
// const aInfo = testA();
// const bInfo = testB();
// const cInfo = testC();

// console.log(aInfo.a); // 1
// aInfo.setA(8);
// console.log(aInfo.a); // 8

// import { ref } from 'vue';

// function useRef(initialValue) {
//     const _value = ref(initialValue);
//     function _setValue(newValue) {
//         _value.value = newValue;
//     }
//     return [_value, _setValue];
// }

// const [count, setCount] = useRef(0);


// // 获取
// console.log(count.value); // 输出：0
// // 赋值
// setCount(100);
// console.log(count.value); // 输出：100


// function UserInfo(info) {
// }

// const userInfo = new UserInfo;
// console.log(userInfo); // UserInfo {}


// function UserInfo(info) {
//     this.username = info.username;
//     this.agte = info.age;

//     // 实例属性
//     // this.setInfo = function (info) { // 闭包
//     //     this.username = info.username;
//     //     this.agte = info.age;
//     // }
// }

// // UserInfo.prototype 为原型属性，被 UserInfo 实例的对象直接继承
// UserInfo.prototype.setInfo = function (info) {
//     this.username = info.username;
//     this.age = info.age;
// };

// // setInfo 为 UserInfo 的静态方法（static method / static property）
// // UserInfo.setInfo = function (info) { }

// const userInfo = new UserInfo({
//     username: 'yaoyaolingxian',
//     age: 1
// });

// userInfo.setInfo({
//     username: 'mate60Pro',
//     age: 10
// })

// console.log(userInfo); // UserInfo {username: 'mate60Pro', agte: 10, setInfo: ƒ}


// class UserInfo {
//     constructor(info, callback) {
//         this.username = info.username;
//         this.age = info.age;
//         this.callback = callback;
//     }

//     setInfo(info) {
//         const oldUsername = this.username;
//         const oldUage = this.age;

//         this.username = info.username;
//         this.age = info.age;

//         this.callback && this.callback(
//             {
//                 username: oldUsername,
//                 age: UserInfo.age(oldUage)
//             },
//             {
//                 username: this.username,
//                 age: UserInfo.age(this.age)
//             })
//     }

//     // 类工具/工具函数
//     static age(age) {
//         return age + '岁'
//     }
// }

// const userInfo = new UserInfo({
//     username: 'yaoyaolingxian',
//     age: 18
// }, function (oldInfo, newInfo) {
//     console.log(oldInfo, newInfo);
// });

// userInfo.setInfo({
//     username: 'mate60Pro+',
//     age: 36
// })
// // 运行结果：
// // {username: 'yaoyaolingxian', age: '18岁'}
// // {username: 'mate60Pro+', age: '36岁'}


// 针对于 var 来说，下面这行代码其实是没有初始化的
// var a = 1; // 主动将 1 赋值给 a 的过程

/**
 * GO {
 *    a: undefined // initialization
 * }
 *
 * 执行期 undefined -> 1
 */


// var a = 1;
// console.log(window.a);


// {
//     // 块级作用域

// }

// console.log(a);
// var a = 1; // undefined
// /**
//  * 预编译
//  * GO { a: undefined }
//  * 1. 声明 a 标识
//  * 2. 将 a 标识初始化为 undefined
//  *
//  * 执行
//  * 1. 赋值给 a 标识
//  */


// test(); // ReferenceError: Cannot access 'test' before initialization
// const test = () => { }


// let a;
// console.log(a); // undefined
// JS系统中
// undefined是唯一自动化生成的默认值 原始性的默认值


// if (true) var a = 1;
// if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context


// ; (function () {
//     const a = 1;
//     const b = 2;

//     function test(a, b) {
//         return a + b;
//     }

//     const t = test(a, b);
//     console.log(t); // 3
// })();


// var a = 1;
// console.log(a); // 1
// {
//     console.log(a); // ƒ a() { console.log(123); }
//     function a() {
//         console.log(123);
//     }
//     console.log(a); // ƒ a() { console.log(123); }
// }
// console.log(a); // ƒ a() { console.log(123); }

// 'use strict'

// var a = 1;
// console.log(a);
// {
//     console.log(a);
//     function a() {
//         console.log(123);
//     };
//     console.log(a);
// }
// console.log(a);

// var i = 0;
// for (; ;) {
//     if (i >= 5) {
//         break;
//     }
//     console.log(i); // 0 1 2 3 4
//     i++;
// }

// arr = [];
// for (var i = 0; i < 5; i++) {
//     arr[i] = function () {
//         console.log(i);
//     }
// }
// console.log(arr);
// arr.forEach(cb => cb());


// arr = [];
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         console.log(i); // 0 1 2 3 4
//     })(i);
// }


// arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = function () {
//         console.log(i); // 0 1 2 3 4
//     }
// }
// arr.forEach(cb => cb());
/**
 * 初始化照样做：let i -> 将 0 赋值给 i
 * 每一次迭代的时候，会发生以下事情：
 * 1. 系统会为 for 的 loop body 这个范围创建一个新的词法作用域
 * 2. 在词法作用域中新声明一个 i（let i）
 * 3. 将上一次迭代或者初始化的值，赋值给这个新的 i 变量
 * 4. 对新的词法作用域内的 i 进行操作 i++
 */


// const arr = [];
// let memo;

// {
//     let i;
//     i = 0;
//     arr[i] = function () {
//         console.log(i);
//     }
//     memo = i + 1;
// }

// {
//     let i;
//     i = memo;
//     arr[i] = function () {
//         console.log(i);
//     }
//     memo = i + 1;
// }

// {
//     let i;
//     i = memo;
//     arr[i] = function () {
//         console.log(i);
//     }
//     memo = i + 1;
// }

// {
//     let i;
//     i = memo;
//     arr[i] = function () {
//         console.log(i);
//     }
//     memo = i + 1;
// }

// {
//     let i;
//     i = memo;
//     arr[i] = function () {
//         console.log(i);
//     }
//     memo = i + 1;
// }

// arr.forEach(cb => cb());


// for (let i = 0, test = () => i; i < 5; i++, test = () => i) {
//     console.log(test()); // 0 1 2 3 4
// }


// const a; // SyntaxError: Missing initializer in const declaration

// const a = 1;
// const a = 2; // SyntaxError: Identifier 'a' has already been declared


// const person = {
//     name: "Alice",
//     age: 25
// };
// person.age = 26; // 可以修改引用值内部的属性
// console.log(person.age); // 输出 26
// delete person.age; // 可以删除引用值内部的属性
// console.log(person.age); // 输出 undefined


// const API_URLs = Object.freeze({
//     GET_LIST: '',
//     REMOVE_ITEM: '',
//     ADD_ITEM: ''
// });
// API_URLs.GET_LIST = 123;
// SyntaxError: Identifier 'API_URLs' has already been declared


// class User { }
// console.log(typeof User); // function

// let Hd = class { };
// console.log(Hd); // class { }


// class User {
//     show() {

//     }
//     // 注意!两个方法之间不要使用逗号','
//     get() {
//         console.log('文字内容填充');
//     }

// }
// let user = new User;
// // console.dir(user); 用于显示一个对象的详细信息，包括对象的属性、方法、原型链等。它会以一个展开的方式输出对象的结构，方便查看对象的内部信息。
// user.get(); // 文字内容填充


// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let user = new User('用户');
// console.log(user.name); // 用户


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new Person('John', 25);
// console.log(person1.name); // 输出: John
// console.log(person1.age); // 输出: 25


// class Database {
//     constructor() {
//         this.connect(); // 连接数据库
//         this.loadData(); // 加载默认数据
//     }

//     connect() {
//         // 连接数据库的具体操作
//     }

//     loadData() {
//         // 加载默认数据的具体操作
//     }
// }

// const db = new Database();


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     // 方法
//     getName() {
//         return this.name;
//     }
// }
// let user1 = new User('用户1');
// console.log(user1.name); // 用户1
// let user2 = new User('用户2');
// console.log(user2.name); // 用户2
// console.log(user1.getName()); // 用户1


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     show() { }
// }

// let u = new User('Tom');
// // 获取对象自身所有属性
// console.log(Object.getOwnPropertyNames(u)); // ['name']
// console.log(Object.getOwnPropertyNames(User.prototype)); // (2) ['constructor', 'show']

// function Client(name) {
//     this.name = name;
// }
// Client.prototype.show = function () { }

// let c = new Client('Sam');
// console.log(Object.getOwnPropertyNames(c)); // ['name']
// console.log(Object.getOwnPropertyNames(Client.prototype)); // (2) ['constructor', 'show']


// class User {
//     site = 'Jimmy';
//     constructor(name) {
//         this.name = name;
//     }
//     changeSite(value) {
//         this.site = value
//     }
//     show() {
//         return `${this.site}:${this.name}`;
//     }
// }

// let user = new User('Tim');
// user.changeSite('NewJimmy')
// console.log(user.show()); // NewJimmy:Tim


// function User(name) {
//     this.name = name;
// }
// User.prototype.show = function () { }
// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(User.prototype, 'show'), null, 2));

// let u = new User('Tom');

// for (const key in u) {
//     if (u.hasOwnProperty(key)) {
//         console.log(key); // name
//     }
// }


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     show() { }
// }

// let u = new User('Tom');

// console.dir(User);

// console.log(JSON.stringify(
//     Object.getOwnPropertyDescriptor
//         (User.prototype, 'show'), // "enumerable": false, 不可遍历
//     null,
//     2));

// for (const key in u) {
//     console.log(key); // name
// }



// class User {
//     show() {
//         function test() {
//             console.log(this); // undefined
//         }
//         test()
//     }
// }

// let u = new User();
// u.show();

// 'use strict';

// function User() { }
// User.prototype.show = function () {
//     function test() {
//         console.log(this); // undefined
//     }
//     test();
// }
// let u = new User();
// u.show();
// function show() {
//     console.log(this); // undefined
// }
// show();


// function Web(url) {
//     this.url = url;
// }
// Web.url = 'qq.zone'; // 静态属性
// let hd = new Web('qq.com');
// console.log(hd); // Web {url: 'qq.com'}
// console.dir(Web);


// class MyClass {
//     static myStaticProperty = "Hello, I'm a static property";

//     static myStaticMethod() {
//         console.log("Hello, I'm a static method");
//     }
// }
// console.log(MyClass.myStaticProperty); // 输出: Hello, I'm a static property

// MyClass.myStaticMethod(); // 输出: Hello, I'm a static method


// class Request {
//     static host = 'https://cn.bing.com'; // 静态属性

//     api(url) {
//         return Request.host + `/${url}`;
//     }
// }
// let obj = new Request();
// console.log(obj.api('article')); // https://cn.bing.com/article


// function User() { }
// User.prototype.show1 = function () {
//     console.log(this); // User {}
//     console.log(this === User.prototype.constructor); // false
//     // 在这个上下文中，方法中的 this 关键字指向的是调用该方法的对象，而不是 User.prototype.constructor。
// }
// User.__proto__.show2 = function () {
//     console.log(this); // ƒ User() { }
//     console.log(this === User.prototype.constructor); // true
// }
// let user = new User();
// user.show1();
// User.show2();


// function User() { }
// User.prototype.show1 = function () {
//     console.log(this); // User {} 表示实例对象 user 的内容
//     console.log(this === User.prototype.constructor); // false
// };

// User.__proto__.show2 = function () {
//     console.log(this); // ƒ User() { }
//     console.log(this === User); // true
//     console.log(this === User.prototype.constructor); // true
// };

// let user = new User();

// user.show1();
// console.log(user);// User {}

// User.show2();


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static create(...args) {
//         return new this(...args);
//     }
// }
// let user = User.create('Tom', 26);
// console.log(user); // User {name: 'Tom', age: 26}


// const data = [
//     { name: 'js', price: 100 },
//     { name: 'mysql', price: 200 },
//     { name: 'python', price: 300 },
// ];

// class Lesson {
//     constructor(data) {
//         this.model = data;
//     }
//     get price() {
//         return this.model.price;
//     }
//     get name() {
//         return this.model.name;
//     }
//     static totalPrice(data) {
//         return data.reduce((accumulator, current) => {
//             return accumulator + current.price;
//         }, 0)
//     }
//     static createBatch(data) {
//         return data.map(item => new Lesson(item));
//     }
//     static maxPrice(data) {
//         return data.sort((a, b) => b.price - a.price)[0];
//     }
// }

// let lessons = Lesson.createBatch(data);
// console.log(Lesson.maxPrice(lessons).price); // 300
// console.log(Lesson.maxPrice(lessons).name); // 300
// console.log(Lesson.totalPrice(lessons)); // 600


// class Request {
//     constructor(host) {
//         // 初始化一个空的 data 对象
//         this.data = {};
//         // 使用 host 的 setter 方法设置 data.host 的值为传入的 host 值
//         this.host = host;
//     }
//     // 定义 host 的 setter 方法
//     set host(url) {
//         // 定义 host 的 setter 方法
//         if (!/^https?:\/\//i.test(url)) {
//             // 如果不是有效的地址格式，抛出错误
//             throw new Error('地址错误');
//         }
//         // 将 data.host 属性设置为传入的 url 值
//         this.data.host = url;
//     }
//     // 定义 host 的 getter 方法
//     get host() {
//         // 返回 data.host 属性的值
//         return this.data["host"];
//     }
// }
// // 创建一个 Request 实例，并传入初始的 host 值
// let req = new Request('https://www.bilibili.com');
// // 将 host 属性的值设置为新的 URL
// req.host = 'https://baidu.com';
// console.log(req);
// console.log(req.host); // https://baidu.com


// let a = 1;
// let b = a;
// console.log(a, b); // 1 1
// b = 3;
// console.log(a, b); // 1 3

// let e = { name: 'Tom' };
// let f = e;
// console.log(e, f); // {name: 'Tom'} {name: 'Tom'}
// f.name = 'newTom';
// console.log(e, f); // {name: 'newTom'} {name: 'newTom'}


// const HOSt = {
//     url: 'https://www.houdunren.com/api',
//     port: 443
// };
// Object.freeze(HOSt);
// HOSt.port = 80;
// console.log(HOSt.port); // 443


// function Foo() { }
// var foo = new Foo();

// console.log(foo.__proto__ === Foo.prototype); // true
// console.log(Foo.__proto__ === Function.prototype); // true
// console.log(Object.__proto__ === Function.prototype); // true
// console.log(Function.__proto__ === Function.prototype); // true
// console.log(Function.prototype.__proto__ === Object.prototype); // true

// // 如果自身有constructor属性，则取自身；如果自身没有constructor，则取原型上的constructor
// console.log(Object.prototype.constructor === Object); // true
// console.log(Function.prototype.constructor === Function); // true
// console.log(Object.constructor === Function); // true

// console.log(Array.constructor === Function); // true
// console.log(String.constructor === Function); // true
// console.log(Number.constructor === Function); // true


// console.log(Object.prototype.__proto__); // null


// function Super() {
//     this.a = [1, 2, 3, 4];
// }

// Super.prototype.say = function () {
//     console.log(1);
// }

// function Sub() {
//     Super.call(this); // 调用 Super 构造函数，将 this 绑定到 Sub 的实例上
// }

// // 原型链继承
// Sub.prototype = new Super();

// var sub1 = new Sub();
// var sub2 = new Sub();

// sub1.a.push(5);
// console.log(sub1.a); // (5) [1, 2, 3, 4, 5]
// console.log(sub2.a); // (4) [1, 2, 3, 4]
// sub1.say(); // 1
// sub2.say(); // 1


// function Super() {
//     this.a = [1, 2, 3, 4];
// }

// Super.prototype.say = function () {
//     console.log(1);
// }

// function Sub() {
//     Super.call(this);
// }

// // 兼容不支持 Object.create() 方法的环境
// if (!Object.create) { // 环境不支持 Object.create()
//     Object.create = function (proto) { // 定义了一个匿名函数作为 Object.create 的替代实现
//         var F = function () { }; // 创建了一个空的构造函数 F
//         F.prototype = proto; // 将构造函数 F 的原型对象设置为传入的 proto 参数
//         return new F(); // 创建一个新的对象，并将其作为 Object.create() 的返回值返回
//     }
// }

// Sub.prototype.say2 = function () {
//     console.log('say2');
// }

// // 解决方法
// Sub.prototype = Object.create(Super.prototype); // 相当于 Sub.prototype.__proto__ = Super.prototype;

// var sub1 = new Sub();
// var sub2 = new Sub();

// sub1.a.push(5);
// console.log(sub1.a); // (5) [1, 2, 3, 4, 5]
// console.log(sub2.a); // (4) [1, 2, 3, 4]
// sub1.say2(); // Uncaught TypeError: sub1.say2 is not a function
// sub2.say2(); // 1


// function Super() {
//     this.a = [1, 2, 3, 4];
// }

// Super.prototype.say = function () {
//     console.log(1);
// }

// function Sub() {
//     Super.call(this);
// }

// // 创建一个中间对象，并将其原型设置为 Super.prototype
// function inherit(Sub, Super) {
//     var F = function () { };
//     F.prototype = Super.prototype;
//     var prototype = new F();
//     prototype.constructor = Sub;
//     Sub.prototype = prototype;
// }

// inherit(Sub, Super);

// var sub1 = new Sub();
// var sub2 = new Sub();

// sub1.a.push(5);
// console.log(sub1.a); // [1, 2, 3, 4, 5]
// console.log(sub2.a); // [1, 2, 3, 4]
// sub1.say(); // 1
// sub2.say(); // 1


// var inherit = (function () {
//     var F = function () { };
//     return function (Target, Origin) {
//         F.prototype = Origin.prototype;
//         Target.prototype = new F();
//         Target.prototype.constructor = Target;
//         Target.prototype.uber = Origin.prototype;
//     }
// }())
// inherit(Son, Father)
// var son = new Son();
// var father = new Father();


// // 定义一个立即执行函数，返回一个继承函数
// var inherit = (function () {
//     // 定义一个空的构造函数 F
//     var F = function () { };

//     // 返回继承函数
//     return function (Target, Origin) {
//         // 将 Origin.prototype 赋值给 F.prototype，建立原型链继承关系
//         F.prototype = Origin.prototype;

//         // 创建一个 F 的实例，并将其赋值给 Target.prototype，实现继承
//         Target.prototype = new F();

//         // 将 Target.prototype.constructor 指向 Target，确保构造函数的正确性
//         Target.prototype.constructor = Target;

//         // 在 Target.prototype 上添加一个 uber 属性，指向 Origin.prototype，用于访问父类的原型
//         Target.prototype.uber = Origin.prototype;
//     }
// })();

// // 使用继承函数将 Son 继承自 Father
// inherit(Son, Father);

// // 创建 Son 的实例
// var son = new Son();

// // 创建 Father 的实例
// var father = new Father();


// class Super {
//     constructor() {
//         this.a = [1, 2, 3, 4];
//     }
//     say2() {
//         console.log('say2');
//     }
// }

// class Sub extends Super {
//     say1() {
//         console.log('say1');
//     }
// }
// var sub1 = new Sub();
// var sub2 = new Sub();

// sub1.a.push(5);
// console.log(sub1.a); // (5) [1, 2, 3, 4, 5]
// console.log(sub2.a); // (4) [1, 2, 3, 4]
// sub1.say1(); // say1
// sub1.say2(); // say2


// // 定义一个构造函数 Person
// function Person() { }

// // 在 Person 的原型对象上添加属性 num
// Person.prototype.num = 321;

// // 在 Person 的原型对象上添加方法 show
// Person.prototype.show = function () {
//     console.log("show method");
// }

// // 创建一个新对象 obj，通过 new 关键字调用 Person 构造函数
// var obj = new Person;

// // 遍历 Person.prototype 中的每个属性或方法，并将其复制到 obj 中
// for (var key in Person.prototype) {
//     obj[key] = Person.prototype[key];
// }

// // 打印 obj 中的 num 属性值
// console.log(obj.num);

// // 调用 obj 的 show 方法
// obj.show();


// // 定义一个父对象
// var parent = {
//     name: "Parent",
//     getName: function () {
//         return this.name;
//     }
// };

// // 创建一个空对象，用于继承父对象
// var child = {};

// // 实现拷贝继承的函数
// function copyInheritance(parent, child) {
//     for (var key in parent) {
//         if (parent.hasOwnProperty(key)) { // 确保只复制父对象自身的属性，而不是继承来的属性
//             child[key] = parent[key];
//         }
//     }
// }

// // 使用拷贝继承将父对象的属性和方法复制到子对象中
// copyInheritance(parent, child);

// // 在子对象上添加新属性
// child.age = 10;

// // 在父对象上修改属性
// parent.name = "New Parent";

// // 测试输出
// console.log(child.name); // 输出: "Parent"，子对象继承了父对象的属性
// console.log(child.age); // 输出: 10，子对象自己的属性
// console.log(child.getName()); // 输出: "Parent"，子对象继承了父对象的方法


// const protecteds = Symbol(); // 多个私有属性
// class Common {
//     constructor() {
//         this[protecteds] = {}; // 多个私有属性
//         this[protecteds].host = 'https://www.bilibili.com'; // 多个私有属性
//     }
//     set host(url) {
//         if (!/^https?:\/\//i.test(url)) {
//             throw new Error('地址错误');
//         }
//         this[protecteds].host = url;
//     }
//     get host() {
//         return this[protecteds].host;
//     }
// }
// class User extends Common {
//     constructor(name) {
//         super(); // 调用父类（即基类）的构造函数
//         this[protecteds].name = name;
//     }
//     get name() {
//         return this[protecteds].name;
//     }
// }
// let user = new User('yummy');
// user.host = 'https://www.baidu.com';
// console.log(user.host); // https://www.baidu.com
// console.log(user.name); // yummy


// let privateData = new WeakMap();

// class PrivateObject {
//     constructor() {
//         privateData.set(this, { privateField: 'I am private' });
//     }

//     getPrivateField() {
//         return privateData.get(this).privateField;
//     }
// }

// let obj = new PrivateObject();
// console.log(obj.getPrivateField()); // 输出 "I am private"

// // 现在让 obj 变成不可访问
// obj = null;

// // 在这个时刻，obj 对象已经没有任何引用指向它
// // 因此，obj 对象会被垃圾回收

// // 由于 obj 对象被垃圾回收，与之关联的 privateData 也会被释放
// // 这样，privateData 中存储的私有属性信息也会被释放


// const protecteds = new WeakMap();
// class Comment {
//     constructor(name) {
//         this.name = name;
//         protecteds.set(this, {
//             host: 'https://www.bilibili.com'
//         });
//     }
//     set host(url) {
//         if (!/^https?:\/\//i.test(url)) {
//             throw new Error('地址错误');
//         }
//         protecteds.set(this, { ...protecteds.get(this), host: url }); // get 方法用于从 WeakMap 中获取与指定键相关联的值。
//     }
//     get host() {
//         return protecteds.get(this)['host'];
//     }
// }
// class User extends Comment {
//     constructor(name) {
//         super(name);
//         this.name = name;
//     }
//     set name(name) {
//         // protecteds.set(this, { ...protecteds.get(this), name: name })
//         protecteds.set(this, { ...protecteds.get(this), name }); // 简写
//     }
//     get name() {
//         return protecteds.get(this)['name'];
//     }
// }
// let user = new User('yummy');
// console.log(user.name); // yummy

// class Common {
//     #check = () => {
//         if (this.name.length < 5) {
//             throw new Error('名字长度不能小于5位');
//         }
//         return true;
//     }
// }
// class User extends Common {
//     #host = 'https://www.bilibili.com';
//     constructor(name) {
//         this.name = name;
//         this.#check(name); // Uncaught SyntaxError: Private field '#check' must be declared in an enclosing class
//         // 属性 “#check” 在类 “Common" 外部不可访问，因为它具有专用标识符
//     }
//     set host(url) {
//         if (!/^https?:\/\//i.test(url)) {
//             throw new Error('地址错误');
//         }
//         this.#host = url;
//     }

// }
// let user = new User('yummy');
// user.host = 'https://www.baidu.com';
// console.log(user); // User {name: 'yummy', #host: 'https://www.baidu.com', #check: ƒ}


// function User(name) {
//     this.name = name;
// }
// function Admin(name) {
//     User.call(this, name);
// }
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.show = function () { }
// let user = new User('Tom');
// console.dir(user.name); // Tom


// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Admin extends User {
//     constructor(name) {
//         super(name);
//     }
// }

// let hd = new Admin('Tom');
// console.log(hd.name);


// function User() { }
// User.prototype.show = function () {
//     console.log('tag');
// }
// function Admin() { }
// Admin.prototype = Object.create(User.prototype);
// let hd = new Admin();
// console.log(hd);


// class User {
//     show() {
//         console.log('tag');
//     }
// }
// class Admin extends User {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
// let hd = new Admin('Tom');
// console.log(hd);


// class User {
//     show() {
//         console.log('User.show');
//     }
// }
// class Admin extends User {
//     show() {
//         super.show();
//         console.log('Admin.show');
//     }
// }
// let admin = new Admin('Tom');
// admin.show();


// let user = {
//     name: 'user.name',
//     show() {
//         console.log(this.name);
//     }
// }
// let admin = {
//     __proto__: user,
//     name: 'admin.name',
//     show() {
//         this.__proto__.show.call(this);
//     }
// }
// admin.show();


// class User {
//     show() {
//         console.log(this.name);
//     }
// }
// class Admin extends User {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
//     show() {
//         super.show();
//     }
// }
// let admin = new Admin('Tom');
// admin.show();



// let common = {
//     name: 'common.name',
//     show() {
//         console.log(this.name, 'common.show'); // admin.name , common.show
//     }
// }
// let user = {
//     __proto__: common,
//     name: 'user.name',
//     show() {
//         super.show();
//     }
// }
// let admin = {
//     __proto__: user,
//     name: 'admin.name',
//     show() {
//         super.show();
//     }
// }
// admin.show();


// function User(name) {
//     this.name = name;
// }
// function Admin(...args) {
//     // User.apply(this, args);
//     User.call(this, ...args);
// }
// Admin.prototype = Object.create(User.prototype);
// let admin = new Admin('Tom');
// console.log(admin); // Admin {name: 'Tom'}


// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Admin extends User {
//     constructor(...args) {
//         super(...args);
//     }
// }
// let admin = new Admin('Tom');
// console.log(admin);


// class Controller {
//     sum() {
//         return this.data;
//     }
//     // 通过关键词返回具体课程
//     getByKey(key) {
//         return this.data.filter(item => item.name.includes(key));
//     }
// }
// class Lesson extends Controller {
//     constructor(data) {
//         super();
//         this.data = data;
//     }
//     info() {
//         return {
//             totalPrice: super.sum(),
//             data: this.data.reduce((a, c) => a + c.price, 0,),
//         }
//     }
//     getByKey(key) {
//         return super.getByKey(key).map(item => item.name);
//     }
// }
// let data = [
//     { name: 'js', price: 100 },
//     { name: 'mysql', price: 212 },
//     { name: 'vue.js', price: 98 },

// ]
// let lesson = new Lesson(data);
// console.log(lesson.getByKey('j')); // (2) ['js', 'vue.js']


// function User() { }
// User.site = 'Tom';
// User.show = function () {
//     console.log('User.static.method');
// }
// function Admin() { }
// Admin.__proto__ = User;
// Admin.show();


// class User {
//     static site = 'https://www.bilibili.com';
//     static show() {
//         console.log('User.static.show');
//     }
// }
// class Admin extends User { }
// console.dir(Admin);
// Admin.show();


// function User() { }
// function Admin() { }
// Admin.prototype = Object.create(User.prototype);
// let admin = new Admin();
// console.log(admin instanceof Admin); // true
// console.log(admin instanceof User); // true
// console.log(admin.__proto__ === Admin.prototype); // true
// console.log(admin.__proto__.__proto__ === User.prototype); // true
// console.log(admin.__proto__.__proto__.__proto__ === Object.prototype); // true
// console.log(admin.__proto__.__proto__.__proto__.__proto__); // null


// function User() { }
// function Admin() { }
// Admin.prototype = Object.create(User.prototype);
// let admin = new Admin();

// function checkPrototype(obj, constructor) {
//     if (!obj.__proto__) return false;
//     if (obj.__proto__ === constructor.prototype) return true;
//     return checkPrototype(obj.__proto__, constructor);
// }
// console.log(checkPrototype(admin, Object));


class User { }
class Admin extends User { }
let admin = new Admin();
console.log(admin instanceof Admin); // true
console.log(admin instanceof User); // true
console.log(admin instanceof Object); // true