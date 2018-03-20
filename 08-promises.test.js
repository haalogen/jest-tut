// Some function that returns a Promise
function fetchData () {
  const data = 'peanut butter'
  return new Promise((resolve, reject) => {
    // Fake async data fetching
    setTimeout(() => resolve(data), 100)
    // setTimeout(() => reject('No internet connection'), 100)
  })
}


test('the data is peanut butter', () => {
  // Sets number of assertions in test
  // Useful when test async code
  expect.assertions(1)

  // Just return a promise from your test,
  // and Jest will wait for that promise to resolve.
  // If the promise is rejected, the test will automatically fail.
  return fetchData()
  .then(data => {
    expect(data).toEqual('peanut butter')
  })
}, 5000)