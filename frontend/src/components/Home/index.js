import React, {useEffect, useState}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {getBannerImage} from '../../store/cards'


const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '100px',
    backgroundColor: theme.palette.primary.dark,
    height:'100vh',
    width: '100%',
    paddingTop: '0px',
  },
  // banner: {
  //   width: '100%',
  //   height: '18rem',
  //   marginTop: '5.5rem',
  //   filter: 'blur(2.5px) saturate(80%)',
  //   boxSizing:'border-box',
  // },
  text:{
    color: theme.palette.secondary.main,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))


const HomePage = () => {
  const [image, setImage] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const bannerImage = useSelector((state) => state.cardsReducer.image)
  console.log(bannerImage)

  const bannerStyle ={
    backgroundImage: `url(${bannerImage})`,
    width: '100%',
    height: '18rem',
    marginTop: '5.5rem',
    filter: 'blur(2.5px) saturate(80%)',
    boxSizing:'border-box',
  }

  useEffect(() => {
    const randCardId = Math.random() * (5547 - 1) + 1;
    dispatch(getBannerImage())
  }, [dispatch]);

  return (

    <>
    <Box style={bannerStyle}></Box>
      <Box className={classes.textbox}>
        <Typography variant="h2" className={classes.text}>Welcome to DeckTech</Typography>
      </Box>
    </>
  )
}


export default HomePage;
