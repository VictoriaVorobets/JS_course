// 1)
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a.concat(b);
// console.log(c);

// 2)
// let array = [1, 2, 3];
// array.reverse();
// console.log(array);

// 3)
// const array = [1, 2, 3];
// array.push(4, 5, 6);
// console.log(array);

// 4)
// const array = [1, 2, 3];
// array.unshift(4, 5, 6);
// console.log(array);

// 5)
// const array = ['js', 'css', 'jq'];
// array.pop();
// console.log(array[0]);

// 6)
// const array = ['js', 'css', 'jq'];
// array.shift();
// console.log(array[1]);

// 7)
// const array = [1, 2, 3, 4, 5];
// let newArray = array.slice(0, 3);
// console.log(newArray);

// 8)
// const array = [1, 2, 3, 4, 5];
// let newArray = array.slice(3);
// console.log(newArray);

// 9)
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);

// 10)
// const array = [1, 2, 3, 4, 5];
// array.splice(4, 1);
// array.splice(0, 1);
// console.log(array);

// 11)
// const array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c');
// console.log(array);

// 12)
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c');
// array.splice(8, 0, 'e');
// console.log(array);

// 13)
// const array = [3, 4, 1, 2, 7];
// array.sort();
// console.log(array);

// 14)
const obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
};
console.log(Object.keys(obj));