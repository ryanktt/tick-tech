# TickTech Blog Platform

## Description
TickTech is a blog platform focused on technology news, allowing users to read, search, and publish blog posts. The platform features user authentication, an admin panel for post management, and a modern interface built with EJS templates. Posts and users are stored in a MySQL database, with support for tags and user profile photos.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Database:** MySQL (using mysql2)
- **Authentication:** express-session, bcrypt, connect-flash
- **Environment Variables:** dotenv
- **Other:** body-parser, moment, express-mysql-session (optional, commented), nodemon (dev)

## Setup Guide

1. **Clone the repository:**
   ```sh
   git clone <repo_url>
   cd blogwebsite
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file in the root directory with the following (replace with your values):
     ```env
     DB_HOST=your_mysql_host
     DB_USER=your_mysql_user
     DB_PASSWORD=your_mysql_password
     DB_DATABASE=your_database_name
     SESSION_SECRET=your_random_secret
     ```

4. **Database Setup:**
   - On first run, the app will initialize required `users` and `posts` tables automatically.

5. **Run the application:**
   ```sh
   npm start
   ```
   The app should now be available on `http://localhost:3000` (or your configured port).

6. **Available Scripts:**
   - `npm start` — Starts the application using nodemon.

## Features
- User registration and login (with session support)
- Admin panel for creating, editing, and deleting posts
- Public-facing blog feed and individual post pages
- MySQL-backed storage for posts and users
- Profile photos for users
- Tagging and search support
- Modular structure (routes, controllers, models, middleware, views)

---

For more details, refer to the source code and EJS templates in the `views` directory.
