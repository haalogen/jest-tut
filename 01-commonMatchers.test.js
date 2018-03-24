const sum = require('./sum')

// toBe() uses Object.is to test exact equality
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// toEqual() recursively checks every field of an object or array.
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2

  expect(data).toEqual({ one: 1, two: 2 })
})

// Test for the opposite of a matcher
test('adding positive numbers is not zero', () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toEqual(0)
    }
  }
})
