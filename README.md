# task-manager-app-aslam

A full-stack task management application built with React.js (frontend) and Node.js/Express.js with MongoDB (backend). Users can register, log in, create, update, delete tasks, and filter them by status. This app utilizes JWT for authentication and supports CRUD operations for tasks.

Setup Instructions
1. Frontend Setup (React.js)
Prerequisites:
Node.js (v14 or above)

npm or yarn

Steps:
Clone the repository:

git clone <repository-url>
cd task-manager-app/frontend

Install dependencies:
npm install

Create a .env file in the root of the frontend directory and add the backend API URL:
REACT_APP_API_URL=http://localhost:5000/api

Run the development server:
npm start
The frontend will be available at http://localhost:3000.

2. Backend Setup (Node.js/Express.js)
Prerequisites:
Node.js (v14 or above)
MongoDB running locally or through a cloud provider (MongoDB Atlas)

Steps:
Clone the repository:

git clone <repository-url>
cd task-manager-app/backend

Install dependencies:
npm install

Create a .env file in the root of the backend directory and add your MongoDB connection string and JWT secret:

MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret_key

Run the backend server:
npm start
The backend will be available at http://localhost:5000.

Technical Choices and Architecture
Frontend:

React.js: Used for building the user interface, handling state, and making API requests.
Axios: Used for making HTTP requests to the backend API.
React Router: Used for routing between the different pages of the application.
Standard CSS

Backend:

Node.js: JavaScript runtime used for building the backend API.
Express.js: Web framework for Node.js, used to handle API routes and middleware.
JWT (JSON Web Tokens): Used for user authentication, allowing secure user sessions.
MongoDB: NoSQL database used to store user and task data.
Mongoose: ODM for MongoDB, used to define schemas and interact with the database.

Authentication:
JWT tokens are used for authenticating users. Upon logging in or registering, the backend sends a token that is stored in localStorage on the frontend. This token is sent with every request to protect routes requiring authentication.

Database Schema
Users Collection
_id: Unique identifier for the user (MongoDB ObjectId)
email: User's email (string, unique)
password: User's hashed password (string)
createdAt: Timestamp when the user was created (Date)

Tasks Collection
_id: Unique identifier for the task (MongoDB ObjectId)
title: Title of the task (string)
description: Description of the task (string)
status: Task status (complete or incomplete) (string)
priority: Task priority (low, medium, high) (string)
createdAt: Timestamp when the task was created (Date)
userId: User ID of the task creator (MongoDB ObjectId, references the Users collection)

How to Run the Application Locally
1. Clone the repository:

git clone <repository-url>
cd task-manager-app

2. Setup the backend:
Navigate to the backend directory:

cd backend

Install the backend dependencies:
npm install

Create a .env file with the necessary configurations:
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret_key

Run the backend:
npm start

3. Setup the frontend:
Navigate to the frontend directory:

cd ../frontend

Install the frontend dependencies:
npm install

Create a .env file with the API URL:
REACT_APP_API_URL=http://localhost:5000/api

Run the frontend:
npm start

4. Open the application:
The frontend will be available at http://localhost:3000.
The backend will be available at http://localhost:5000.

Additional Notes:
Ensure that MongoDB is running locally or connect to a MongoDB Atlas cluster.

Register & login using these credentials to see seeded data or you create your own.
user:
email: user
password: user123

admin:
email: admin
password: admin123