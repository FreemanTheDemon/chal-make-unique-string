const makeUnique = (str) => {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr.join('');
}

console.log(makeUnique('helloworld'))
// helowrd

console.log(makeUnique('iwanttoclimbamountain'))
// iwantoclmbu