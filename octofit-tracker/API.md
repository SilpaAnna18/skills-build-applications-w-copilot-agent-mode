# OctoFit Tracker API Documentation

**Base URL:** `http://localhost:8000/api`

## Overview

The OctoFit Tracker API provides endpoints for managing fitness tracking data including workouts, goals, and user profiles.

## Current Endpoints

### Health Check
Check if the API is running and get database connection status.

```bash
GET /api/health
```

**Response (200 OK):**
```json
{
  "status": "OK",
  "message": "OctoFit Tracker API is running",
  "environment": "development",
  "database": "connected",
  "timestamp": "2026-06-08T06:40:36.000Z"
}
```

### Version
Get API version and description.

```bash
GET /api/version
```

**Response (200 OK):**
```json
{
  "version": "0.0.1",
  "name": "OctoFit Tracker API",
  "description": "A modern multi-tier fitness tracking application"
}
```

## Future Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account

### Workouts
- `POST /api/workouts` - Create workout log
- `GET /api/workouts` - Get user workouts
- `GET /api/workouts/:id` - Get specific workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Goals
- `POST /api/goals` - Create fitness goal
- `GET /api/goals` - Get user goals
- `GET /api/goals/:id` - Get specific goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal

### Statistics
- `GET /api/stats/summary` - Get fitness summary
- `GET /api/stats/progress` - Get progress over time
- `GET /api/stats/achievements` - Get user achievements

## Error Responses

All error responses follow this format:

```json
{
  "error": "Error Type",
  "message": "Human-readable error message"
}
```

### Status Codes
- `200 OK` - Success
- `201 Created` - Resource created
- `400 Bad Request` - Invalid request
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Access denied
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Rate Limiting

Rate limiting will be implemented to prevent abuse. Details TBD.

## Changelog

### v0.0.1
- Initial release
- Health check endpoint
- Version endpoint
