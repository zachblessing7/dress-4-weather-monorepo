import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  /**
   * Weather Service
   */
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getWeatherData(lat: number, lon: number): Promise<any> {
    const apiKey = this.configService.get<string>('WEATHER_API_KEY');
    const apiUrl = this.configService.get<string>('WEATHER_API_BASE_URL');
    console.log('apiKey: ', apiKey, 'apiUrl: ', apiUrl);
    const remainingUrl = `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    const requestUrl = apiUrl + remainingUrl;

    const response = await firstValueFrom(this.httpService.get(requestUrl));
    console.log('getWeatherData Response from weather.service:', response.data);
    return response.data;
  }
}
