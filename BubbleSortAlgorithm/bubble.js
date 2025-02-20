function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {  
        for (let j = 0; j < n - i - 1; j++) {  
            if (arr[j] > arr[j + 1]) {  
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example Usage
let numbers = [5, 3, 8, 1, 2];
console.log("Sorted Array:", bubbleSort(numbers));

//  optimzed version
//We can stop early if no swaps occur in a pass. This makes the best-case time complexity O(n) when the array is already sorted.
function bubbleSortOptimized(arr)
 {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {  
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {  
            if (arr[j] > arr[j + 1]) {  
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
       
        }
         if (!swapped) break; // Stop if already sorted
    }
    return arr;
}
console.log(bubbleSortOptimized([5, 3, 8, 1, 2])); // Best case: O(n)