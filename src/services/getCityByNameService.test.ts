import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('Service: getCityByNameService', () => {
  it('should be return the city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockCityAPIResponse })

    const response = await getCityByNameService('São Paulo')

    expect(response.length).toBeGreaterThan(0)
    expect(response[0]).toHaveProperty('id')
  })
})
