import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

const createStoreWithNiddleware = applyMiddleware(...middleWare)(createStore);

const store = createStoreWithNiddleware(reducers);

export default store;
