import { render, screen } from '@testing-library/react-native'

import { NextDays } from '.'
import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '19/07',
            min: '18°c',
            max: '26°c',
            icon: clearDay,
            weather: 'Chuva fraca',
          },
          {
            day: '20/07',
            min: '2°c',
            max: '8°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '21/07',
            min: '16°c',
            max: '24°c',
            icon: clearDay,
            weather: 'Nublado',
          },
        ]}
      />,
    )

    expect(screen.getByText('19/07')).toBeTruthy()
  })
})
