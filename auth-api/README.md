# Authentication & Authorization API

This project is a Node.js application that implements authentication and authorization features using JWT (JSON Web Tokens) and MongoDB. It provides endpoints for user registration, login, and profile management, along with middleware for protecting routes based on user roles.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Postman Collection](#postman-collection)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd auth-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth_api
   JWT_SECRET=your_super_secret
   JWT_EXPIRES_IN=7d
   ```

## Environment Variables

- `PORT`: The port on which the server will run.
- `MONGO_URI`: The MongoDB connection string.
- `JWT_SECRET`: The secret key used for signing JWT tokens.
- `JWT_EXPIRES_IN`: The expiration time for JWT tokens.

## Running the Application

To start the server, run the following command:
```
npm run dev
```
The server will be running on `http://localhost:5000`.

## API Endpoints

### Authentication Routes

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.
- **GET** `/api/auth/profile`: Get the profile of the logged-in user (protected route).

### User Routes

- **GET** `/api/users/dashboard`: Access the user dashboard (protected route).
- **GET** `/api/users/admin`: Access the admin dashboard (protected route, restricted to admin users).

## Testing

To run the tests, use the following command:
```
npm test
```

## Postman Collection

A Postman collection is provided in the `PostmanUI.md` file, which includes step-by-step instructions for testing the API endpoints.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

How to POST and GET Data via API

Endpoint: POST /api/auth/register
Body:
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}

Login (POST)
Endpoint: POST /api/auth/login
Body:
{
  "email": "test@example.com",
  "password": "password123"
}

Get Profile (GET)
Endpoint: GET /api/auth/profile
Headers: Authorization: Bearer <token>
Get Dashboard (GET)
Endpoint: GET /api/users/dashboard
Headers: Authorization: Bearer <token>
Get Admin (GET)
Endpoint: GET /api/users/admin
Headers: Authorization: Bearer <admin-token>