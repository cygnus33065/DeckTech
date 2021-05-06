import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import {makeStyles} from '@material-ui/core/styles';

import {getDeck} from '../../store/deck';

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


const DeckCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeckClick = async (e) => {
    e.preventDefault();
    const deck_id = e.target.id
    console.log(deck_id)
    await dispatch(getDeck(deck_id))
    history.push('/deck')
  }

  return (
  <Card className={classes.card} id={props.deck?.id} onClick={handleDeckClick}>
    <CardHeader title={props.deck.name} id={props.deck.id}/>
    <CardMedia className={classes.content} image={props.deck.Card.art_url} id={props.deck.id}/>
    <CardContent className={classes.content}><Link href="/deck" onClick={handleDeckClick}>View This Deck</Link> </CardContent>
  </Card>
  )
}

export default DeckCard;
