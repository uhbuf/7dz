import React from 'react';
class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard' align='center'>
        {this.props.slovo}
      </div>
    );
  }
}
export default Dashboard;
