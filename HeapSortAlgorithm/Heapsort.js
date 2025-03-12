function heapSort(arr) {
    let n = arr.length

}

function heapSort(arr) {
    let n = arr.length;

    // Step 1: Build Max-Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (max) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Heapify function to maintain the max-heap property
function heapify(arr, n, i) {
    let largest = i;  // Assume parent is largest
    let left = 2 * i + 1;  // Left child
    let right = 2 * i + 2; // Right child

    // If left child is larger than parent
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than parent
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not the root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example Usage:
let arr = [10, 50, 20, 30, 5, 40];
console.log(heapSort(arr));  // Output: [5, 10, 20, 30, 40, 50let arr = [10, 50, 20, 30, 5, 40];
console.log(heapSort(arr));  // Output: [5, 10, 20, 30, 40, 50