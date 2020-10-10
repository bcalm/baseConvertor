import React from 'react';
import Input from './Input';

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
    const bases = this.props.requiredBases.map((base) => {
      return (
        <div key={base} style={{ display: 'flex', padding: '10px' }}>
          <p>Base{base}: &nbsp;</p>
          <Input
            base={base}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      );
    });
    return <div>{bases}</div>;
  }
}

export default BaseConvertor;
