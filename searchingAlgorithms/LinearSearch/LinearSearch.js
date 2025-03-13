function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
       
    }
     return -1;
}

let arr = [10,20,5,8,15,20]

console.log(linearSearch(arr,15)); // Output: 4
console.log(linearSearch(arr, 100)); // Output: -1


