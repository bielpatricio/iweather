import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@__tests__/utils/customRender'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { Dashboard } from '@screens/Dashboard'
import { api } from '@services/api'

describe('Screen: Dashboard', () => {
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: -27.2108,
      longitude: -49.6446,
    }

    await saveStorageCity(city)
  })

  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i))
    expect(cityName).toBeTruthy()
  })

  it('should be show another selected weather city', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    const cityName = 'São Paulo'

    await waitFor(() =>
      act(() => {
        const searchInput = screen.getByTestId('search-input')
        fireEvent.changeText(searchInput, cityName)
      }),
    )

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }))
      }),
    )

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  })
})
