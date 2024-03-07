function mergesort(array) {
    if (array.length <= 1){
        return array;
    } else {
        for (var size = 1; size < array.length; size = 2 * size){ // Used Chat GPT for help with these for loops
            for (var start = size; start < array.length; start += 2 * size){
                var mid = Math.min(start + size - 1, array.length - 1); // Used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min for help with understanding Math.min()
                var end = Math.min(start + 2 * size - 1, array.length - 1);
                merge(array, start, mid, end);
            }
        }
    }
    return array;
}

function merge(array, start, mid, end){ // Used Chat GPT and help from howardthegr8one-1 for this loop
    var i = start;
    var j = mid + 1;
    while (i <= mid && j <= end){
        if (array[i] <= array[j]){
            i++;
        } else {
            var value = array[j];
            var k;
            for (k = j; k > i; k--){
                array[k] = array[k - 1];
            }
            array[i] = value;
            mid++;
            j++;
        }
    }
}
