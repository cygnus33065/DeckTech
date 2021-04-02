import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
import ButtonAppBar from "./components/AppBar"
import { createMuiTheme} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/styles"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
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
      }
    }
  });

  // console.log(theme)

  return (
    <>
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
    </ThemeProvider>
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
