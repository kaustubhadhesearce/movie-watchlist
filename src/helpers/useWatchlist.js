import { useState, useEffect } from 'react';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);

  useEffect(() => {
    const updatedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    setWatchlist(updatedWatchlist);
  }, []);

  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
    setIsAddedToWatchlist(true);
  };

  const removeFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
    setIsAddedToWatchlist(false);
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
}
