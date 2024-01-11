//map function
//1st method of map
/*let arr=[4,8,6,7,2];

function binary(x) {
    return x.toString(2);
    
}
const output=arr.map(binary);
console.log(output);*/

//2nd method
/*let arr=[4,8,6,7,2];
const output=arr.map((x)=>{
    return x.toString(2); 
})
console.log(output);*/

//3rd method
/*let arr=[4,8,6,7,2];
const output=arr.map((x)=>x.toString(2))
console.log(output);*/






//filter function
/*let arr=[4,8,6,7,2];
function isEven(x) {
    return x%2===0;
    
}
const output=arr.filter(isEven);
console.log(output);*/

//2nd method
/*let arr=[4,8,6,7,2];
const output=arr.filter((x)=>{
    return x%2===0;
})
console.log(output);*/

//3rd method
/*let arr=[4,8,6,7,2];
const output=arr.filter((x)=>x%2==0)
console.log(output);*/







//reduce method
/*let arr=[4,8,6,7,2];
function findSum(arr) {
    let sum=0;
    for (let index = 0; index < arr.length; index++) {
         sum += arr[index];
        
    }
    return sum;
    
}
console.log(findSum(arr));*/

//2nd
/*let arr=[4,8,6,7,2];
const output=arr.reduce(function(acc, curr) {
    acc +=curr;
    return acc;
    
}) 
console.log(output);*/



//3rd
/*let arr=[4,8,6,7,2];
const output=arr.reduce((acc, curr)=> {
    acc +=curr;
    return acc;
    
}) 
console.log(output);*/

/*let arr=[4,8,6,7,2];
function findMax(arr) {
    let max=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }   
    }
    return max;
    
}
console.log(findMax(arr));*/
    
    


