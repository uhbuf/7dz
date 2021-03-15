import React from 'react';
class ButtonExit extends React.Component {
  clicked = () => {
    this.props.smena(false);
  };
  render() {
    return (
      <button className='buttonExit' onClick={this.clicked}>
        Exit{' '}
      </button>
    );
  }
}
export default ButtonExit;
