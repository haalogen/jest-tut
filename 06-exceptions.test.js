function compileCode() {
  throw new Error('cannot find compiler')
}

test('compiling goes as expected', () => {
  expect(compileCode).toThrow()
  expect(compileCode).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(compileCode).toThrow(/compiler/)
})
