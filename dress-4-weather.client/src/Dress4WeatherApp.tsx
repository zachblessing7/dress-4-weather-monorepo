import { PageTitle } from '@/features/common/components/PageTitle';
import { Weather } from '@/features/weather/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Dress4WeatherApp() {
  return (
    <div className="min-vh-100 bg-info bg-opacity-25 d-flex flex-column">
      <PageTitle />
      <Weather />
    </div>
  );
}
