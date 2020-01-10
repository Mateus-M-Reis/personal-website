import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';

/* const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true },
});
*/
ReactDOM.render(
   // <MuiThemeProvider theme={theme}>
   //   <CssBaseline />
      <App />
   // </MuiThemeProvider>
   ,document.getElementById('root'));
