const TRational = require('./TRational.js');

describe('testing constructor', () => {
    test('constructor without args', () => {
        const tr = new TRational()
        expect(tr.fractionDouble).toBe(undefined)
    })

    test('constructor with args', () => {
        const tr = new TRational([12, 2])
        expect(tr.fractionDouble).toBe(6)
        expect(tr.numerator).toBe(12)
        expect(tr.denominator).toBe(2)
    })
})

describe('testing methods', () => {
    const tr = new TRational()

    test('setting a fraction', () => {
        tr.ToString('12/2')
        expect(tr.numerator).toBe(12)
        expect(tr.denominator).toBe(2)
    })

    test('setting a fraction with minus', () => {
        tr.ToString('-3/1')
        expect(tr.numerator).toBe(-3)
        expect(tr.denominator).toBe(1)
    })

    test('increment', () => {
        tr.ToString('1/2')
        expect(tr.increment(0.5)).toBe(1)
    })

    test('increment with minus', () => {
        tr.ToString('1/2')
        expect(tr.increment(-0.5)).toBe(0)
    })

    test('decrement', () => {
        tr.ToString('1/2')
        expect(tr.decrement(0.5)).toBe(0)
    })

    test('decrement with minus', () => {
        tr.ToString('1/2')
        expect(tr.decrement(-0.5)).toBe(1)
    })

    test('multiply', () => {
        tr.ToString('1/2')
        expect(tr.multiply(4)).toBe(2)
    })
    
    test('multiply on zero', () => {
        tr.ToString('1/2')
        expect(tr.multiply(0)).toBe(0)
    })

    test('divide', () => {
        tr.ToString('1/2')
        expect(tr.divide(0.5)).toBe(1)
    })
})