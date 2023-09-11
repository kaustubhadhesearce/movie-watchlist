import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CDBProgress, CDBContainer } from "cdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import useFetch from '../helpers/useFetch';
import MovieDescription from './MovieDescription';

export const getStarColor = (rating)=>{
    if(rating >= 8){
        return '#4CAF50';
    }
    else if(rating >= 7){
        return '#FFC107';
    }
    else{
        return '#F44336';
    }
}

export const formatDate = (movie) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  if(movie.release_date !== undefined) return new Date(movie.release_date).toLocaleDateString(undefined, options);
  return  new Date(movie.first_air_date).toLocaleDateString(undefined, options);
}

export const calculateRatingPercentage = (rating) => {
  const rawPercentage = (rating / 10) * 100;
  const roundedPercentage = Math.round(rawPercentage);

  return roundedPercentage;
}

const MovieCard = ({movie}) => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return ( 
        <>
            <div key={movie.id} onClick={handleShowModal}>
              <Card style={{ width: '10rem', height: '25rem' }} 
              className="card-hover"
              >
                <Card.Img variant="top" style={{width: '10rem'}}
                className='movie-img'
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} />
                <Card.Body className="position-relative">
                  <Card.Title style={{fontSize: '15px'}}>
                    {movie.name || movie.title}
                  </Card.Title>
                  <Card.Text className="text-muted small">{`${formatDate(movie)}`}</Card.Text>
                  <Card.Text className="text-muted small bottom-rating">
                    {`${calculateRatingPercentage(movie.vote_average)}%`} 
                    <FontAwesomeIcon icon={faStar} style={{color: getStarColor(movie.vote_average)}}/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <MovieDescription movie={movie} show={showModal} onHide={handleCloseModal} />
        </>
     );
}
 
export default MovieCard;