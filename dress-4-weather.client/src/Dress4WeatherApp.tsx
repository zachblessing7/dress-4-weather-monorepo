import { Weather } from '@/features/weather/Weather';

export function Dress4WeatherApp() {
  return (
    <>
      <div className="Dress4WeatherApp">
        <h1 className="title">Dress4Weather</h1>
        <p className="description">
          Removing decision anxiety/overload for moms
        </p>
      </div>
      <Weather />
    </>
  );
}
