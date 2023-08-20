import { getNextDays } from './getNextDays'

describe('Function: getNextDays', () => {
  it('should be return the next 5 days', () => {
    const days = getNextDays()
    expect(days).toHaveLength(5)
  })
})
