// import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import dtLogo from "../../assets/images/dtLogo.png"
import LoginFormPage from "../LoginFormPage/index"
import SignupFormModal from "../SignupFormModal/index"
import {openLogin, closeLogin, openSignup, closeSignup} from "../../store/modal"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
  button:{
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    disableRipple: "true",
    marginRight: theme.spacing(2),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.primary.main,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,4),
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles()
  const loginState = useSelector((state) => state.modalReducer.loginShow)
  const signupState = useSelector((state) => state.modalReducer.signupShow)
  const dispatch = useDispatch()
  // const [open, setOpen] = useState(false)

  const loginOpen = () => {
    // setOpen(true);
    dispatch(openLogin())
  }

  const loginClose = () => {
    // setOpen(false);
    dispatch(closeLogin())
  }

  const signupOpen = () => {
    dispatch(openSignup())
  }

  const signupClose = () => {
    dispatch(closeSignup())
  }

  return (
    <div className={classes.root}>
      <AppBar postion="static">
        <Toolbar className={classes.root}>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Typography variant="h4"  className={classes.title}>
          {/* <Box textAlign="center" m={1}>
          </Box> */}
          <Box  textAlign="center" className={classes.box} m={1}>
            <img src={dtLogo} style={{width:"75px"}} alt="logo"/>
              DeckTech
          </Box>
          </Typography>
          <Button className={classes.button}  style= {{fontWeight: "800"}}onClick={loginOpen}>Login</Button>
          <Button className={classes.button}  style= {{fontWeight: "800"}}onClick={signupOpen}>SIgnup</Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={loginState}
        onClose={loginClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <LoginFormPage />
       </Modal>
       <Modal
        open={signupState}
        onClose={signupClose}
        aria-labelledby="signup-form-modal-title"
        aria-describedby="signup-form-modal-description"
        >
          <SignupFormModal />
        </Modal>
    </div>
  )
}
