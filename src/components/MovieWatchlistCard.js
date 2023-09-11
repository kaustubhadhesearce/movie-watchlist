import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Image, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getStarColor, formatDate, calculateRatingPercentage } from './MovieCard';
import {handleDeleteFromWatchlist} from './MovieDescription';
import { useWatchlist } from '../helpers/useWatchlist';

const MovieWatchlistCard = ({movie}) => {

    const { removeFromWatchlist } = useWatchlist();
    
    return ( 
        <div key={movie.id}>
            <Card >
                <Row>
                    <Col md={4}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}  alt={movie.title} />
                    </Col>
                    <Col md={8}>
                    <Card.Body>
                        <Card.Title>{movie.name || movie.title}</Card.Title>
                        <p>{movie.overview}</p>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <Button variant="primary">Mark Watched</Button>
                            </Col>
                            <Col md={6}>
                                <Button variant="danger"
                                onClick={()=>{
                                    removeFromWatchlist(movie);
                                }}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
     );

}
 
export default MovieWatchlistCard;