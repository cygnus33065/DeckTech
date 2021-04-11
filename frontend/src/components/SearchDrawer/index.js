import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
// import Button from "@material-ui/core/Button"
// import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import {openSearch, closeSearch} from '../../store/modal';
// import Card from '../Card'
// import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  search:{
    width:350,
    marginTop: 10,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.light,
  },
  drawer:{
    background: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  card:{
    marginTop:'20px',
    width:'50px',
    height: '50px',
  },
}))


export default function SearchDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalReducer.searchShow)
  const cards = useSelector((state) => state.cardsReducer.cards)



  // console.log(cards)

  const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeSearch());
    }else {
      dispatch(openSearch());
    }
  }

  return (
    <div>
      <Drawer anchor='left' open={isOpen} onClose={toggleDrawer} className={classes.drawer}>
        <TextField
        id='search-field'
        label='Search for a card'
        variant='filled'
        className={classes.search}
        color='secondary'/>

      </Drawer>
    </div>
  )

}
