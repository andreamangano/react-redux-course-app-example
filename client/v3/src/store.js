// Without devtools

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.subscribe(() => console.log('store', store.getState()));

export default store;


// With devtools
/*
 import { createStore, applyMiddleware } from 'redux';
 import thunkMiddleware from 'redux-thunk'
 import reducers from './reducers'
 import { composeWithDevTools } from 'redux-devtools-extension';

 const store = createStore(
 reducers,
 composeWithDevTools(
 applyMiddleware(thunkMiddleware)
 )
 );

 export default store;
*/