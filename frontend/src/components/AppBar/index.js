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
import LoginFormPage from "../LoginFormPage/index"
import Box from '@material-ui/core/Box';
import dtLogo from "../../assets/images/dtLogo.png"
import {openLogin, closeLogin} from "../../store/modal"


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
  const open = useSelector((state) => state.modalReducer.loginShow)
  const dispatch = useDispatch()
  // const [open, setOpen] = useState(false)

console.log(open)
  const handleOpen = () => {
    // setOpen(true);
    dispatch(openLogin())
  }

  const handleClose = () => {
    // setOpen(false);
    dispatch(closeLogin())
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
          <Button className={classes.button}  style= {{fontWeight: "800"}}onClick={handleOpen}>Login</Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <LoginFormPage />
       </Modal>
    </div>
  )
}
