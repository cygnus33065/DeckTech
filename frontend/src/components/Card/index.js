import React from 'react';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';

const Card = ({card}) => {

  const cardStyle ={
    backgroundImage: `url(${card.image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: 'center',
    width: '50%',
    height: '50%',
    // marginTop: '5.5rem',
    boxSizing:'border-box',
  }


return (
  <Box style={cardStyle}></Box>
)
}

export default Card;
