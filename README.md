Crypto Exchange Rate
A React web application that displays the latest cryptocurrency exchange rates in various fiat currencies. This project uses the Alpha Vantage API, Ant Design for UI components, and React Query for data fetching.

Features
Real-time cryptocurrency exchange rates for popular fiat currencies.
Currency selection for both cryptocurrency and fiat currency options.
Displays formatted exchange rates in a clean, responsive interface.
Error handling to manage API errors and display user-friendly messages.
Technologies Used
React - For building the user interface.
Ant Design - For styling and ready-to-use UI components.
React Query - For efficient data fetching, caching, and state management.
Axios - To make API requests.
Alpha Vantage API (via RapidAPI) - To fetch real-time cryptocurrency exchange rates.
Git - For version control.
GitHub - For project hosting.
Getting Started
Prerequisites
Node.js and npm (Node Package Manager) installed on your machine.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/username/CryptoExchangeRate.git
cd CryptoExchangeRate
Install the dependencies:

bash
Copy code
npm install
Set up your API key:

Sign up for an API key from Alpha Vantage via RapidAPI.

Create a .env file in the root directory and add your API key:

plaintext
Copy code
REACT_APP_RAPIDAPI_KEY=your_api_key_here
Start the development server:

bash
Copy code
npm run dev
The app should now be running at http://localhost:3000.
