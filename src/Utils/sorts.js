export function bubbleSort(array) {
  //   const array = [1, 3, 8, 2];
  let swapped = true;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      console.log("PING");
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(array);
  return array;
}
