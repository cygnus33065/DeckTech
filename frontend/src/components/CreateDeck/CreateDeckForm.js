import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import * as sessionActions from '../../store/session';
import {newDeckClose} from "../../store/modal"
import {getCommanders} from '../../store/cards';
import {createNewDeck} from '../../store/deck';


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
  const [deckCommander, setDeckCommander] = useState('None');
  const [open, setOpen] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const commanders = useSelector((state) => state.cardsReducer.commanders)

  useEffect(() => {
    dispatch(getCommanders())
  },[]);


  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(createNewDeck({deckName, commander_id: deckCommander, user_id: sessionUser.id}))
    await dispatch(newDeckClose());
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
      <FormControl className={classes.items}>
        <InputLabel id='commander-select-label'>Pick Your Commander</InputLabel>
        <Select
          className={classes.item}
          id='commander-select'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={deckCommander}
          onChange={(e) => setDeckCommander(e.target.value)}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {commanders?.map(commander => <MenuItem value={commander.id}>{commander.name}</MenuItem>)}
        </Select>
      </FormControl>
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
