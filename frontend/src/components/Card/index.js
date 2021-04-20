import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import {useDispatch, useSelector} from 'react-redux'
// import Typography from '@material-ui/core/Typography';

const Card = ({card}) => {

  const cardStyle ={
    backgroundImage: `url(${card.image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: 'center',
    width: '200px',
    height: '290px',
    // marginTop: '5.5rem',
    boxSizing:'border-box',
  }

  const addCard = (e) => {

  }

return (
  <Box style={cardStyle} id={card.id} onclick={addCard}></Box>
)
}

export default Card;
