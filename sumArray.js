function positiveSum(arr) {
    let sum = 0
    for(pos in arr){            // Loop through array of given length
        if(arr[pos] > 0){       // If arr[pos] is greater than 0
            sum += arr[pos]     // add arr[pos] to sum
        }
    }
    return sum                  // return sum
}