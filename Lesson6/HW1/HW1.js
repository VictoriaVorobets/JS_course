let a = 20;
console.log(a);

let b = "F"
console.log(b);

const x = 0
console.log(x);

let z = null;
console.log(z);

let n = "m" + 1;
console.log(n);

let word;
console.log(word);



let j = "568";
console.log(j);
console.log(typeof j);
console.log(Number (j));


let bus = '222';
console.log(bus);
console.log(Number (bus));

let l = '4';
console.log(l);
console.log(Number (l));

let u = '7777';
console.log(Number (u));

let d = '909';
console.log(Number (d));



let p = 55;
console.log(p);
let o = p.toString();

let e = 777;
console.log(e);
let i = e.toString();

let v = 656;
console.log(v);
let c = v.toString();

let r = 88;
console.log(r);
let q = r.toString();

let r1 = 123;
console.log(r1);
let r2 = r1.toString();



console.log(1 + '2'); 
//1 по замовчуванню переводить в String
console.log(''+ 1+ 0);
// теж читає як String
console.log(''- 1 + 0);
//так як операції з - нема, то він читає як цифри
console.log('2'*'3');
//String можна лише додавати. Тому він читає, як номери
console.log(2 + 2 + 'px');
// Так/як String можна додавти, то він додає цифри і переводить в String
console.log('px'+ 2 + 1);
//додає як String
console.log('2'- 1);
//переводить в цифри
console.log('2px'- 1);
//це не цифра
console.log(null + 1);
//null читається як 0 і переводить в цифру
console.log(undefined + 1);
//так undefined читається як NaN