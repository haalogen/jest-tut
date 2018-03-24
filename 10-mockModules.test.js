//
// Mocking Modules
//

// Suppose we have a class that fetches users from our API using `axios`:
import axios from 'axios'
import { Users } from './Users'

jest.mock('axios')

it('should fetch users', () => {
  const resp = { data: [{ name: 'Bob' }] }

  axios.get.mockResolvedValue(resp)
  // or you could use the follwing depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data))
})
