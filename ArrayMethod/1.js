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


