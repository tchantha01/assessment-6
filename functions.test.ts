const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Test should return array equal to argument', () => {
        expect(shuffleArray([1, 2, 3])).toEqual([1, 2, 3])
    })



})