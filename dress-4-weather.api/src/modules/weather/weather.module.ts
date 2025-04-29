import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from '@modules/weather/weather.service';
import { WeatherController } from '@modules/weather/weather.controller';

@Module({
  imports: [HttpModule],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
