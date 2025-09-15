# Todo List Backend API

A RESTful API built with Node.js and Express.js to provide CRUD functionality for the React todo list frontend.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

3. The API will be available at `http://localhost:3001`

## API Endpoints

### Get All Todos
```
GET /api/todos
```
Returns an array of all todos.

### Create Todo
```
POST /api/todos
Content-Type: application/json

{
  "text": "Your todo text here"
}
```
Creates a new todo and returns the created todo object.

### Update Todo
```
PUT /api/todos/:id
Content-Type: application/json

{
  "text": "Updated todo text",
  "completed": true
}
```
Updates an existing todo. Both `text` and `completed` fields are optional.

### Delete Todo
```
DELETE /api/todos/:id
```
Deletes a todo by ID.

### Health Check
```
GET /api/health
```
Returns server status.

## Data Model

```javascript
{
  id: number,        // Unique identifier (timestamp-based)
  text: string,      // Todo description
  completed: boolean // Completion status
}
```

## Features

- ✅ Full CRUD operations
- ✅ JSON file persistence
- ✅ CORS enabled for frontend integration
- ✅ Input validation and error handling
- ✅ RESTful API design
- ✅ Automatic data directory creation

## Error Responses

All error responses follow this format:
```javascript
{
  "error": "Error message description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

## Data Storage

Todos are stored in `data/todos.json`. The file is automatically created if it doesn't exist.
