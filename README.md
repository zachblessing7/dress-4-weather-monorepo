# Dress 4 Weather - Monorepo

A full-stack weather-based outfit suggestion application built with React and NestJS. This project is still a work in progress focusing on solving a real world problem - My wife picking out an outfit for our son everyday.

## Projects

- **`dress-4-weather.client`** - React frontend with TypeScript and Vite
- **`dress-4-weather.api`** - NestJS backend API

## Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm
- MongoDB
- Redis

### Installation

```bash
# Install dependencies for all projects
yarn install

# Or install individually
cd dress-4-weather.client && yarn install
cd dress-4-weather.api && yarn install
```

### Development

```bash
# Start both frontend and backend concurrently
yarn dev

# Or start individually
yarn dev:client  # Frontend on http://localhost:5173
yarn dev:api     # Backend on http://localhost:3000
```

## Architecture

```
├── dress-4-weather.client/     # React frontend
├── dress-4-weather.api/        # NestJS backend
├── shared/                     # Shared types/utilities (if any)
├── package.json                # Root package.json
└── README.md                   # This file
```

## Features

- Real-time weather data integration
- AI-powered outfit suggestions
- Weather-specific recommendations
- Responsive design

## Contributing

See individual project READMEs for specific development guidelines.

## License

MIT License
