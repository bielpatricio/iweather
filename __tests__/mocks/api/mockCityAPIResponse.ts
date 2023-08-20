import { CityAPIResponse } from '@services/getCityByNameService'

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'São Paulo',
  sys: {
    country: 'BR',
  },
  coord: {
    lon: -46.636108,
    lat: -23.547501,
  },
}
