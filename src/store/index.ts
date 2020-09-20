import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware: any = [];

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);
