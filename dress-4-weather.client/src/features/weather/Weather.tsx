import { useState } from 'react';
import { useWeather } from '@/features/weather/hooks/useWeather';
import { WeatherGrid } from '@/features/weather/components/WeatherGrid';
import { OutfitSuggestion } from '@/features/outfitSuggestion/OutfitSuggestion';
import styles from './Weather.module.css';

export function Weather() {
  const { weatherData, loading, error, fetchWeatherData } = useWeather();
  const [showAllData, setShowAllData] = useState(false);

  const firstDayData = weatherData ? [weatherData[0]] : [];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div
            className={`spinner-border ${styles.loadingSpinner} mb-3`}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="fs-5 text-muted">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <div>
            <strong>Weather Error:</strong> {error}
          </div>
        </div>
      </div>
    );
  }

  function handleWeatherData() {
    fetchWeatherData();
  }

  function toggleShowAllData() {
    setShowAllData((prev) => !prev);
  }

  return (
    <div className={styles.weatherContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className="container">
          <div className="text-center">
            <div className={styles.decorativeIcon}>
              <i className="bi bi-cloud-sun"></i>
            </div>
            <h1 className={`${styles.title} display-4 fw-bold`}>
              Weather Forecast
            </h1>
            <hr className={styles.divider} />
            <p className={styles.subtitle}>
              5-day detailed weather forecast with 3-hour intervals
            </p>
            <button
              className={`${styles.refreshButton} btn btn-lg px-4 py-2`}
              onClick={handleWeatherData}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  ></span>
                  Loading...
                </>
              ) : (
                <>
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Refresh Weather Data
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Weather Data Section */}
      {weatherData && (
        <div className="container mb-5 mt-4">
          <div className={`${styles.weatherCard} card shadow-sm border-0 mb-4`}>
            <div className="card-header border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className={`${styles.weatherCardTitle} mb-0`}>
                  <i className="bi bi-calendar3 me-2"></i>
                  Weather Overview
                </h4>
                <button
                  className={`${styles.toggleButton} btn btn-sm`}
                  onClick={toggleShowAllData}
                >
                  <i
                    className={`bi ${showAllData ? 'bi-eye-slash' : 'bi-eye'} me-1`}
                  ></i>
                  {showAllData ? 'Show Less' : 'Show All Data'}
                </button>
              </div>
            </div>
            <div className="card-body p-4">
              <WeatherGrid
                weatherData={showAllData ? weatherData : firstDayData}
              />
            </div>
          </div>
        </div>
      )}

      {/* Outfit Suggestions Section */}
      {firstDayData && firstDayData[0] && (
        <div className="container pb-5">
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className={`${styles.outfitSectionTitle} text-center`}>
                <i className="bi bi-person-check me-2"></i>
                Today's Outfit Suggestions
              </h3>
              <hr className={styles.outfitDivider} />
            </div>
          </div>

          <div className="row g-4">
            {firstDayData[0]?.amForeCast && (
              <div className="col-lg-6">
                <div
                  className={`${styles.outfitCard} ${styles.morningCard} card h-100 shadow-sm border-0`}
                >
                  <div className="card-body p-0">
                    <OutfitSuggestion
                      title="Morning Outfit"
                      weatherData={firstDayData[0].amForeCast}
                    />
                  </div>
                </div>
              </div>
            )}

            {firstDayData[0]?.pmForeCast && (
              <div className="col-lg-6">
                <div
                  className={`${styles.outfitCard} ${styles.eveningCard} card h-100 shadow-sm border-0`}
                >
                  <div className="card-body p-0">
                    <OutfitSuggestion
                      title="Evening Outfit"
                      weatherData={firstDayData[0].pmForeCast}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
