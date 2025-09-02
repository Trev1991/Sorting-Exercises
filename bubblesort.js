// Sorts the array in place and returns it
function bubbleSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");

    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap neighbors
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // early exit when already sorted
    }
    return arr;
}
console.log(bubbleSort([5, 1, 4, 2, 8])); // → [1, 2, 4, 5, 8]
console.log(bubbleSort([]));              // → []
console.log(bubbleSort([3]));             // → [3]
console.log(bubbleSort([2, 2, 1]));       // → [1, 2, 2]
