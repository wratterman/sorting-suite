const assert = require('chai').assert
const insertionSorter = require('../lib/insertion-sort')

describe('insertionSort functionality', function() {
  context('insertionSort function', function(){
    it('it can insertionSort an unordered array', function(){
      let unsorted = [5,3,7,4,1];
      let answer = insertionSorter(unsorted);
      assert.equal(answer.length, unsorted.length)
      assert.equal(answer[0], 1)
      assert.equal(answer[1], 3)
      assert.equal(answer[2], 4)
      assert.equal(answer[3], 5)
      assert.equal(answer[4], 7)
    })

    it('it can insertionSort a different unordered array', function(){
      let unsorted = [17,4,77,45,23,55,18];
      let answer = insertionSorter(unsorted);
      assert.equal(answer.length, unsorted.length)
      assert.equal(answer[0], 4)
      assert.equal(answer[1], 17)
      assert.equal(answer[2], 18)
      assert.equal(answer[3], 23)
      assert.equal(answer[4], 45)
      assert.equal(answer[5], 55)
      assert.equal(answer[6], 77)
    })

    it('it can insertionSort a random unordered array', function(){
      let unsorted = [Math.floor(Math.random() * 9 + 1),
                      Math.floor(Math.random() * 9 + 1),
                      Math.floor(Math.random() * 9 + 1),
                      Math.floor(Math.random() * 9 + 1),
                      Math.floor(Math.random() * 9 + 1)
                    ];
      let answer = insertionSorter(unsorted);
      assert.equal(answer.length, unsorted.length)
      assert.isAtLeast(answer[1], answer[0])
      assert.isAtLeast(answer[2], answer[1])
      assert.isAtLeast(answer[3], answer[2])
      assert.isAtLeast(answer[4], answer[3])
      assert.isAtLeast(answer[answer.length - 1], answer[answer.length - 2])
      assert.isAtLeast(answer[answer.length - 1], answer[0])
    })
  })
})
