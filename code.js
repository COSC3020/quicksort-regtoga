function quicksort(array) {
    //if the array is of length 1 or less its allready sorted
    if (array.length <= 1) {
        return array
    };

    // this stack should allow me to keep track of the unsorted subarrays.
    // i felt that a stack would function similar to the way recursion does,
    // because it lets me store the context of my progress just the same as calling a function...
    // its just that instead i am pushing and poping from an array.
    let stack = [{ left: 0, right: array.length - 1 }];

    while (stack.length > 0) {
        let { left, right } = stack.pop();
        if (left >= right) {
            continue;
        };

        let pivot = array[right];
        let i = left - 1;

        //swap elements around the pivot.
        for (let j = left; j < right; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        [array[i + 1], array[right]] = [array[right], array[i + 1]];

        let pivotIndex = i + 1;
        //split the array into two subarrays (in practice) at the pivot point
        if (pivotIndex - 1 > left) {
            stack.push({ left: left, right: pivotIndex - 1 });
        }
        if (pivotIndex + 1 < right) {
            stack.push({ left: pivotIndex + 1, right: right });
        }
    }

    return array;
}

//console.log(quicksort([5, 2, 9, 1, 5, 6]));
//console.log(quicksort([10,9,8,7,6,5,4,3,2,1]));