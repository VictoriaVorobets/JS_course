var arr = [1, 3, 5, 3, 2, 6, 3, 6, 2];

function removeDuplicates(arr) {
    const obj = {},
        out = [];
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}
result = removeDuplicates(arr);
console.log(result);