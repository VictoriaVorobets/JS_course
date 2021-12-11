 function removeItem(arr, num) {

     let store = [];

     for (let i = 0; i < arr.length; i++) {

         if (arr[i] != num) {
             store.push(arr[i]);
         }
     }

     return store;
 }

 console.log(removeItem([1, 3, 5, 3, 2, 6, 3], 3));