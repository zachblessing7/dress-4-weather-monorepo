import { WeatherCard } from './WeatherCard';
import { GroupedWeatherData } from '@/features/weather/types/weather.types';

interface WeatherGridProps {
  weatherData: GroupedWeatherData[];
}

export function WeatherGrid({ weatherData }: WeatherGridProps) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-1 g-4">
        {weatherData.map((day, index) => (
          <div
            key={index}
            className="col d-flex justify-content-center flex-row gap-3"
          >
            <WeatherCard day={day.amForeCast} period="AM" />
            <WeatherCard day={day.pmForeCast} period="PM" />
          </div>
        ))}
      </div>
    </div>
  );
}
