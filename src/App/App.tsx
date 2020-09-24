import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import Home from '../components/Home';

import { AppState } from '../store/rootStore';
import { incrementArchitect, decrementArchitect } from '../store/architect/architectAction';
import { yesBudget, noBudget} from '../store/budget/budgetAction';
import { isApproved, notApproved } from '../store/lender/lenderAction';

interface AppProps {
  increment: () => void;
  decrement: () => void;
  yes: () => void;
  no: () => void;
  approved: () => void;
  rejected: () => void;
}

//takes everything by reducer and return object
const mapStateToProps = (state: AppState) => ({
  count: state.architectReducer.count
})

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementArchitect()),
  decrement: () => dispatch(decrementArchitect()),
  yes: () => dispatch(yesBudget()),
  no: () => dispatch(noBudget()),
  approved: () => dispatch(isApproved()),
  rejected: () => dispatch(notApproved()),
})

class App extends React.Component<AppProps, AppState> {
  render(): JSX.Element {
    return <Home {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
