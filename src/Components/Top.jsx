import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../Styles/Top.css";
import Properties from './Properties';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Top = () => {
    let [api, setApi] = useState([]);
    let [two, setTwo] = useState([]);
    let [song, setSong] = useState([]);

    useEffect(() => {
        fetch("https://qtify-backend-labs.crio.do/albums/top")
            .then(res => res.json())
            .then(data => setApi(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch("https://qtify-backend-labs.crio.do/albums/new")
            .then(res => res.json())
            .then(data => setTwo(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch("https://qtify-backend-labs.crio.do/songs")
            .then(res => res.json())
            .then(data => setSong(data))
            .catch(err => console.error(err));
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <div id='td'>
            <h1>Top albums</h1>
            <Carousel responsive={responsive}>
                {api.map(x => (
                    <div key={x.id} className='topCard'>
                        <Properties
                            image={x.image}
                            follows={x.follows}
                            slug={x.slug}
                        />
                    </div>
                ))}
            </Carousel>

            <h1>New albums</h1>
            <Carousel responsive={responsive}>
                {two.map(x => (
                    <div key={x.id} className='topCard'>
                        <Properties
                            image={x.image}
                            follows={x.follows}
                            slug={x.slug}
                        />
                    </div>
                ))}
            </Carousel>

            <h1>Songs</h1>
            <Carousel responsive={responsive}>
                {song.map(x => (
                    <div key={x.id} className='topCard'>
                        <Properties
                            image={x.image}
                            follows={x.follows}
                            slug={x.slug}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Top;
