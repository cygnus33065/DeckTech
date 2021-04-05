import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as sessionActions from "../../store/session";
import {closeSignup, openLogin} from '../../store/modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  items: {
    color:theme.palette.secondary.light,
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


export default function SignupForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    dispatch(closeSignup())
    return <Redirect to='/' />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      return dispatch(sessionActions.signup({email, username, password}))
        .catch((res)=> {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    } else {setErrors(['Please verify that Password and Confirm Password match'])}
  };

  const switchModal = () => {
    dispatch(closeSignup());
    dispatch(openLogin())
  }


  return(
    <form className={classes.paper} noValidate autoComplete='off' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error,idx) => <li key={idx}>{error}</li>)}
      </ul>
      <TextField
      type='text'
      id='outlined-basic'
      label='Username'
      variant='outlined'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className={classes.items}
      />
      <TextField
      type='text'
      id='outlined-basic'
      label='Email'
      variant='outlined'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={classes.items}
      />
      <TextField
      type='password'
      id='outlined-basic'
      label='Password'
      variant='outlined'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className={classes.items}
      />
      <TextField
      type='password'
      id='outlined-basic'
      label='Password'
      variant='outlined'
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className={classes.items}
      />
      <Button type='submit' variant="contained" className={classes.items}>Signup</Button>
      <Typography className={classes.items}>
      <Link href='#' onClick={switchModal}>Already signed up? Click here to login.</Link>
      </Typography>
    </form>
  )
}
