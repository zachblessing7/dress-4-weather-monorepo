import { WeatherData } from '@/features/weather/types/weather.types';
import styles from './WeatherCard.module.css';

interface WeatherCardProps {
  day: WeatherData;
  period: 'AM' | 'PM';
}

export function WeatherCard({ day, period }: WeatherCardProps) {
  return (
    <div className={`${styles.weatherCard} card text-center m-2`}>
      <div className={`${styles.weatherCardBody} card-body`}>
        <h5 className={`${styles.weatherCardHeader} card-header fw-bold`}>
          {day.date} - {period}
        </h5>
        <div className={`${styles.weatherCardText} card-text`}>
          <p>Temperature: {Math.round(day.temp)}°F</p>
          <p>Low: {Math.round(day.temp_min)}°F</p>
          <p>High: {Math.round(day.temp_max)}°F</p>
          <p>Humidity: {day.humidity}%</p>
          {day.description.map((item, i) => (
            <p key={i} className={`${styles.weatherCardFooter} fw-bold`}>
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
