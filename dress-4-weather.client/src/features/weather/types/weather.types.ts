export interface WeatherDescription {
  main: string;
  description: string;
}

export interface WeatherData {
  date: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  description: WeatherDescription[];
}

export interface WeatherDataDto {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: WeatherDescription[];
}

export interface GroupedWeatherData {
  date: string;
  amForeCast: WeatherData;
  pmForeCast: WeatherData;
}
