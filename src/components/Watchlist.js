import { useState, useEffect } from "react";
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MovieCard from "./MovieCard";
import MovieWatchlistCard from "./MovieWatchlistCard";
import { useWatchlist } from "../helpers/useWatchlist";

const Watchlist = ({show, onHide}) => {

    const { watchlist } = useWatchlist();
    return ( 
        <>
            <Modal show={show} onHide={onHide} centered 
            dialogClassName="watchlist-dialog">
                <Modal.Header closeButton>
                    <h2>My Watchlist</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="vertical-scroll-container">
                        {watchlist.map((movie) => (
                            <MovieWatchlistCard key={movie.id} movie={movie}/>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            
        </>
     );
}
 
export default Watchlist;