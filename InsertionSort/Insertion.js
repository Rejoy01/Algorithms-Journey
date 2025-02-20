function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {  
        let key = arr[i];  // The element to be inserted
        let j = i - 1;  

        // Move elements that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {  
            arr[j + 1] = arr[j];
            j--;  
        }

        arr[j + 1] = key; // Insert the key at the correct position

        console.log(`Pass ${i}:`, arr); // Show sorting progress
    }

    return arr;
}

// Example Usage
let numbers = [5, 3, 8, 1, 2];
console.log("Original Array:", numbers);
console.log("Sorted Array:", insertionSort(numbers));