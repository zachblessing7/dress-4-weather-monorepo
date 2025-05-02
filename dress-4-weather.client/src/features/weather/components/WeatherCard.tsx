import { WeatherData } from '@/features/weather/types/weather.types';

interface WeatherCardProps {
  day: WeatherData;
  period: 'AM' | 'PM';
}

export function WeatherCard({ day, period }: WeatherCardProps) {
  return (
    <div className="card text-center m-2" style={{ width: '25rem' }}>
      <div className="card-body">
        <h5 className="card-header fw-bold">
          {day.date} - {period}
        </h5>
        <div className="card-text">
          <p>Temperature: {Math.round(day.temp)}°F</p>
          <p>Low: {Math.round(day.temp_min)}°F</p>
          <p>High: {Math.round(day.temp_max)}°F</p>
          <p>Humidity: {day.humidity}%</p>
          {day.description.map((item, i) => (
            <p key={i} className="card-footer fw-bold">
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
