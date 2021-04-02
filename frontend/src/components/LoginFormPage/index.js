import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';

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
}));


export default function LoginFormPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  return (
    <form className={classes.paper} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
      </ul>
      <TextField
      type="text"
      id="outlined-basic"
      label="Username or Email"
      variant="outlined"
      value={credential}
      onChange={(e) => setCredential(e.target.value)}
      className={classes.items}
      />
      <TextField
      type="password"
      id="outlined-basic"
      label="Password"
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className={classes.items}
      />
      <Button type='submit' variant="contained" className={classes.items}>Login</Button>
    </form>
  );
}
