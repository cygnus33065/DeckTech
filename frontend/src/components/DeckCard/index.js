import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '100px',
    backgroundColor: theme.palette.primary.dark,
    height:'100vh',
    width: '100%',
    paddingTop: '0px',
  },
  card: {
    height: '250px',
    width: '250px',
    margin: '2px',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '150px'
  },
  content: {
    width: '175px',
    height: '175px',
    borderRadius: '5px',
  }
}))

const handleDeckClick = () => {
  
}

const DeckCard = (props) => {
  const classes = useStyles();

  return (
  <Card className={classes.card} id={props.deck.id} onclick={handleDeckClick}>
    <CardHeader title={props.deck.name} />
    <CardMedia className={classes.content} image={props.deck.Card.art_url}/>
  </Card>
  )
}

export default DeckCard;
