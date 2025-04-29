import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from '@modules/weather/weather.service';

@Controller('weather')
export class WeatherController {
  /**
   *
   */
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
  ): Promise<any> {
    const weatherData = await this.weatherService.getWeatherData(lat, lon);
    console.log(
      'getWeather -> weatherData from weather.controller',
      weatherData,
    );
    return weatherData;
  }
}
