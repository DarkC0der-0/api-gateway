# API Gateway for Microservices

This project provides an API Gateway using Node.js with Express, PostgreSQL, Docker, and Kubernetes. It includes features like API routing, rate limiting, authentication, and logging.

## Features

- API Routing
- Rate Limiting
- Authentication
- Logging

## Getting Started

### Prerequisites

- Node.js
- Docker
- Kubernetes

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/DarkC0der-0/api-gateway.git
   cd api-gateway
2. Install the dependencies:
   ```sh
   npm install

### Environment Variables

- Create a .env file in the root directory of the project and add the following environment variables:
  ```makefile
  DB_USER=your-db-user
  DB_PASSWORD=your-db-password
  DB_NAME=your-db-name
  DB_HOST=your-db-host
  DB_PORT=your-db-port
  JWT_SECRET=your-secret
  PORT=3000


### Running with Docker

1. Build the Docker image:
   ```sh
   docker build -t api-gateway .
2. Run the Docker containers:
   ```sh
   docker-compose up

### Running with Docker

1. Apply the Kubernetes configurations:
   ```sh
   kubectl apply -f kubernetes/deployment.yaml
   kubectl apply -f kubernetes/service.yaml

###Usage

- Access the API Gateway at http://localhost:3000
- Use the /login endpoint to authenticate and receive a token.
- Use the token in the Authorization header for subsequent requests.

###Contributing

Contributions are welcome! Please open an issue or submit a pull request.

###License

This project is licensed under the MIT License.


