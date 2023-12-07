function mergeAndCount(arr, l, m, r) 
{     
    // Left subarray 
    let left = []; 
          
    for(let i = l; i < m + 1; i++) 
    { 
        left.push(arr[i]);  
    } 
          
    // Right subarray 
    let right = []; 
  
    for(let i = m + 1; i < r + 1; i++) 
    { 
        right.push(arr[i]); 
    } 
          
    let i = 0, j = 0, k = l, swaps = 0; 
    while (i < left.length &&  
           j < right.length) 
    { 
        if (left[i] <= right[j]) 
        { 
            arr[k++] = left[i++]; 
        } 
        else
        { 
            arr[k++] = right[j++]; 
            swaps += (m + 1) - (l + i); 
        } 
    } 
    while (i < left.length) 
    { 
        arr[k++] = left[i++]; 
    } 
          
    while (j < right.length) 
    { 
        arr[k++] = right[j++]; 
    } 
    return swaps; 
} 

/*
 * Complete the 'countInversions' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countInversions(arr, l = 0, r = arr.length - 1) {
    let count = 0; 
      
    if (l < r)  
    { 
        let m = Math.floor((l + r) / 2); 
              
         // Total inversion count = left subarray  
         // count + right subarray count + merge count 
              
         // Left subarray count 
         count += countInversions(arr, l, m); 
              
         // Right subarray count 
         count += countInversions(arr, m + 1, r); 
              
         // Merge count 
         count += mergeAndCount(arr, l, m, r); 
    } 
    // return count;
    console.log(count);
}

// countInversions([1,5,3,7])
// countInversions([7,5,3,1])
countInversions([3,2,1])