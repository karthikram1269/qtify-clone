import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../Styles/style.css";
import Properties from './Properties';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Top = () => {
  let [api, setApi] = useState([]);
  let [two, setTwo] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => res.json())
      .then((data) => setApi(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/new")
      .then((res) => res.json())
      .then((data) => setTwo(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };
  const toggleShowAll2 = () => {
    setShowAll2(prevShowAll2 => !prevShowAll2);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id='td'>
      <div className='top'>
        <h1>Top albums</h1>
        <button className="show-all-button" onClick={toggleShowAll}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>
      
      {showAll ? (
        <div className="grid-view">
        {api.map(x => (
          <div key={x.id} className='Card'>
            <Properties
              image={x.image}
              follows={x.follows}
              slug={x.slug}
            />
          </div>
        ))}
      </div>
      ) : (
        <Carousel responsive={responsive}>
          {api.map(x => (
            <div key={x.id} className='Card'>
              <Properties
                image={x.image}
                follows={x.follows}
                slug={x.slug}
              />
            </div>
          ))}
        </Carousel>
      )}

      <div className='top'>
        <h1>New albums</h1>
        <button className="show-all-button" onClick={toggleShowAll2}>
          {showAll2 ? "Collapse" : "Show All"}
        </button>
      </div>
      {showAll2 ? (
        // Display all items in a grid view when "Show All" is clicked
        <div className="grid-view">
          {two.map(x => (
            <div key={x.id} className='Card'>
              <Properties
                image={x.image}
                follows={x.follows}
                slug={x.slug}
              />
            </div>
          ))}
        </div>
      ) : (
        <Carousel responsive={responsive}>
          {two.map(x => (
            <div key={x.id} className='Card'>
              <Properties
                image={x.image}
                follows={x.follows}
                slug={x.slug}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Top;
