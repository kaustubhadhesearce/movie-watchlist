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
import MovieCard from './MovieCard';

function ScrollView({section, scrollViewTitle}) {
    // const [popular, setPopular] = useState([]);
    const [activeTab, setActiveTab] = useState(section[0].tab);

    const [url, setUrl] = useState(section[0].url);

    const {data: popular} = useFetch(url);

    const handleSelect = (link)=>{
        setUrl(link.url);

    }

    // console.log(popular);

    return (
      <Container className="my-4 scrollview-container">
        <h2 className="scrollview-title">
          <h3 style={{color: 'white'}}>{scrollViewTitle}{' '}</h3>
          <Nav 
          variant="tabs" 
          activeKey={activeTab} 
          onSelect={(selectedTab) => setActiveTab(selectedTab)}>
          {section.map((link) => (
            <Nav.Item key={link.id}>
              <Nav.Link
                eventKey={link.id}
                onClick={() => handleSelect(link)}
                className="custom-nav-link" 
              >
                {link.tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        </h2>
        <div className="horizontal-scroll-container">
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </Container>
    );
  }
  
  export default ScrollView;