import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import React from 'react';
import CouseWork from './CouseWork';
import Students from './Students';
@inject('MainStore')
@observer
class Navigator extends React.Component {
  state = {
    switch: true,
  };
  swichIdStudenta = (value) => {
    this.clicked(<CouseWork id={value} />);
  };
  clicked(param) {
    this.props.smenaSlova(param);
  }
  render() {
    this.buttonArray = [
      {
        text: 'ФИО',
        value: this.props.MainStore.userName,
      },
      {
        text: 'Группа',
        value: '21-19',
      },
      {
        text: 'Возраст',
        value: '19',
      },
      {
        text: 'Студенты',
        value: <Students switchId={this.swichIdStudenta} />,
      },
      {
        text: 'Курсовые',
        value: <CouseWork />,
      },
    ];
    return (
      <div className='navigator'>
        {this.buttonArray.map((button) => (
          <div>
            <button
              className='button'
              onClick={() => this.clicked(button.value)}
            >
              {button.text}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default Navigator;
