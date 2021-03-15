import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'body',
    dataIndex: 'body',
    key: 'body',
  },
];
class CouseWork extends React.Component {
  state = {
    todos: [],
  };
  componentDidMount = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`;
    let todos = [];
    try {
      const result = await fetch(url);
      todos = await result.json();
    } catch (err) {}
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className='students'>
        <Table dataSource={this.state.todos} columns={columns} />;
      </div>
    );
  }
}
export default CouseWork;
