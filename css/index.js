// function red(){
//     console.log('red');
// }
// function green(){
//     console.log('green');
// }
// function yellow(){
//     console.log('yellow');
// }

// var light = function(timmer, cb){
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             cb();
//             resolve();
//         }, timmer);
//     });
// };

// var step = function() {
//     Promise.resolve().then(function(){
//         return light(3000, red);
//     }).then(function(){
//         return light(2000, green);
//     }).then(function(){
//         return light(1000, yellow);
//     }).then(function(){
//         step();
//     });
// }

// step();

// function createAssigner (keysFunc, defaults) {
//     return function (obj) {
//       var length = arguments.length;
//       if (defaults) obj = Object(obj);
//       if (length < 2 || obj == null) return obj;
//       for (var index = 1; index < length; index++) {
//         var source = arguments[index],
//             keys = keysFunc(source),
//             l = keys.length;
//         for (var i = 0; i < l; i++) {
//           var key = keys[i];
//           if (!defaults || obj[key] === void 0) obj[key] = source[key];
//         }
//       }
//       return obj;
//     };
//   }
// function allKeys(obj) {
//     var keys = [];
//     for (var key in obj) keys.push(key);
//     console.log(keys);
//     return keys;
// }

// var extend = createAssigner(allKeys, true);
// var aaa = extend({ "a": 1, "b": 2 },{ "a": 3, "c": 4 })
// console.log(aaa);