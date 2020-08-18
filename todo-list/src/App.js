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
  //Cách 1:
  // render(){
  //   if(this.todoItem.length > 0){
  //     return (
  //       <div className="App">
  //       {
  //         this.todoItem.map((item,index)=>
  //         <TodoItem key={index} item={item} />
  //         )
  //       } 
  //       </div>
  //     );
  //   }else{
  //     return (
  //       <div className="App">Nothing here.</div>
  //     )
  //   }
  // }

  //Cách 2:
  onItemCliked(){
    
  }
  render(){
     return <div className="App">
       {this.todoItem.length > 0 && this.todoItem.map((item, index) =>(
         <TodoItem key={index} item={item} onClick= {this.onItemCliked} />
       ))}
       {this.todoItem.length === 0 && 'Nothing here'}
     </div> 
  }
}

export default App;
