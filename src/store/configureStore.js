import { createStore } from 'redux';
import reducer from '../app/reducer';
export default function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState);
    return store;
  }