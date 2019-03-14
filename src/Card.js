import React from 'react';

  const Card = ({name,email,id,}) =>
  {
    return(
    <div className='bg-washed-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
    <img src= {require(`./images/${id}.jpg`)}alt='friend1' width='300px' height='300px'/>
    <div className='bg-white'>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>
    );
}
export default Card;