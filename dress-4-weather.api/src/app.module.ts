import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './modules/weather/weather.module';
import { OutfitSuggestionsModule } from './modules/outfit-suggestions/outfit-suggestions.module';
import { RedisModule } from './modules/redis/redis.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGODB_URI') ||
          'mongodb://localhost:27017/dress_4_weather_db',
      }),
      inject: [ConfigService],
    }),
    // RedisModule, // Import the Redis module
    WeatherModule,
    OutfitSuggestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
