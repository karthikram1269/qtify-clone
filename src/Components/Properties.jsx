import React from 'react';

const Properties = (props) => {
  return (
    <div className='CardDiv'>
      <img src={props.image} alt="topImg" id='CardImg' />
      <div className='CardInnerDiv'>
          <button>{`${props.follows} follows`}</button>
      </div>  
      <p>{props.slug}</p>
    </div>
  );
};

export default Properties;


