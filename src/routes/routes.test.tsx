import { act, render, screen, waitFor } from '@__tests__/utils/customRender'
import { Routes } from '.'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { api } from '@services/api'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'

describe('Routes', () => {
  it('should be render search screen when not city selected', async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.getByText(/^escolha um local/i))

    expect(title).toBeTruthy()
  })

  it('should be render dashboard screen when city selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    const city = {
      id: '1',
      name: 'São Paulo',
      latitude: -23.5489,
      longitude: -46.6388,
    }

    await saveStorageCity(city)

    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(city.name)

    expect(title).toBeTruthy()
  })
})
