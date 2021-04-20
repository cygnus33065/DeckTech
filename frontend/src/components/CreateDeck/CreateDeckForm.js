import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import * as sessionActions from '../../store/session';
import {newDeckOpen, newDeckClose} from "../../store/modal"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  items: {
    color:theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.light
  },
  paper: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.primary.dark,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,4),
    top: "50%",
    left: "50%",
    bottom: "auto",
    right: "bottom",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    outline: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
}))

const CreateDeckForm = () => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const [deckName, setDeckName] = useState('');
  const [commander, setCommander] = useState(0);
  const sessionUser = useSelector((state) => state.session.user);


  const handleSubmit = () => {
    dispatch(newDeckClose());
  }



  return (
    <form className={classes.paper} noValidate autoComplete='off' onSubmit={handleSubmit}>
      <Typography className={classes.items}>New Deck</Typography>
      <TextField
        type='text'
        id='deck-name'
        label='Deck Name'
        variant='outlined'
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        className={classes.items}
        color='secondary'
      />
      <Select />
      <Button
        type='submit'
        variant='contained'
        className={classes.items}
      >
        New Deck
      </Button>
    </form>
  )
}

export default CreateDeckForm;
