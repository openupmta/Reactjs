import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import CompletedAll from './img/completed-task.svg'
class App extends Component {
  constructor(){
    super();
    this.state = {
      toDoItems:[
        {title: 'Đi chơi', isComplete: true},
        {title: 'Đi học', isComplete: false}
      ],
      newItem: ''
    }

    this.inputElement = React.createRef();
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAll = this.onClickAll.bind(this);
  }
  onClickItem(item){
    return(event) => {
      const {toDoItems} = this.state;
      const index = toDoItems.indexOf(item);
      this.setState(
        {
          toDoItems:[
            ...toDoItems.slice(0,index),
            {
              ...item,
              isComplete: !item.isComplete
            } ,
            ...toDoItems.slice(index+1)
          ]
        }
      )
    }
  }
 
  onKeyUp(event){
    let text = event.target.value;
    if(event.keyCode === 13){
      text = text.trim();
      if(!text){return;}
      else{
        this.setState({
          toDoItems:[
            {title: text,isComplete:false},
            ...this.state.toDoItems
          ],
          newItem:''
        })
      }
    }
    
  }
  onChange(event){
    this.setState({
      newItem:event.target.value
    })
  }
  onClickAll(){
    const {toDoItems} = this.state;
    const data = toDoItems.map((item) => {return({title: item.title,
      isComplete:false})})
    this.setState({
      toDoItems: [...data]
    })
    
  }
  componentDidMount(){
    this.inputElement.current.focus();
  }
  render() {
    const {toDoItems,newItem} = this.state;
    const totalItem = toDoItems.filter(item => item.isComplete === false).length;
    if(toDoItems.length)
    {
      return (
        <div className="App">
          <div className="Header">
            <img src={CompletedAll} width={32} height={32} />
            <input type="text" onChange={this.onChange} onKeyUp={this.onKeyUp} value={newItem} placeholder="Add a new item" ref={this.inputElement} />
          </div>
          {toDoItems.map((item,index ) =>
            <ToDoItem onClicked={this.onClickItem(item)} key={index} item={item} />
          )}
          <div className="Filter">
            <p className="item">{totalItem} item</p>
            <p className="filter-all" onClick={this.onClickAll}>All</p>
            <p className="filter-active" onClick={this.onClickActive}>Active</p>
            <p className="filter-complete" onClick={this.onClickComplete}>Complete</p>
          </div>
        </div>
      );
    }
    
  }
}

export default App;
