import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './modules/weather/weather.module';
import { OutfitSuggestionModule } from './modules/outfit-suggestion/outfit-suggestion.module';
import { RedisModule } from './modules/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    RedisModule, // Import the Redis module
    WeatherModule,
    OutfitSuggestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}