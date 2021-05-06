import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
// import Button from "@material-ui/core/Button"
// import SearchIcon from '@material-ui/icons/Search';

import {openSearch, closeSearch} from '../../store/modal';
import {searchDecks} from '../../store/deck';
import DeckCard from "../DeckCard";


const useStyles = makeStyles((theme) => ({
  search:{
    width:350,
    marginTop: 10,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.light,
  },
  card:{
    marginTop:'20px',
    width:'25px',
    height: '25px',
  },
  result:{
    marginTop: '20px'
  }
}))


export default function SearchDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalReducer.searchShow)
  const decks = useSelector((state) => state.decksReducer.searchDecks)
  const [search, setSearch] = useState();
  const [decksResult, setDecksResult] = useState();




  const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeSearch());
    }else {
      dispatch(openSearch());
    }
  }

  useEffect(() => {
    dispatch(searchDecks(search))
  }, [search, dispatch])

  useEffect(() => {
    setDecksResult(decks);
  }, [decks,dispatch])



  return (
    <div>
      <Drawer BackdropProps={{ invisible: true }} anchor='left' open={isOpen} onClose={toggleDrawer} className={classes.drawer}>
        <TextField
        id='search-field'
        label='Search for a card'
        variant='filled'
        className={classes.search}
        onChange={(e) => setSearch(e.target.value)}
        color='secondary'/>
        {decksResult && decksResult?.map(deck => <DeckCard className={classes.card} deck={deck}/>)}
      </Drawer>
    </div>
  )

}
