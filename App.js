import React from 'react';
import ReduxPG from './src/ReduxPG';
import {Provider} from 'react-redux';
import createStore from './src/store';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <ReduxPG />
    </Provider>
  );
};

export default App;
