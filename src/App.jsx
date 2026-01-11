import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHub from './pages/HomeHub';
import BlogFeed from './pages/BlogFeed';
import BlogPost from './pages/BlogPost';
import TechStore from './pages/TechStore';
import TechCompare from './pages/TechCompare';
import GiveawayCenter from './pages/GiveawayCenter';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check localStorage for saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Apply theme to document
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHub />} />
        <Route path="/blog" element={<BlogFeed />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/store" element={<TechStore />} />
        <Route path="/compare" element={<TechCompare />} />
        <Route path="/giveaways" element={<GiveawayCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
