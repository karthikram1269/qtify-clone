import React from 'react';

const Properties = (props) => {
  return (
    <div className='topCardDiv'>
      <img src={props.image} alt="topImg" id='topCardImg' />
      <div className='topCardInnerDiv'>
        <button>{`${props.follows} follows`}</button>
      </div>
      <p>{props.slug}</p>
    </div>
  );
};

export default Properties;
