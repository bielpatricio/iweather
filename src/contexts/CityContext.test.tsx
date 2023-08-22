import { useCity } from '@hooks/useCity'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { CityProvider } from './CityContext'

describe('Context: CityContext', () => {
  it('should be able change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: '1',
          name: 'São Paulo',
          latitude: -23.5489,
          longitude: -46.6388,
        }),
      ),
    )

    expect(result.current.city?.name).toBe('São Paulo')
  })
})
