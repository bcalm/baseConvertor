import React from 'react';
import Input from './Input';

const BaseInput = (props) => {
  return (
    <div key={props.base} style={{ display: 'flex', padding: '10px' }}>
      <p>Base{props.base}: &nbsp;</p>
      <Input base={props.base} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default BaseInput;
