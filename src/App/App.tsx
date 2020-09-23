import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import Home from '../components/Home';

import { AppState } from '../store/rootStore';
import { incrementArchitect, decrementArchitect } from '../store/architect/architectAction';

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

//takes everything by reducer and return object
const mapStateToProps = (state: AppState) => ({
  count: state.architectReducer.count
})

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementArchitect()),
  decrement: () => dispatch(decrementArchitect())
})

class App extends React.Component<AppProps, AppState> {
  render(): JSX.Element {
    return <Home {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
