# Todo List Backend Implementation Plan

## Overview
Create a Node.js Express backend API to provide full CRUD functionality for the React todo list frontend application.

## Technical Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Data Storage**: JSON file (for simplicity, can be upgraded to database later)
- **Middleware**: CORS, express.json()
- **Port**: 3001 (to avoid conflict with frontend on 3000/5173)

## API Endpoints

### 1. GET /api/todos
- **Purpose**: Retrieve all todos
- **Method**: GET
- **Response**: Array of todo objects
- **Status Codes**: 200 (success)

### 2. POST /api/todos
- **Purpose**: Create a new todo
- **Method**: POST
- **Body**: `{ "text": "Todo text" }`
- **Response**: Created todo object with generated ID
- **Status Codes**: 201 (created), 400 (bad request)

### 3. PUT /api/todos/:id
- **Purpose**: Update an existing todo (text or completion status)
- **Method**: PUT
- **Body**: `{ "text": "Updated text", "completed": true/false }`
- **Response**: Updated todo object
- **Status Codes**: 200 (success), 404 (not found), 400 (bad request)

### 4. DELETE /api/todos/:id
- **Purpose**: Delete a specific todo
- **Method**: DELETE
- **Response**: Success message
- **Status Codes**: 200 (success), 404 (not found)

## Data Model
```javascript
{
  id: number,        // Unique identifier (timestamp-based)
  text: string,      // Todo description
  completed: boolean // Completion status
}
```

## File Structure
```
todo-list-backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── data/
│   └── todos.json     # Data persistence file
├── routes/
│   └── todos.js       # Todo routes
└── README.md          # API documentation
```

## Implementation Steps
1. Initialize package.json with required dependencies
2. Create main server.js with Express setup
3. Implement data persistence layer (JSON file operations)
4. Create todo routes with full CRUD operations
5. Add CORS middleware for frontend integration
6. Add error handling and validation
7. Test all endpoints
8. Create documentation

## Dependencies
- `express`: Web framework
- `cors`: Cross-origin resource sharing
- `fs/promises`: File system operations (built-in)
- `path`: Path utilities (built-in)

## Error Handling
- Validate request bodies
- Handle file I/O errors
- Return appropriate HTTP status codes
- Provide meaningful error messages

## Future Enhancements
- Database integration (MongoDB, PostgreSQL)
- User authentication
- Input validation with middleware
- Rate limiting
- Logging