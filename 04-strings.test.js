test('find substrings "ea" in "team"', () => {
  expect('team').toMatch('ea')
  expect('team').toMatch(/ea/)
  expect('team').not.toMatch(/E/)
  expect('team').toMatch(/\w/)
})
