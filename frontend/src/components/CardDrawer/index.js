import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import {searchCards} from "../../store/cards"

import {openCardSearch, closeCardSearch} from '../../store/modal';


const useStyles = makeStyles((theme) => ({
  search:{
    width:350,
    marginTop: 10,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
  paper:{
    backgroundColor: 'none',
    // color: theme.palette.primary.main,
  }
}))



export default function CardDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalReducer.cardSearchShow)
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();


   const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeCardSearch());
    }else {
      dispatch(openCardSearch());
    }
  }

  useEffect(() => {
    const cards= dispatch(searchCards(search))
    setSearchResult(cards);
  },[search]);

  console.log(searchResult)
  return (
    <div>
      <Drawer anchor='left' open={isOpen} onClose={toggleDrawer} className={classes.paper}>
        <TextField
        id='card-search-field'
        label='Search for a deck'
        variant='filled'
        className={classes.search}
        onChange={(e) => setSearch(e.target.value)}
        color='secondary'></TextField>
        {searchResult && <></>}
      </Drawer>
    </div>
  )

}
