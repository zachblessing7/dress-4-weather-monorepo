import { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  date: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  description: Array<{
    main: string;
    description: string;
  }>;
}

export function Weather() {
  const [weatherData, setWeatherData] = useState<Array<WeatherData> | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function mapWeatherData(data: any): Promise<WeatherData> {
    let mappedWeatherData: WeatherData = {
      date: data.dt_txt,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      description: data.weather.map((w: any) => ({
        main: w.main,
        description: w.description,
      })),
    };
    return mappedWeatherData;
  }

  async function handleWeatherData() {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:3000/api/weather', {
        params: {
          lat: 40.7128, // Example latitude (New York City)
          lon: -74.006, // Example longitude (New York City)
        },
      });
      const mappedData = await Promise.all(
        response.data.list.map((item: any) => mapWeatherData(item))
      );
      setWeatherData(mappedData);
      console.log('Weather data:', mappedData);
    } catch (error) {
      setError('Error fetching weather data');
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading Weather data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="Weather">
        <h2 className="title">Weather</h2>
        <p className="description">Weather component</p>
      </div>
      <div className="Weather__content">
        <button onClick={handleWeatherData} disabled={loading}>
          Get Weather Data
        </button>
      </div>
      <div className="Weather__data">
        {weatherData && (
          <div className="Weather__grid">
            {weatherData.map((day: WeatherData, index: number) => (
              <div key={index} className="Weather__card">
                <h3>{new Date(day.date).toLocaleDateString()}</h3>
                <p>Temperature: {day.temp}°F</p>
                <p>Feels like: {day.feels_like}°F</p>
                <p>Min: {day.temp_min}°F</p>
                <p>Max: {day.temp_max}°F</p>
                <p>Humidity: {day.humidity}%</p>
                {day.description.map((desc, i) => (
                  <p key={i}>{desc.description}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
