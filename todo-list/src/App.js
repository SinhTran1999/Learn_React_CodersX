import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor(){
    super();
    this.todoItem = [
      'Mua bim bim',
      'Đi đá bóng',
      'Đi đổ xăng'
    ]
  }
  render(){
  return (
    <div className="App">
    {
      this.todoItem.map((item,index)=><TodoItem key={index} title={item} />)
    } 
    </div>
  );
  }
}

export default App;
