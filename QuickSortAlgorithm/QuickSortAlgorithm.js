function quickSort(arr) {
    if (arr.length <= 1) return arr;  // Base case: already sorted

    let pivot = arr[arr.length - 1];  // Choosing the last element as pivot
    let left = [];
    let right = [];

    // Partitioning step
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sorting subarrays and combining
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
let numbers = [8, 3, 1, 7, 0, 10, 2];
console.log("Sorted Array:", quickSort(numbers));