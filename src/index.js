// == Import : npm
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Composants
import App from 'src/components/App';
import store from './store';

// == Render
const rootReactElement = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
const target = document.getElementById('root');
render(rootReactElement, target);
