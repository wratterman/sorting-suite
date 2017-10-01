function bubbleSorter(array) {
  let arrLength = array.length
  do {
    for (var i = 0; i < arrLength - 1; i++) {
      if (array[i] > array[i+1]) {
        let toSwap = array[i];
        array[i] = array[i+1];
        array[i+1] = toSwap;
        swapped = true
      }
    }
  } while(arrLength--);
  return array;
};

let sampleOne = [5, 1, 2, 7, 3];
let sampleTwo = [4, 11, 22, 7, 13];
let sampleThree = [17, 1, 9, 75, 34];
let sampleFour = [54, 11, 24, 12, 31];
console.log(`The original array was [${sampleOne}], and the sorted array is [${bubbleSorter(sampleOne)}]`);
console.log(`The original array was [${sampleTwo}], and the sorted array is [${bubbleSorter(sampleTwo)}]`);
console.log(`The original array was [${sampleThree}], and the sorted array is [${bubbleSorter(sampleThree)}]`);
console.log(`The original array was [${sampleFour}], and the sorted array is [${bubbleSorter(sampleFour)}]`);
module.exports = bubbleSorter
