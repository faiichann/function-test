import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFoundPage from './404notfound'

//Multi state
const initialState = {
  result: 15000,
  value: []
}
//Muti Reducer
const SecondReducer = (state = { name: "faii", age: 20 }, action) => {
  switch (action.type) {
    case "SETNAME":
      state = {
        ...state,
        name: action.payload
      }
      break;

    case "SETAGE":
      state = {
        age: action.payload
      }

      break;
    default:
  }
  return state;
}

const FristReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result += action.payload,
        value: [...state.value, action.payload]
      }
      break;

    case "DELETE":
      state -= action.payload;
      break;
    default:
  }
  return state;

}

const mylogger = (store) => (next) => (action) => {
  console.log("log action", action);
  next(action);
}

export const store = createStore(combineReducers({ one: FristReducer, two: SecondReducer }), {}, applyMiddleware(mylogger))
store.subscribe(() => {
  console.log("Update store:", store.getState());
})

// store.dispatch({
//   type:"ADD",
//   payload:15000
// });
// store.dispatch({
//   type:"SETNAME",
//   payload:"TEST REDUX"
// });

// const MyComponent = props => <h1>eiei</h1>

// ReactDOM.render(<MyComponent />,
ReactDOM.render(
  <Provider store={store}>
    <Router >
    <Switch>
      <Route path='/' component={App}  exact/>
        <Route path='/home' component={Home} exact />
        <Route component={NotFoundPage} />
        </Switch>
    </Router>
    {/* <App />, */}
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();