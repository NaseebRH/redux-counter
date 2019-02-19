import React, { Component } from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Counter from './counter'

const reducer = (state = {count : 0}, {type}) => {
  switch (type) {
    case 'INCREMENT':
      return {...state, count : state.count + 1}
    case 'DECREMENT':
      return {...state, count : state.count - 1}
    default:
      return state
  }
}

const store =createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const currentState = store.getState();


class App extends Component {
  render() {
    return (
     <Provider store={store}> <div className="App">
     <Counter/>
      </div></Provider>
    );
  }
}

export default App;
