import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles"
import Box from "@material-ui/core/Box";

import Card from "../Card";
import {getCards} from "../../store/cards"



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    paddingTop: '0px',
    marginTop: '125px'
  },
  card: {

  }
}))



const Deck = () => {
  const classes = useStyles();
  const deck = useSelector((state) => state.decksReducer.deckDisplay)
  const cards = useSelector((state) => state.cardsReducer.deckCards[0].Cards)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCards = async () => {
      await dispatch(getCards({deck_id: deck.id}))
    }
    fetchCards()
  }, [dispatch])

  console.log(cards)

    return (
      <Box className={classes.root}>
      {cards?.map(card => <Card card={card}/>)}
      </Box>
    )

}

export default Deck;
