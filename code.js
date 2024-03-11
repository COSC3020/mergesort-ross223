function mergesort(array) {
    var length = array.length;
    var first = true;
    var j;
    var i;
    if (length <= 1) {
        return array;
    } else {
        for (var size = 1; size < length; size = 2 * size) { // These loops were written by me but ZachRenz helped me understand how to write them
            j = size;
            if (first){
                j = 1;
                first = false;
            } 
            i = 0;
            while (j < length) {
                merge(i, j, size, array);
                i += 2 * size;
                j += 2 * size;
            }
        }
    }
    return array;
}

function merge(i, j, size, array) { // This merge function was also written by me minus the for loop
    while (i < j) {
        if (array[i] <= array[j]) {
            i++;
        } else {
            for (var k = j + 1; k <= (j - 1 + size) && array[k] < array[i]; k++) { // Chat GPT helped me with getting this specifc piece of logic to get the rest of the code working
            }
            k--;
            [array[i], array[k]] = [array[k], array[i]] // Used https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/ for help with swaping elements in an array
        }
    }
}
