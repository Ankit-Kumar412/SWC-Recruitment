# 💱 Currency Converter

A modern, responsive, and real-time Currency Converter built with React, Vite, and Tailwind CSS. This application allows users to seamlessly convert between various global currencies using live exchange rates.

Link for the Web app on Vercel
[Link](https://currencyconverter-rust-ten.vercel.app/)

## ✨ Features

- **Real-time Exchange Rates:** Fetches up-to-date currency conversion rates.
- **Swap Functionality:** Easily swap the "From" and "To" currencies with a single click.
- **Custom React Hooks:** Utilizes a custom `useCurrencyInfo` hook for clean API fetching and state management.
- **Responsive UI:** Built with Tailwind CSS, ensuring a beautiful interface on both desktop and mobile devices.
- **Glassmorphism Design:** Modern UI with a blurred backdrop for an elegant aesthetic.

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **API:** [Currency API by Fawaz Ahmed](https://github.com/fawazahmed0/exchange-api)

## 📡 API Used

This project uses the free and open-source **Currency API** maintained by Fawaz Ahmed.

- **Endpoint:** `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`
- **Description:** This API provides real-time and historical exchange rates for various currencies. The custom hook `useCurrencyInfo` automatically fetches and caches the latest conversion rates relative to the selected base currency.

## 🛠️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd CurrencyConverter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server URL provided by Vite (usually `http://localhost:5173`).

## 📂 Project Structure

```text
src/
├── components/
│   └── Input.jsx       # Reusable input field component for currency selection
├── Hooks/
│   └── useCurrencyInfo.js # Custom hook to fetch currency data from the API
├── App.jsx             # Main application component containing the core logic and layout
├── main.jsx            # Entry point for the React application
└── index.css / App.css # Global styles and Tailwind directives
```
