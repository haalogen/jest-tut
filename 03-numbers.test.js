test('2 + 3', () => {
  const value = 2 + 3

  expect(value).toBeGreaterThan(4)
  expect(value).toBeGreaterThanOrEqual(4.5)
  expect(value).toBeLessThan(6.3)
  expect(value).toBeLessThanOrEqual(6.3)
})

test('Add float numbers', () => {
  const value = 0.1 + 0.2

  // This won't work because of rounding error
  // expect(value).toBe(0.3)
  // This works
  expect(value).toBeCloseTo(0.3)
})
