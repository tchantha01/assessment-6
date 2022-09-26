const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('Test should return array length equal to argument length', () => {
        let arrCopy = [1, 2, 3]
        expect(shuffleArray.length).toEqual(arrCopy.length)
    })

    test('Test should return an array', () => {
        let arrCopy = [1, 2, 3]
        expect(shuffleArray(arrCopy)).toBe([])
    })

    })



