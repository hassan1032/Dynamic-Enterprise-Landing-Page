# Dynamic Enterprise Landing Page

A full-stack landing page developed as part of a Full Stack Web Development assignment.

The project includes a Next.js frontend and a Node.js/Express backend with MongoDB. Landing page content such as the hero section and metrics is stored in MongoDB and can be updated through the admin panel.

## Live Deployments

* **Live Website**: [https://eminenture-frontend.onrender.com](https://eminenture-frontend.onrender.com)
* **Admin Panel**: [https://eminenture-frontend.onrender.com/admin](https://eminenture-frontend.onrender.com/admin)
* **Backend API**: [https://eminenture-backend-db4y.onrender.com/api/content](https://eminenture-backend-db4y.onrender.com/api/content)

## Features

* Responsive enterprise landing page
* Dynamic hero content from MongoDB
* Dynamic stats/metrics section
* Node.js and Express REST API
* MongoDB with Mongoose
* Next.js App Router
* Tailwind CSS
* Simple admin panel for updating landing page content
* Responsive layout for desktop, tablet and mobile

## Project Structure

```text
Dynamic Enterprise Landing Page/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contentController.js
│   ├── models/
│   │   └── Content.js
│   ├── routes/
│   │   └── contentRoutes.js
│   ├── scripts/
│   │   └── seedContent.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── admin/
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── globals.css
    │   │
    │   └── components/
    │       ├── Navbar.tsx
    │       ├── Hero.tsx
    │       ├── Stats.tsx
    │       ├── Capabilities.tsx
    │       └── Footer.tsx
    │
    ├── .env.local
    └── package.json
```

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Getting Started

### 1. Backend Setup

Open a terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Seed the initial landing page content:

```bash
npm run seed
```

Start the backend:

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:5000
```

For production-style start:

```bash
npm start
```

### 2. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Admin panel:

```text
http://localhost:3000/admin
```

## API Endpoints

| Method | Endpoint       | Description                              |
| ------ | -------------- | ---------------------------------------- |
| GET    | `/api/content` | Fetch the current landing page content   |
| PUT    | `/api/content` | Update the existing landing page content |

The content includes:

* Hero headline
* Hero subtitle
* Primary CTA
* Secondary CTA
* Stats and metrics

## Admin Panel

The `/admin` page provides a simple interface for updating the landing page content.

The update flow is:

```text
Admin Panel
    ↓
PUT /api/content
    ↓
Express Controller
    ↓
MongoDB
    ↓
Updated Landing Page Content
```

After updating the content, reload the homepage to see the latest values fetched from the backend.

## Dynamic Content

The homepage fetches the landing page content from the Express API using a Next.js Server Component.

The homepage uses:

```js
fetch(apiUrl, {
  cache: "no-store"
})
```

so the latest content is fetched from the backend when the page is requested.

## Notes

* The admin panel does not include authentication because authentication was not part of the assignment requirements.
* MongoDB credentials should be kept in environment variables and should not be committed to the repository.
* The `.env` and `.env.local` files should be added to `.gitignore`.

## Running the Project

Two terminals are required during local development.

Terminal 1:

```bash
cd backend
npm run dev
```

Terminal 2:

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:3000
```
