# Football Match Management API
Welcome to the repository of the Football Match Management API! This project is designed to manage football matches, teams, and leaderboards using Node.js, Express.js, TypeScript, MySQL, and Docker.

## Technologies Used
This project leverages various technologies to provide effective functionality. The key technologies used include:

- Node.js: The JavaScript runtime platform powering the server application.
- TypeScript: A superset of JavaScript that adds static typing to improve code quality.
- Express.js: A Node.js web framework simplifying RESTful API creation.
- MySQL: A powerful open-source relational database for data storage.
- Docker: Containerization technology to simplify deployment and scaling.
- JWT (JSON Web Tokens): Ensuring secure authentication for authorized users.
- Mocha: A popular JavaScript test framework for comprehensive API testing.
- 
## Key Features
- Authentication: Protects sensitive routes with JWT authentication, ensuring authorized access.
- CRUD Operations: Supports Create, Read, Update, and Delete operations for football matches and teams.
- Filtering: Enables filtering of matches based on their in-progress status or teams' performance.
- Leaderboards: Provides rankings of teams based on points, goals, and matches played.
- Error Handling: Robust error handling to provide meaningful error messages and status codes.

##API Endpoints
- POST /login: Authenticate and receive a JWT token.
- GET /matches: Retrieve a list of matches.
- GET /matches?inProgress=true: Filter in-progress matches.
- GET /matches?inProgress=false: Filter finished matches.
- PATCH /matches/:id/finish: Finish a match.
- PATCH /matches/:id: Update a match's score.
- POST /matches: Create a new match.
- GET /leaderboard/home: Get home team leaderboards.
- GET /leaderboard/away: Get away team leaderboards.
- GET /leaderboard: Get overall team leaderboards.
- 
##Error Handling
HTTP status codes and descriptive error messages are used for error handling.
Proper validation of requests and data ensures data integrity.

## Authentication
Authentication is based on JWT (JSON Web Tokens).
To access protected routes, include the JWT token in the Authorization header.
