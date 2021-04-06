import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {makeStyles, withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar"
import Menu from "@material-ui/core/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import MenuItem from "@material-ui/core/MenuItem";
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import dtLogo from "../../assets/images/dtLogo.png"
import LoginFormPage from "../LoginFormPage/index"
import SignupFormModal from "../SignupFormModal/index"
import {openLogin, closeLogin, openSignup, closeSignup} from "../../store/modal"
import {logout} from '../../store/session'

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
  },
  menu:{
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.light
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "none",
    backgroundColor: "#5a5c66"
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
  },
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:hover':{
        backgroundColor: theme.palette.primary.main,
      }
  }))(MenuItem);

export default function ButtonAppBar() {
  const classes = useStyles()
  const loginState = useSelector((state) => state.modalReducer.loginShow)
  const signupState = useSelector((state) => state.modalReducer.signupShow)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)

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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const menuClose = () => {
    setAnchorEl(null)
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar postion="static">
        <Toolbar className={classes.root}>
          <IconButton edge="start" className={classes.menuButton}  onClick={handleClick} aria-label="menu">
            <MenuIcon fontSize="large"/>
          </IconButton>
          <StyledMenu
          id="nav-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={menuClose}
          TransitionComponent={Zoom}
          >
            <StyledMenuItem >Profile</StyledMenuItem>
            <StyledMenuItem >Create Deck</StyledMenuItem>
            <StyledMenuItem onClick={onLogout}>Logout</StyledMenuItem>
          </StyledMenu>
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
