import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/styles"
import CssBaseline from '@material-ui/core/CssBaseline';
// import LoginFormPage from "./components/LoginFormPage";
// import Navigation from "./components/Navigation";
import HomePage from './components/Home'
import ButtonAppBar from "./components/AppBar"
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import CreateDeck from './components/CreateDeck'
import Deck from "./components/Deck";

function App() {
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then();
  }, [dispatch]);



  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#5a5c66',
        light: '#878994',
        dark: '#31333c',
      },
      secondary: {
        main: '#aeea00',
        light: '#e4ff54',
        dark: '#79b700',
      },
      background:{
        default: '#31333c'
      },
    },
    typography: {
      fontFamily: [
        'Saira',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '-apple-system',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      // Style sheet name ⚛️
      MuiDrawer: {
        paper: {
          backgroundColor:  '#d6d6d6',
          overflowY: 'auto',
          display: 'inline-block'
        }
      },
      MuiButton: {
        // Name of the rule
        root:{
          borderRadius: 0
        }
      }
    }
  });

  // console.log(theme)

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <ButtonAppBar />
      {/* {isLoaded && ( */}
      <Switch>
        <Route exact={true} path='/'>
          <HomePage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignupFormPage />
        </Route>
        <Route path="/createdeck" exact={true}>
          <CreateDeck />
        </Route>
        <Route exact={true} path='/deck'>
          <Deck />
        </Route>
      </Switch>
      {/* )} */}
      </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
