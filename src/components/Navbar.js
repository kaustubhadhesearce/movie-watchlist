import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faList } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons you want to use
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Watchlist from './Watchlist';

function MyNavbar() {
  const [showMoviesDropdown, setShowMoviesDropdown] = useState(false);
  const [showTVShowsDropdown, setShowTVShowsDropdown] = useState(false);
  const [showWatchlistDropdown, setShowWatchlistDropdown] = useState(false);

  const handleMoviesDropdown = () => {
    setShowMoviesDropdown(!showMoviesDropdown);
  };

  const handleTVShowsDropdown = () => {
    setShowTVShowsDropdown(!showTVShowsDropdown);
  };

  const handleWatchlistDropdown = () =>{
    setShowWatchlistDropdown(!showWatchlistDropdown);
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      if (isScrollingDown || currentScrollPos === 0) {
        setVisible(true); 
      } else {
        setVisible(false); 
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  //watchlist
  const [showWatchlist, setShowWatchlist] = useState(false);

    const handleShowWatchlist = () => {
      setShowWatchlist(true);
    };

    const handleCloseWatchlist = () => {
      setShowWatchlist(false);
    };

  return (
    <Navbar
      expand="lg"
      className={`your-navbar ${visible ? '' : 'navbar-hidden'} bg-dark !important`}
      variant="dark"
    >
      <Container style={{ height: '50px' }}>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title="Movies"
              id="basic-nav-dropdown"
              show={showMoviesDropdown}
              onMouseEnter={handleMoviesDropdown}
              onMouseLeave={handleMoviesDropdown}
            >
              <NavDropdown.Item href="#action/3.1">Top Rated</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="TV Shows"
              id="basic-nav-dropdown"
              show={showTVShowsDropdown}
              onMouseEnter={handleTVShowsDropdown}
              onMouseLeave={handleTVShowsDropdown}
            >
              <NavDropdown.Item href="#action/3.1">Top Rated</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center justify-content-center flex-grow-1">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="small-search-bar"
            />
            <Button variant="outline-light" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
          <div className="ml-auto">
            {/* Replace the "My Watchlist" heading with a custom button with an icon */}
              <Button
                variant="outline-light"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={handleShowWatchlist}
              >
                <FontAwesomeIcon icon={faList} style={{ marginRight: '8px' }} />
                My Watchlist
              </Button>
          </div>
          <Watchlist show={showWatchlist} onHide={handleCloseWatchlist}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
