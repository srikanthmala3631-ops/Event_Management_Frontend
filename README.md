# Event Management System — Frontend

A React web application for browsing events, creating an account, signing in, registering for events, and viewing registrations. Event management screens are also included.

The frontend uses React 18, React Router, and Axios. It communicates with the [Event Management Backend](https://github.com/srikanthmala3631-ops/Event_Management_Backend), a Spring Boot REST API.

## Requirements

- Node.js and npm
- The backend running at `http://localhost:8080`

## Run locally

1. Clone this repository and open its directory:

   ```bash
   git clone https://github.com/srikanthmala3631-ops/Event_Management_Frontend.git
   cd Event_Management_Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000).

The API base URL is currently `http://localhost:8080/api`. To point the app at a backend running elsewhere, update `baseURL` in [`src/api/api.js`](src/api/api.js).

## Application routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/events` | Browse events |
| `/events/:id` | View event details and register |
| `/register` | Create an account |
| `/login` | Sign in |
| `/my-registrations` | View your event registrations |
| `/add-event` | Add an event |
| `/admin` | Admin dashboard |

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Run tests in watch mode |
| `npm run build` | Create a production build in `build/` |

## Notes

- Start the backend before using features that load or update event data.
- The backend currently implements basic email/password checks without Spring Security or token-based authentication. Do not treat the current login flow or admin screens as production-grade access control.
