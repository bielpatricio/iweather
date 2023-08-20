import { CityProps } from '@services/getCityByNameService'
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './cityStorage'

const newCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  longitude: -46.636108,
  latitude: -23.547501,
}

describe('Storage: CityStorage', () => {
  it('should be return null when do not have a city storage', async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it('should be return city storage', async () => {
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it('should be return null when remove a city storage', async () => {
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity)

    await removeStorageCity()

    const newResponse = await getStorageCity()

    expect(newResponse).toBeNull()
  })
})
