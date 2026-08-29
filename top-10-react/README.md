# Top 10 Coders on Codeforces

A responsive, modern React application that fetches and displays real-time data of the top 10 competitive programmers globally from the official Codeforces API.

## 🚀 Features

- **Real-time Data:** Fetches live rating lists and user submission statistics directly from the Codeforces API.
- **Comprehensive Stats:** Displays user rank, profile picture, name, handle, current rating, and the total number of problems successfully solved.
- **Modern UI/UX:** A clean, card-based grid layout styled with Tailwind CSS, featuring subtle hover animations and a responsive design that works flawlessly on mobile, tablet, and desktop screens.
- **Quick Navigation:** Clickable cards seamlessly redirect you to the coder's official Codeforces profile.

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (for lightning-fast HMR and optimized builds)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Source:** [Codeforces API](https://codeforces.com/apiHelp)

## ⚙️ Installation & Setup

To run this project locally, follow these steps:

**1. Clone the repository**

```bash
git clone <your-repository-url>
cd Top_10_Players/top-10-react
```

**2. Install dependencies**
Make sure you have Node.js installed. Then, run:

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open the application**
Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## 🧠 Project Architecture

The core logic resides in `src/App.jsx`. The application utilizes React hooks (`useState`, `useEffect`) to manage state and side effects.

**Data Fetching Flow:**

1.  On component mount, it fetches the globally rated list of users filtered by `activeOnly=true`.
2.  It slices the top 10 users from the response.
3.  For each of the top 10 users, a secondary, concurrent API request is fired to `user.status` to fetch all of their historical submissions.
4.  The submissions are filtered by `verdict === 'OK'` (Accepted), and unique problem IDs are counted using a JavaScript `Set` to calculate the exact number of unique questions solved.
5.  The final aggregated data is then pushed to the React state and rendered to the DOM.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
