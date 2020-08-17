import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor(){
    super();
    this.todoItem = [
      {title : 'Mua bim bim', isComplete:true},
      {title :'Đi đá bóng', isComplete:true},
      {title:'Đi đổ xăng'}
    ]
  }
  render(){
  return (
    <div className="App">
    {
      this.todoItem.map((item,index)=>
      <TodoItem key={index} item={item} />
      )
    } 
    </div>
  );
  }
}

export default App;
