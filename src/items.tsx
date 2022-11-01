import React from 'react';

interface ItemsProps {
  state: React.MouseEventHandler,
  classNames: string
  O: string
}

const Items: React.FC<ItemsProps> = (props) => {
  return (
    <div className={props.classNames} onClick={props.state}>
      <span>{props.O}</span>
    </div>
  );
};

export default Items;