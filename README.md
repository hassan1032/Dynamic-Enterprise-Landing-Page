# Dynamic Enterprise Landing Page (Eminenture Assignment)

A high-performance full-stack web application designed as an alternative homepage for **Eminenture.com**, combining high-impact typography inspired by **Cvent** with structural grid layouts inspired by **Infosys / Concentrix**.

The application features a real-time **Node.js/Express + MongoDB** backend connected to a **Next.js (App Router)** dynamic frontend with an **Admin Control Panel (`/admin`)**.

---

## 🌟 Key Features

- **Dynamic Content Engine**: All hero text, titles, subtitles, CTAs, and enterprise metrics are fetched live from MongoDB via Express REST API (`GET /api/content`).
- **Real-Time Admin Management (`/admin`)**: Interactive control panel to edit headlines and stats with live sync (`PUT /api/content`) and quick preset templates.
- **Cvent & Infosys Architectural Design**: Midnight Blue palette (`#0f172a`), emerald accents (`#10b981`), glassmorphism cards, and responsive grid layouts.
- **Server Components & No-Store Caching**: Next.js App Router fetches live API data using `{ cache: 'no-store' }` for real-time content updates upon page reload or revalidation.
- **Full Mobile Responsiveness**: Tailored layout using Tailwind CSS breakpoints (`sm:`, `md:`, `lg:`).

---

## 📁 Project Architecture

```
Dynamic Enterprise Landing Page/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB Mongoose connection
│   ├── models/
│   │   └── Content.js       # Dynamic Landing Page Schema & Defaults
│   ├── routes/
│   │   └── contentRoutes.js # GET & PUT API Endpoints
│   ├── server.js            # Express Server entry point (Port 5000)
│   └── .env                 # Port & MongoDB URI Configuration
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx      # Dynamic Homepage (Server Component)
    │   │   ├── admin/
    │   │   │   └── page.tsx  # Admin Panel UI (Client Component)
    │   │   └── globals.css   # Midnight Blue & Emerald design system
    │   └── components/
    │       ├── Navbar.tsx    # Infosys-inspired header navigation
    │       ├── Hero.tsx      # Cvent-inspired dynamic headline section
    │       ├── Stats.tsx     # Dynamic metrics counter cards
    │       ├── Capabilities.tsx # Structural capability grid
    │       └── Footer.tsx    # Structural grid footer
    └── package.json
```

---

## 🛠️ Quick Start Instructions

### 1. Start the Express Backend Server
1. Navigate into the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   # or for development mode with nodemon:
   npm run dev
   ```
   > Server will run at `http://localhost:5000` with `✅ MongoDB Connected Successfully`.

### 2. Start the Next.js Frontend Server
1. In a new terminal window, navigate into the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   - **Landing Page**: [http://localhost:3000](http://localhost:3000)
   - **Admin Control Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 📡 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/content` | Fetches current dynamic landing page content from MongoDB. Auto-seeds default values if DB is empty. |
| `PUT` | `/api/content` | Updates landing page content (Hero title, subtitle, CTA text, stats array) in real time. |

---

## 🧪 Testing Real-Time Sync

1. Open `http://localhost:3000/admin`.
2. Select a **Quick Preset Template** (e.g. *Cvent-Style High Impact*) or type custom headline text and metrics.
3. Click **"Save & Sync Real-Time"**.
4. Open or reload `http://localhost:3000` to see the landing page update instantly!
