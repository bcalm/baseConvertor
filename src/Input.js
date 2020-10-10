import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = +event.target.value;
    const convertedValue =
      typeof value === 'number' ? parseInt(value, this.props.base) : 0;
    if (!isNaN(convertedValue)) {
      this.props.onChange(convertedValue);
    }
  }

  render() {
    const { value, base } = this.props;
    const convertedValue = parseInt(value).toString(base);
    return (
      <input type="text" value={convertedValue} onChange={this.handleChange} />
    );
  }
}

export default Input;
