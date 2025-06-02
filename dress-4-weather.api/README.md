# Dress 4 Weather - API

NestJS backend providing weather data and outfit suggestions.

## Development

```bash
yarn start:dev    # Development mode
yarn start:prod   # Production mode
yarn test         # Run tests
yarn test:e2e     # End-to-end tests
```

## API Endpoints

- `GET /weather/:location` - Get weather data
- `POST /outfit-suggestions` - Get outfit recommendations

## Database

Uses MongoDB with the following collections:

- `outfitSuggestions` - Outfit templates
- `weatherData` - Cached weather information

## Environment Variables

```bash
WEATHER_API_KEY="example_api_key"
WEATHER_API_BASE_URL="https://api.openweathermap.org"
MONGODB_URI="example_mongodb_uri"
```
