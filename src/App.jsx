import React from 'react';
import {
  configureStore,
} from '@reduxjs/toolkit';
import rootReducer from './app/index';
import { Provider } from 'react-redux';
import Component from './component/component';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
 
export function App() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default App;