import React/*, {useEffect, useState}*/ from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import CardDrawer from "../CardDrawer"
import {openCardSearch, closeCardSearch} from "../../store/modal"

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '100px',
    backgroundColor: theme.palette.primary.dark,
    // height:'100vh',
    // width: '100%',
    paddingTop: '100px',
    marginLeft:'350px',
  },
  text:{
    color: theme.palette.secondary.main,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

const CreateDeck = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cardOpen = useSelector((state) => state.modalReducer.cardSearchShow);

  const toggleCardDrawer = () => {
    if(cardOpen){
      dispatch(closeCardSearch());
    }else {
      dispatch(openCardSearch());
    }
  }





  return (
    <>
    <Button className={classes.root} onClick={toggleCardDrawer}><SearchIcon/></Button>
    {cardOpen && (<CardDrawer/>)}
    </>
  )
}

export default CreateDeck;
