import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles"

import Card from "../Card";
import {getCards} from "../../store/cards"
import DeckCard from "../DeckCard";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    paddingTop: '0px',
  }
}))



const Deck = () => {
  const classes = useStyles();
  const deck = useSelector((state) => state.decksReducer.deck)
  const cards = useSelector((state) => state.cardsReducer.deckCards)
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getCards({deck_id: deck.id}))
  }, [dispatch])

    return (
      <>
      {cards?.map(card => <DeckCard className={classes.card} card={card}/>)}
      </>
    )

}

export default Deck;
