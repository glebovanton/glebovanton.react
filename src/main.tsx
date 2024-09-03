import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import ReactGA from 'react-ga';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import About from '@/app/pages/About';
import Home from '@/app/pages/Home';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ThemeSwitch from '@/app/components/ThemeSwitch';
import store from '@/app/store/store';
import '@/assets/styles/main.css';

const container = document.getElementById('app');

ReactGA.initialize('G-8STX2NJWYH', {
  debug: process.env.NODE_ENV === 'development',
  titleCase: false,
});

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  usePageTracking();

  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ThemeSwitch />
    </main>
  );
}

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
