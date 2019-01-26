import { convertToUnit } from '@/utils/helpers'

describe('helpers Unit test', () => {
  it('should return proper value in convertToUnit', () => {
    expect(convertToUnit(undefined)).toBe(undefined)
    expect(convertToUnit(null)).toBe(undefined)
    expect(convertToUnit('')).toBe(undefined)

    expect(convertToUnit(0)).toBe('0px')
    expect(convertToUnit(3)).toBe('3px')
    expect(convertToUnit(3.14)).toBe('3.14px')

    expect(convertToUnit(0, 'em')).toBe('0em')
    expect(convertToUnit(3, 'em')).toBe('3em')
    expect(convertToUnit(3.14, 'em')).toBe('3.14em')

    expect(convertToUnit('0vw')).toBe('0vw')
    expect(convertToUnit('3vw')).toBe('3vw')
    expect(convertToUnit('3.14vw')).toBe('3.14vw')

    expect(convertToUnit('foo')).toBe('foo')
  })
})
