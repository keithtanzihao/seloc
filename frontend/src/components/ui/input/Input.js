import React from 'react';

import classes from './Input.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <input {...props.input} />
    </div>
  );
});

export default Input;
