import { inject, observer } from 'mobx-react';
import React from 'react';
@inject('NumberCoursWork')
@observer
class Header extends React.Component {
  render() {
    console.log(this.props.NumberCoursWork.count.lenght);
    return (
      <div className='headerComponent'>
        <h1>
          Проверенно курсовых работы:{this.props.NumberCoursWork.count.length}
        </h1>
      </div>
    );
  }
}
export default Header;
