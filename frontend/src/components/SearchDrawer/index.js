import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import {openSearch, closeSearch} from '../../store/modal';


const useStyles = makeStyles((theme) => ({
  search:{
    width:350,
    marginTop: 10,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.light,
  },
  paper:{
    background: theme.palette.primary.main,
    color: theme.palette.primary.main,
  }
}))



export default function SearchDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalReducer.searchShow)


   const toggleDrawer = () => {
    if (isOpen){
      dispatch(closeSearch());
    }else {
      dispatch(openSearch());
    }
  }

  return (
    <div>
      <Drawer anchor='left' open={isOpen} onClose={toggleDrawer} className={classes.paper}>
        <TextField
        id='search-field'
        label='Search for a deck'
        variant='filled'
        className={classes.search}
        color='secondary'/>
        <Button><SearchIcon/></Button>
      </Drawer>
    </div>
  )

}
