import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
import {searchCards} from "../../store/cards"

import {openCardSearch, closeCardSearch} from '../../store/modal';
import Card from "../Card"


const useStyles = makeStyles((theme) => ({
  search:{
    width:350,
    marginTop: 10,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.light,
  },
  paper:{
    // paper:{
    //   background: theme.palette.secondary.main,
    //   color: theme.palette.primary.main,
    // }
  }
}))



export default function CardDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardsReducer.cards)
  const isOpen = useSelector((state) => state.modalReducer.cardSearchShow)
  const [search, setSearch] = useState();
  const [cardsResult, setCardsResult] = useState()


   const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeCardSearch());
    }else {
      dispatch(openCardSearch());
    }
  }

  useEffect(() => {
     dispatch(searchCards(search))
  },[search, dispatch]);

  useEffect(() => {
    setCardsResult(cards);
  },[cards, dispatch])

  // console.log(cardsResult)
  return (
    <div>
      <Drawer BackdropProps={{ invisible: true }} anchor='left' open={isOpen} onClose={toggleDrawer} className={classes.paper}>
        <TextField
        id='card-search-field'
        label='Search for a deck'
        variant='filled'
        className={classes.search}
        onChange={(e) => setSearch(e.target.value)}
        color='secondary'></TextField>
        {/* <Card className={classes.card}/> */}
        {cardsResult && cardsResult.map(card => <Card card={card}/>)}
        {/* <Typography variant='h1' className={classes.card}>This is a test</Typography> */}
      </Drawer>
    </div>
  )

}
