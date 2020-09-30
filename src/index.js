exports.min = function min(array) {
  if(arguments.length ==0 || array.length ==0){
    return 0;
  }
    min_result = array[1];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < min_result) {
            min_result = array[i];
        }
    }
    return min_result;
};

exports.max = function max(array) {
  if(arguments.length ==0 || array.length ==0){
    return 0;
  }
    max_result = array[1];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > max_result) {
            max_result = array[i];
        }
    }
    return max_result;
};

exports.avg = function avg(array) {
  if(arguments.length ==0 || array.length ==0){
    return 0;
  }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / array.length).toFixed(2);
};
