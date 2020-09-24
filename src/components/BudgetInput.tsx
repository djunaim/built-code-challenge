import React, { PropsWithChildren } from 'react';

interface BudgetProps {
  color: string;
  handleClick: () => void;
}

const BudgetButton = (props: PropsWithChildren<BudgetProps>) => {
  const { color, children, handleClick } = props;
  return (
    <span
    onClick={handleClick}
    style={{ cursor: 'pointer', 
    backgroundColor: color, 
    margin: '20px', 
    padding: '10px'}}>{children}</span>
  )
}

export default BudgetButton;