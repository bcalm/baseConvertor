import React from 'react';
import BaseInput from './BaseInput';

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState(({ value }) => ({ value: newValue }));
  }

  render() {
    const bases = this.props.requiredBases.map((base) => (
      <BaseInput
        base={base}
        value={this.state.value}
        onChange={this.handleChange}
      />
    ));
    return <div>{bases}</div>;
  }
}

export default BaseConvertor;
