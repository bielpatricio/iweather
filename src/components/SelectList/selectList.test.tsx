import { fireEvent, render, screen } from '@testing-library/react-native'
import { SelectList } from '.'

describe('Component: SelectList', () => {
  it('should be return city details selected', () => {
    const data = [
      {
        id: '1',
        name: 'São Paulo',
        latitude: -23.5489,
        longitude: -46.6388,
      },
      {
        id: '2',
        name: 'Campinas',
        latitude: -22.9053,
        longitude: -47.0608,
      },
    ]

    const onPress = jest.fn()

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)

    const selectedCity = screen.getByText(/são/i)
    // const selectedCity = screen.getByText('são', { exact: false })

    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[0])
  })

  it('not should be show options when data props is empty', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)

    const options = screen.getByTestId('options')

    expect(options.children).toHaveLength(0)
  })
})
