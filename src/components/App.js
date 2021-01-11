import React, { Component } from 'react';
import AddNewItemPanel from './AddNewItemPanel';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';
import '../style/index.css';

export default class App extends Component {
  state = {
    data: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make pizza', important: true, id: 2 },
      { label: 'Listen courses', important: true, id: 3 },
    ]
  }
  deleteItem = (id) => {

    this.setState(({ data }) => {
      const idx = data.findIndex((el) => {
        return el.id === id;
      });
      // ТАК делать НЕЛЬЗЯ
      // Нельзя менять состояние, которое пришло
      // это нарушает целостность приложения
      // data.splice(idx, 1);
      const before = data.slice(0, idx);
      const after = data.slice(idx + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr
      }
    });
  }
  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={0} done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.data}
          onDeleted={this.deleteItem} />
        <AddNewItemPanel />
      </div>
    );
  }

}
