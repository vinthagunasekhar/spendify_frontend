# Spendify Frontend

Frontend application for Spendify.

## API Integration

Backend API endpoints are available at:
- Development: http://localhost:8000/api/v1
- API Documentation: http://localhost:8000/docs

### Available Endpoints:
More endpoints will be added as they are developed by frontend team.

## Development

1. Clone the repository
2. Copy .env.example to .env and update API URL if needed
3. Install dependencies
4. Start development server

## Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

## Branch Strategy

- Protected main branch
- Create feature branches from main
- Submit PRs for review
- Branches naming convention:
  - Features: `feature/name`
  - Bugs: `bugfix/description`
  - Hotfix: `hotfix/description`



## Backend Communication

The frontend communicates with the Spendify backend API only. Direct database access is not available or needed from the frontend. All data operations must go through the API endpoints.

### Development Setup

1. Ensure the backend API is running on `http://localhost:8000`
2. Set up your `.env` file with proper API configuration
3. All API calls should use the `api` service to ensure consistent configuration

### Production Considerations

1. Update `REACT_APP_API_BASE_URL` to production API URL
2. Enable HTTPS
3. Implement proper error handling
4. Use production-ready environment variables