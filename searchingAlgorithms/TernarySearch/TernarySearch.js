function ternarySearch(arr, target){

let left = 0 , right = arr.length - 1;

    while (left < right){
        let mid = left + Math.floor((right-left)/3);
        let mid2 = right - Math.floor((right-left)/3)

       if (arr[mid] === target) return mid  // found at mid1
       if (arr[mid2] === target) return mid2 // found at mid2

        if(target < arr[mid]){
            right = mid - 1
        }else if(target > arr[mid2]){
            left = mid2 + 1
        }else{
            left = mid+1
            right = mid2+1
        }

    }

    return -1

}

let sortedArr = [2, 5, 8, 12, 15, 20, 25, 30, 35, 40];
console.log(ternarySearch(sortedArr,25));

// Recursive Approach

function ternarySearchRecursive(arr, left, right, target) {
    if (left > right) return -1; // Base case: element not found

    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) {
        return ternarySearchRecursive(arr, left, mid1 - 1, target);
    } else if (target > arr[mid2]) {
        return ternarySearchRecursive(arr, mid2 + 1, right, target);
    } else {
        return ternarySearchRecursive(arr, mid1 + 1, mid2 - 1, target);
    }
}