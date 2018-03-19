test('null', () => {
  const n = null

  // toBeNull() matches only null
  expect(n).toBeNull()
  // toBeUndefined() matches only undefined
  // toBeDefined() is the opposite of toBeUndefined
  expect(n).toBeDefined()
  // toBeTruthy() matches anything that an if statement treats as true
  // toBeFalsy() matches anything that an if statement treats as false
  expect(n).toBeFalsy()

})


test('zero', () => {
  const z = 0

  expect(z).toBeDefined()
  expect(z).toBeFalsy()
})