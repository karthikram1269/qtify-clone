import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../Styles/style.css";
import Properties from './Properties';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Songs = () => {

    let [song, setSong] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("https://qtify-backend-labs.crio.do/songs")
            .then(res => res.json())
            .then(data => setSong(data))
            .catch(err => console.error(err));
    }, []);

    const toggleShowAll = () => {
        setShowAll(prevShowAll => !prevShowAll);
      };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <>
    <hr/>
    <div className='outSong'>
      
    <div className='top'>
        <h1>Songs</h1>
        <button className="show-all-button" onClick={toggleShowAll}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>
      
      {showAll ? (
        // Display all items in a grid view when "Show All" is clicked
        <div className="grid-view">
          {song.map(x => (
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
          {song.map(x => (
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
    </>
  )
}

export default Songs;
