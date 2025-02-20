function mergeSort(arr) {
    if (arr.length <= 1) return arr;  // Base case: single-element array is already sorted

    let mid = Math.floor(arr.length / 2);   // Find middle index
    let left = mergeSort(arr.slice(0, mid));  // Recursively sort left half
    console.log(`left - ${left}`);
   
    let right = mergeSort(arr.slice(mid));   // Recursively sort right half
    console.log(`right - ${right}`);
    return merge(left, right);   // Merge sorted halves
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Merging sorted halves
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
        console.log(sortedArray);
        
    }

    // Add remaining elements
    return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

// Example Usage
let numbers = [5, 3, 8, 1, 2];
console.log("Sorted Array:", mergeSort(numbers));