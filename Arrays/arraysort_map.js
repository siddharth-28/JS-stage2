var arr=[10,20,33,40,45,12,63,100,120];
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);
arr.sort(function(a,b){
    return 0.5-Math.random();
});
console.log(arr);
console.log(maxElement(arr));
function maxElement(arr){
    return Math.max.apply(null, arr);
}
var cars2 = [
    {type:"Volvo", year:2016, model:1},
    {type:"Saab", year:2018, model:3},
    {type:"BMW", year:2010, model:2}];
    cars2.sort(function(a, b){return a.model - b.model});
    console.log(cars2);
    cars2.sort(function(a, b){return a.year - b.year});
    var numbers=[1,2,3,4];
    var numbers2=numbers.map(mapFn);
    function mapFn(value,index,array){
        return value*2;
    }
    console.log(numbers2);
    var filterno=numbers2.filter(map2Fn);
    function map2Fn(value,index,array){
        return value>2;
    }
    console.log(filterno);
    console.log(array.lastIndexOf("BMW"))

