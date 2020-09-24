import React, { PropsWithChildren } from 'react';

interface LenderProps {
  color: string;
  handleClick: () => void;
}

const LenderButton = (props: PropsWithChildren<LenderProps>) => {
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

export default LenderButton;