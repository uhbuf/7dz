import React from 'react';
import Dashboard from './Dashboard';
import Navigator from './Navigator';
import ButtonExit from './ButtonExit';
import '../App.css';
class SecondScreen extends React.Component {
  state = {
    slovo: '',
  };
  changeState = (value) => {
    this.setState({ slovo: value });
  };
  render() {
    return (
      <>
        <ButtonExit smena={this.props.smena} />
        <div className='mainScreen'>
          <Navigator smenaSlova={this.changeState} />
          <Dashboard slovo={this.state.slovo} />
        </div>
      </>
    );
  }
}
export default SecondScreen;
