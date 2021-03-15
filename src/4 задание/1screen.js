import { observable } from 'mobx';
import { inject } from 'mobx-react';
import React from 'react';
@inject('MainStore')
class FirstScreen extends React.Component {
  switch = () => {
    this.props.MainStore.changeUserName(document.getElementById('Name').value);
    this.props.smena(true);
  };
  render() {
    return (
      <div className='App'>
        <input
          id='Name'
          className='form-controle'
          type='text'
          placeholder='Введите ваше имя'
        />
        <button onClick={this.switch}>Войти</button>
      </div>
    );
  }
}
export default FirstScreen;
