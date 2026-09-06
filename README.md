# Todo REST API

A simple, clean REST API for managing todos, built with Node.js and Express. Uses an in-memory data store, so it's ready to run instantly — swap in a real database later if needed.

## Features

- Full CRUD operations for todos
- Input validation
- Centralized error handling
- CORS enabled
- Clean, modular project structure

## Project Structure

```
todo-rest-api/
├── src/
│   ├── controllers/
│   │   └── todoController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── todoModel.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd todo-rest-api
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

### Running the App

```bash
# Development (auto-restart on changes)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

Base URL: `/api/todos`

| Method | Endpoint          | Description           |
|--------|-------------------|------------------------|
| GET    | `/api/todos`      | Get all todos          |
| GET    | `/api/todos/:id`  | Get a single todo      |
| POST   | `/api/todos`      | Create a new todo      |
| PUT    | `/api/todos/:id`  | Update an existing todo|
| DELETE | `/api/todos/:id`  | Delete a todo          |

### Request/Response Examples

**Create a todo**

```
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": false
}
```

Response `201 Created`:

```json
{
  "success": true,
  "data": {
    "id": "b1a2c3d4-...",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2026-09-06T10:00:00.000Z",
    "updatedAt": "2026-09-06T10:00:00.000Z"
  }
}
```

**Get all todos**

```
GET /api/todos
```

Response `200 OK`:

```json
{
  "success": true,
  "count": 1,
  "data": [ { "id": "...", "title": "...", "completed": false } ]
}
```

**Update a todo**

```
PUT /api/todos/:id
Content-Type: application/json

{ "completed": true }
```

**Delete a todo**

```
DELETE /api/todos/:id
```

Response: `204 No Content`

## Error Responses

Errors follow a consistent shape:

```json
{
  "success": false,
  "message": "Todo not found"
}
```

## Next Steps / Ideas

- Replace the in-memory store with a real database (MongoDB, PostgreSQL, etc.)
- Add authentication (JWT) and per-user todos
- Add pagination and filtering (`?completed=true`)
- Add automated tests (Jest + Supertest)

## License

MIT
