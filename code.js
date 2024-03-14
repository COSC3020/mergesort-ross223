function mergesort(array) {
    var length = array.length;
    if (length <= 1) {
        return array;
    } else {
        for (var size = 1; size < length; size = 2 * size) {
            var start = 0;
            while (start <= length) {
                var end = Math.min(start + 2 * size - 1, length - 1)
                var mid = Math.min(size + start - 1, length - 1);
                merge(start, mid, end, array);
                start += 2 * size;
            }
        }
    }
    return array;
}

function merge(lstart, mid, end, array) {
    var rstart = mid + 1;
    while (lstart <= mid && rstart <= end) {
        if (array[lstart] <= array[rstart]) {
            lstart++;
        } else {
            var value = array[rstart];
            for (var i = rstart; i >= lstart; i--) {
                array[i] = array[i - 1];
            }
            array[lstart] = value;
            lstart++;
            rstart++;
            mid++;
        }
    }
}
