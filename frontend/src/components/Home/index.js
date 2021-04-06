import React, {useState}from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '100px',
    backgroundColor: theme.palette.primary.dark,
    height:'100vh',
    width: '100%',
    paddingTop: '0px',
  },
  banner: {
    backgroundImage: 'url(https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/7/e70b7a73-484e-48f1-944c-3d38866cdc20.jpg?1594735092)',
    width: '100%',
    height: '18rem',
    marginTop: '5.5rem',
    filter: 'blur(2.5px) saturate(80%)',
    boxSizing:'border-box',
  },
  text:{
    color: theme.palette.secondary.main,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))


const HomePage = async () => {
  const classes = useStyles();
  // const bannerImage = await;

  return (
    // <Box className={classes.root}>
    <>
      <Box className={classes.banner}></Box>
      <Box className={classes.textbox}>
        <Typography variant="h2" className={classes.text}>Welcome to DeckTech</Typography>
      </Box>
    </>
    // </Box>
  )
}


export default HomePage;
