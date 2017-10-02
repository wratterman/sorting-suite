function insertionSorter(unsortedArray) {
  unsortedArray.forEach(function(number, index) {
      if (index > 0) {
        let toBeInserted = number;
        unsortedArray.splice(index, 1);
        for (i = 0; i < index; i++) {
          if (i === (index -1) && toBeInserted >= unsortedArray[i]) {
            unsortedArray.splice(index, 0, toBeInserted);
          } else if (toBeInserted <= unsortedArray[i]) {
            unsortedArray.splice(i, 0, toBeInserted);
            break;
          }
        }
      }
    })
    return unsortedArray;
}

let sampleOne = [5, 1, 2, 7, 3];
let sampleTwo = [4, 11, 22, 7, 13];
let sampleThree = [17, 1, 9, 75, 34];
let sampleFour = [54, 11, 24, 12, 31];
console.log(`The original array was [${sampleOne}], and the sorted array is [${insertionSorter(sampleOne)}]`);
console.log(`The original array was [${sampleTwo}], and the sorted array is [${insertionSorter(sampleTwo)}]`);
console.log(`The original array was [${sampleThree}], and the sorted array is [${insertionSorter(sampleThree)}]`);
console.log(`The original array was [${sampleFour}], and the sorted array is [${insertionSorter(sampleFour)}]`);
module.exports = insertionSorter
