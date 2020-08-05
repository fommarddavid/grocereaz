// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import 'semantic-ui-css/semantic.min.css';

// == Import : local
import App from './containers/App';
import store from './store';

// console.log(store.getState());

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
