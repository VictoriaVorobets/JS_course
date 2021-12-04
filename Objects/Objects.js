// 1)
// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.log(carInfo);

// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.error(carInfo);

// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.group(carInfo);

// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.info(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.table(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.trace(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.warn(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.groupEnd(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.dirxml(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.dir(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.debug(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.countReset(carInfo);


// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };
// console.count(carInfo);




// 2)
// let person = {
//     firstName: "Ivan",
//     lastName: "Ivanenko",
//     age: 40,
//     sex: 'male',
//     eyeColor: "blue",
//     status: 'married',
//     children: 2,
//     realEstate: 'own house',
//     nationality: 'ukrainian',
//     address: {
//         countryOfResidence: 'Ukraine',
//         city: 'Lviv',
//     },
//     education: 'higher economic',
//     profession: 'software programmer',
//     hobby: 'swimming',
//     favouriteMovie: 'Gladiator',

// };
// console.log(person);

// let clone = {};

// for (let key in person) {
//     clone[key] = person[key];
// }
// clone.firstName = 'Petro';
// console.log(clone);

// 3)
// let carInfo = {
//     color: 'white',
//     yearOfManufacture: 2016,
//     brand: 'Ford',
// };


// let clone = Object.assign({}, carInfo);
// clone.brand = 'Mazda';

// console.log(carInfo);
// console.log(clone);