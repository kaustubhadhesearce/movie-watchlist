import React, { useEffect, useState } from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import { useWatchlist } from '../helpers/useWatchlist';

const MovieDescription = ({movie, show, onHide}) => {

  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  
  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(
    JSON.parse(localStorage.getItem('watchlist'))?.some((item) => item.id === movie.id) || false
  );

  // const handleAddToWatchlist = () => {
  //   const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  //   if (!watchlist.some((item) => item.id === movie.id)) {
  //     watchlist.push(movie);
  //     localStorage.setItem('watchlist', JSON.stringify(watchlist));
  //     setIsAddedToWatchlist(true);
  //   }
  // }

  // const handleDeleteFromWatchlist = () =>{
  //   const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  //   const newWatchlist = watchlist.filter((item) => item.id !== movie.id);

  //   localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
  //   setIsAddedToWatchlist(false);
  // }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}> {/* Column for the image */}
          <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} fluid className='movie-descrition-img'/>
          </Col>
          <Col xs={6}> {/* Column for the description */}
            <h3>{movie.name || movie.title}</h3>
            <p>{movie.overview}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {!isAddedToWatchlist ?
        <Button variant="secondary" onClick={()=>{
          addToWatchlist(movie);
          setIsAddedToWatchlist(true);
        }} style={{backgroundColor:'green'}}>
          Add to Watchlist
        </Button>
        :
        <Button variant="secondary" onClick={()=>{
          removeFromWatchlist(movie);
          setIsAddedToWatchlist(false);
        }} style={{backgroundColor:'red'}}>
          Remove
        </Button>}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* You can add additional buttons or actions here */}
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDescription;
