import React from 'react';
import Button from './ArchitectButton';

interface Props {
  increment: () => void;
  decrement: () => void;
  count: number
}

export default class Home extends React.Component {
  render() {
    const { count, increment, decrement } = this.props as Props;
    return (
      <div style={{ textAlign: 'center'}}>
        <h1>Boo</h1>
        <span>{ count }</span>
        <Button handleClick={increment} color={'lightblue'} >Increment</Button>
        <Button handleClick={decrement} color={'pink'} >Decrement</Button>
      </div>
    )
  }
}