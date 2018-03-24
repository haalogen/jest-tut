//
// Custom Matchers
//

const mockFunc = jest.fn()

it('', () => {
  mockFunc(1, 'a')
  mockFunc()
  mockFunc(2, 'b')

  // The mock function was called at least once
  expect(mockFunc).toBeCalled()

  // The mock function was called at least once with the specified args
  expect(mockFunc).toBeCalledWith(1, 'a')
  expect(mockFunc).toBeCalledWith()

  // The last call to the mock function was called with the specified args
  expect(mockFunc).lastCalledWith(2, 'b')
})
