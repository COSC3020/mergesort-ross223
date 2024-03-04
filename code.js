function mergesort(array) {
    if (array.length <= 1){
        return array;
    } else {
        for (var size = 1; size < array.length; size = 2 * size){ // Used Chat GPT for help with these for loops
            for (var start = 0; start + size - 1 < array.length - 1; start += 2 * size){
                var mid = Math.min(start + size - 1, array.length - 1); // Used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min for help with understanding Math.min()
                var end = Math.min(start + 2 * size - 1, array.length - 1);
                merge(array, start, mid, end);
            }
        }
    }
    return array;
}

function merge(array, start, mid, end){
    var lefthalf = array.slice(start, mid + 1);
    var righthalf = array.slice(mid + 1, end + 1);
    var i = 0;
    var j = 0;
    var k = start;
    while (i < lefthalf.length && j < righthalf.length){
        if (lefthalf[i] <= righthalf[j]){
            array[k] = lefthalf[i];
            i++;
        } else {
            array[k] = righthalf[j];
            j++;
        }
        k++;
    }
    while (i < lefthalf.length){
        array[k] = lefthalf[i];
        i++;
        k++;
    }
    while (j < righthalf.length){
        array[k] = righthalf[j];
        j++;
        k++;
    }
}
