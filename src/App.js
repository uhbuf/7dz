import logo from './logo.svg';
import './App.css';
import FirstScreen from './4 задание/1screen';
import SecondScreen from './4 задание/2screen';
import Header from './4 задание/Header';
import 'antd/dist/antd.css';
import React from 'react';
class App extends React.Component {
  state = {
    switch: false,
  };
  changeState = (value) => {
    this.setState({ switch: value });
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.switch ? (
          <SecondScreen smena={this.changeState} />
        ) : (
          <FirstScreen smena={this.changeState} />
        )}
      </div>
    );
  }
}

export default App;
