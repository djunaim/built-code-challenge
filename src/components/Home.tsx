import React from 'react';
import Button from './ArchitectButton';
import BudgetButton from './BudgetInput';
import LenderButton from './LenderButton';

interface Props {
  increment: () => void;
  decrement: () => void;
  yes: () => void;
  no: () => void;
  rejected: () => void;
  approved: () => void;
  count: number,
  budget: boolean,
  isApproved: boolean,
}

export default class Home extends React.Component {
  render() {

    const {
      count,
      increment,
      decrement,
      budget,
      yes,
      no,
      isApproved,
      rejected,
      approved
    } = this.props as Props;
    return (
      <div style={{ textAlign: 'center'}}>
        <h2>Architect</h2>
        <span>{ count }</span>
          <Button handleClick={increment} color={'lightblue'} >Increment</Button>
          <Button handleClick={decrement} color={'pink'} >Decrement</Button>
        <div>
        <h2>Budget</h2>
          <BudgetButton handleClick={yes} color={'green'}>yes</BudgetButton>
          <BudgetButton handleClick={no} color={'red'}>no</BudgetButton>
        </div>
        <div>
          <h2>Lender</h2>
          <LenderButton handleClick={approved} color={'lightgreen'} >Approved</LenderButton>
          <LenderButton handleClick={rejected} color={'orange'}>Rejected</LenderButton>
        </div>
      </div>
    )
  }
}