# CloneApp

A modern, responsive React application built with Vite and Tailwind CSS. This project serves as a showcase of a multipage website using React Router for seamless client-side navigation.

## 🚀 Features

- **React + Vite Setup:** Fast development and optimized production builds.
- **Client-Side Routing:** Utilizes `react-router-dom` to provide a multi-page feel without page reloads.
- **Tailwind CSS Integration:** Fully styled with Tailwind CSS for rapid UI development and responsiveness.
- **Component-Based Architecture:** Reusable components separated logically inside the `src/Components` directory.
- **Dynamic Routing:** Supports dynamic route parameters (e.g., fetching or displaying user details via `/user/:userId`).
- **Data Fetching:** Includes a GitHub component that makes API calls to fetch and display dynamic user data from the GitHub API.

## 📁 Project Structure

- `src/main.jsx`: Entry point of the application where routes are configured.
- `src/Layout.jsx`: The main layout wrapper that includes the `Header` and `Footer`, rendering nested routes using `Outlet`.
- `src/Components/`:
  - `Header` / `Footer`: Consistent navigation and footer components displayed across all pages.
  - `Home`: The landing page with engaging UI and call-to-action buttons.
  - `About`: Information page about the application or organization.
  - `Contacts`: Contact form or details page.
  - `User`: Demonstrates dynamic route parameters displaying user-specific info.
  - `Github`: Demonstrates data fetching from external APIs (GitHub API).

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd CloneApp
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Open `http://localhost:5173` to view the application in your browser.

## 📦 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.
