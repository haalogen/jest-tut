// Some function that does some async job
function fetchData (callback) {
  // Fake async data fetching
  const data = 'peanut butter'
  setTimeout(() => callback(data), 1000)
}


// Jest will wait for callback `done` to finish
// before completion of test
test('the data is peanut butter', (done) => {
  function callback (data) {
    expect(data).toEqual('peanut butter')
    // !!!
    done()
  }

  fetchData(callback)
}, 5000)