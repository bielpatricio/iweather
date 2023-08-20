import { render, screen } from '@testing-library/react-native'
import { Input } from '.'

describe('Component: Input', () => {
  it('should be render without activity indicator if isLoading props is undefined', () => {
    render(<Input />)

    const ActivityIndicator = screen.queryByTestId('activity-indicator')

    expect(ActivityIndicator).toBeNull()
  })

  it('should be render with activity indicator if isLoading props is true', () => {
    render(<Input isLoading />)

    const ActivityIndicator = screen.getByTestId('activity-indicator')

    expect(ActivityIndicator).toBeTruthy()
  })
})
