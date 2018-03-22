// A function we want to test
// It should invoke `callback` for each item
function forEach (items, callback) {

  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}


it('', () => {
  // To test this function, we can use a mock function,
  // and inspect the mock's state to ensure
  // the callback is invoked as expected.
  const mockCallback = jest.fn()
  forEach([0, 1], mockCallback)

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // mockCallback.mock -- data about how function was called
  // { calls: [ [ 0 ], [ 1 ] ],
  // instances: [ undefined, undefined ],
  // timestamps: [ 1521748871523, 1521748871523 ] }
})


//
// `.mock` property
//

it('', () => {
  // The .mock property also tracks the value of `this`
  // for each call, so it is possible to inspect this as well:
  const myMock = jest.fn()

  const a = new myMock()
  const b = {b: 'b'}
  const bound = myMock.bind(b)
  bound()

  expect(myMock.mock.instances[1].b).toEqual('b')

  // console.log(myMock.mock.instances)
})


//
// Mock Return Values
//

it('', () => {
  const myMock = jest.fn()

  // > undefined
  // console.log(myMock())

  // Mock functions can also be used to inject test values
  // into your code during a test:
  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true)

  // > 10, 'x', true, true, true
  // console.log(myMock(), myMock(), myMock(), myMock(), myMock());
})


it('', () => {
  const filterTestFn = jest.fn()

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)

  const result = [11, 12].filter(filterTestFn)

  // > [11]
  // console.log(result)

  // > [ [ 11, 0, [ 11, 12 ] ], [ 12, 1, [ 11, 12 ] ] ]
  // console.log(filterTestFn.mock.calls)
})
