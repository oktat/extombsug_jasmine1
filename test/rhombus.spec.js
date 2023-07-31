import { calcRadius, isValidInput } from '../src/rhombus.js'

describe('A számítás tesztelése', () => {
    it('A 30, 35 bemenetre 8.60364654526569', () => {
        const expected = 8.60364654526569
        const actual = calcRadius(30, 35)
        expect(actual).toEqual(expected)
    })
    it('A 130, 140 bemenetre 41.78119462962506', () => {
        const expected = 41.78119462962506
        const actual = calcRadius(130, 140)
        expect(actual).toEqual(expected)
    })
    it('A 0, 35 bemenetre Hiba', () => {        
        expect(() => {
            calcRadius(0, 35)
        }).toThrow();
    })
    it('A 30, 0 bemenetre Hiba', () => {        
        expect(() => {
            calcRadius(30, 0)
        }).toThrow();
    })
})

describe('A bemenet ellenőrző függvény', () => {
    it('A 30 bemenetre true', () => {
        const expected = true
        const actual = isValidInput(30)
        expect(actual).toBe(expected)
    })
    it('Az 1 bemenetre true', () => {
        const expected = true
        const actual = isValidInput(1)
        expect(actual).toBe(expected)
    })
    it('A abc bemenetre false', () => {
        const expected = false
        const actual = isValidInput('abc')
        expect(actual).toBe(expected)
    })
    it('A 0 bemenetre false', () => {
        const expected = false
        const actual = isValidInput(0)
        expect(actual).toBe(expected)
    })
    it('A -4 bemenetre false', () => {
        const expected = false
        const actual = isValidInput(-4)
        expect(actual).toBe(expected)
    })
    it('A 35a bemenetre false', () => {
        const expected = false
        const actual = isValidInput('35a')
        expect(actual).toBe(expected)
    })
})
