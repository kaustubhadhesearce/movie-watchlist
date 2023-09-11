import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import { Carousel } from 'react-bootstrap';
import Caraousel from './components/Caraousel';
import { useState, useEffect } from 'react';

function App() {

  const [watchlist, setWatchlist] = useState([]);

  // Initialize watchlist from localStorage on component mount
  useEffect(() => {
    const updatedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(updatedWatchlist);
  }, []);

  const handleAddToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  const handleDeleteFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className="App">
      <MyNavbar/>
      <Caraousel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
