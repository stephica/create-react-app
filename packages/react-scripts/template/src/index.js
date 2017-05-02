import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { ThemeProvider } from 'styled-components';
import theme from './components/base/theme';
import { BrowserRouter as Router } from 'react-router-dom';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* for styled components */}
    <ThemeProvider theme={theme}>
      {/* adds ethereum info */}
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
