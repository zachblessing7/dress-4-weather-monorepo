import { useWeather } from '@/features/weather/hooks/useWeather';
import { WeatherGrid } from '@/features/weather/components/WeatherGrid';

export function Weather() {
  const { weatherData, loading, error, fetchWeatherData } = useWeather();
  if (loading) return <div>Loading Weather data...</div>;
  if (error)
    return <div>There was an error with loading the Weather Data: {error}</div>;

  function handleWeatherData() {
    fetchWeatherData();
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col text-center">
            <div className="display-6">Weather Forcast - 3hr - Daily</div>
            <p className="lead text-muted">5-day weather forecast</p>
          </div>
          <div className="row mb-4">
            <div className="col text-center">
              <button
                className="btn btn-primary"
                onClick={handleWeatherData}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Get Weather Data'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        {weatherData && <WeatherGrid weatherData={weatherData} />}
      </div>
    </div>
  );
}
