# 🍽️ Recipe Search Dashboard

A modern, fast, and user-friendly recipe finder built with **React** and **Vite**. This application connects to a free public API ([TheMealDB](https://www.themealdb.com/api.php)) to allow users to search for thousands of meals, view their ingredients, and read cooking instructions.

This project was built to demonstrate core React concepts, including state management, custom hooks, API integration, and clean component architecture.

---

## Link for the Web app on Varcel

[Link] (swc-recruitment-kyi7.vercel.app)

## ✨ Features

- 🔍 **Live Search:** Instant search results as you type.
- ⏱️ **API Optimization (Debouncing):** A custom `useDebounce` hook pauses network requests until you stop typing for 500ms, preventing API spam and ensuring a snappy user experience.
- 📖 **Detailed Recipe Modals:** Click on any meal to open a popup containing a full ingredient list, exact measurements, written instructions, and a YouTube video tutorial.
- 📱 **Responsive Design:** A beautifully styled CSS grid that looks great on both desktop and mobile devices.
- 🛡️ **Robust State Management:** Graceful handling of "Loading" (spinners), "Error", and "Empty Result" states.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) (For blazing-fast startup and hot-module replacement)
- **Styling:** Custom CSS (Using CSS Variables for clean, scalable design)
- **Icons:** [Lucide-React](https://lucide.dev/) (For lightweight, clean SVG icons)
- **API:** [TheMealDB API](https://www.themealdb.com/api.php) (Free, no authentication required)

---

## 📂 Project Structure

The codebase is organized cleanly to separate concerns (UI, logic, and network requests):

```text
src/
├── components/          # Reusable UI building blocks
│   ├── MealCard.jsx     # Displays the image and title of a single meal
│   ├── MealList.jsx     # Renders the grid of MealCards
│   ├── MealModal.jsx    # The popup showing full recipe details
│   └── SearchBar.jsx    # The input field with search icons
│
├── hooks/               # Custom React Hooks
│   └── useDebounce.js   # Logic to delay values (optimizes API calls)
│
├── services/            # Code that interacts with the outside world
│   └── api.js           # Functions to fetch search results & recipe details
│
├── App.jsx              # The main "Manager" component holding the app's state
├── main.jsx             # The React entry point
└── index.css            # Global styles and CSS variables
```

---

## 🚀 How to Run the Project Locally

Follow these steps to get the project running on your own machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Navigate to the project folder:**

   ```bash
   cd "API Powered Search Dash Board"
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and visit `http://localhost:5173` (or the port Vite provides in your terminal).

---

## 🧠 How It Works (Behind the Scenes)

1. **The Search Flow:** When a user types in the `SearchBar`, the text is sent up to `App.jsx`.
2. **The Delay:** Instead of fetching data immediately, the text is passed into `useDebounce`. This hook waits 500 milliseconds. If the user types another letter, the timer restarts.
3. **The Fetch:** Once the user stops typing, `App.jsx` calls the `searchMeals` function inside `api.js`.
4. **The Display:** The API returns a list of meals, which are passed to the `MealList` and rendered as `MealCards`.
5. **The Deep Dive:** Clicking a card triggers the `MealModal`. It takes the meal's unique ID, does a second API call to `getMealDetails`, and maps over the data to display exactly how much of each ingredient you need!

---
