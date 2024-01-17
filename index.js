function calcAge(age){
    return age * 365;
}

console.log(calcAge(26));


function pickSmallest(arr){
    return Math.min(...arr);
}

console.log(pickSmallest([1,2,4,5,0,9]));

function sorting(arr){
    return arr.sort((a,b) => b - a).join('')
}

console.log(sorting([1,2,4,5,0,9]));


function calcAverage(arr){
    return arr.reduce((a,b) => (a + b)) / arr.length; 
}
console.log(calcAverage([1,2,4,5,0,9]));
