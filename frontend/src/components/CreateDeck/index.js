import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import CardDrawer from "../CardDrawer"
import {openCardSearch, closeCardSearch} from "../../store/modal"
import CreateDeckForm from './CreateDeckForm';
import {newDeckOpen, newDeckClose} from '../../store/modal'
import {openLogin, closeLogin, openSignup, closeSignup} from "../../store/modal"

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
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.primary.main,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,4),
  },
}))


const CreateDeck = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cardOpen = useSelector((state) => state.modalReducer.cardSearchShow);
  const formOpen = useSelector((state) => state.modalReducer.newDeck);
  const sessionUser = useSelector((state) => state.session.user);

  const toggleCardDrawer = () => {
    if(cardOpen){
      dispatch(closeCardSearch());
    }else {
      dispatch(openCardSearch());
    }
  }


  if (!sessionUser) {
    dispatch(openLogin())
  }


  return (
    <>
    <Modal
      BackdropProps={{ invisible: true }}
      open = {formOpen}
      aria-labelledby="create-deck-modal"
      aria-describedby='create-a-deck'
      >
      <CreateDeckForm className={classes.paper}/>
      </Modal>
    <Button className={classes.root} onClick={toggleCardDrawer}><SearchIcon/></Button>
    {cardOpen && (<CardDrawer/>)}
    </>
  )
}

export default CreateDeck;
