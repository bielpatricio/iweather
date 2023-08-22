import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'
import { fireEvent, render, screen } from '@__tests__/utils/customRender'
import { Search } from '@screens/Search'
import { api } from '@services/api'
import { waitFor } from '@testing-library/react-native'

describe('Screen: Search', () => {
  it('should be show city option', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })
    render(<Search />)

    const searchInput = screen.getByTestId('search-input')
    fireEvent.changeText(searchInput, 'São Paulo')

    const option = await waitFor(() => screen.findByText(/São Paulo/i))
    expect(option).toBeTruthy()
  })
})
