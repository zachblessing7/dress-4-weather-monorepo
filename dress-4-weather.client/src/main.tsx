import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Dress4WeatherApp } from './Dress4WeatherApp.tsx';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dress4WeatherApp />
  </StrictMode>
);
