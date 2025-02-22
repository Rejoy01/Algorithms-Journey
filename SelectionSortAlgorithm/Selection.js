function SelectinSort(arr){

    let n = arr.length;

    for(let i = 0; i < n   ; i++){
            let min = i
        for(let j = i+1; j < n; j++){

            if(arr[j] < arr[min]){
                    min = j;
            }

        }   
        if(min != i){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
        console.log(`Pass ${i + 1}:` , arr);
        
    }
    return arr
}

let numbers = [5, 3, 8, 1, 2];
console.log("Original Array:", numbers);
console.log("Sorted Array:", SelectinSort(numbers));