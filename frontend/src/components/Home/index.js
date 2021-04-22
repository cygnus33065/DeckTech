import React, {useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core/styles';


import {getBannerImage} from '../../store/cards'
import {openSearch, closeSearch} from '../../store/modal'
import SearchDrawer from '../SearchDrawer';
import {homePageDecks} from '../../store/deck'

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
  },
  card: {
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '150px'
  },
  decks: {
    // paddingTop: '100px',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '175px',
    height: '175px',
    borderRadius: '5px',
  }
}))


const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bannerImage = useSelector((state) => state.cardsReducer.image)
  const isOpen = useSelector((state) => state.modalReducer.searchShow);
  const decks = useSelector((state) => state.decksReducer.homeDecks)


  const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeSearch());
    }else {
      dispatch(openSearch());
    }
  }

  const bannerStyle ={
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: 'center',
    width: '100%',
    height: '18rem',
    marginTop: '5.5rem',
    filter: 'blur(6px)',
    boxSizing:'border-box',
  }


  useEffect(() => {
    dispatch(getBannerImage())
    dispatch(homePageDecks())
  }, [dispatch]);

  return (

    <>
    <Box style={bannerStyle}></Box>
      <Box className={classes.textbox}>
        <Typography variant="h2" className={classes.text}>Welcome to DeckTech</Typography>
      </Box>
      <Button onClick={toggleDrawer}>Open search</Button>
      {isOpen && (<SearchDrawer/>)}
      <Box className={classes.decks}>
        {decks?.map( deck => (
            <Card className={classes.card}>
              <CardHeader title={deck.name} />
              <CardMedia className={classes.content} image={deck.Card.art_url}/>
            </Card>
        ))}
      </Box>
    </>
  )
}


export default HomePage;
