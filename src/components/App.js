import React, { Component } from 'react';
import ItemAddForm from './ItemAddForm';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';
import '../style/index.css';

export default class App extends Component {
  maxId = 100;
  state = {
    data: [
      this.createItem('Drink Coffee'),
      this.createItem('Make pizza'),
      this.createItem('Listen courses'),
    ]
  }

  createItem(label) {
    const newItem = {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
    };
    return newItem;
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
  addNewItem = (text) => {
    this.setState(({ data }) => {
      const newItem = this.createItem('Hello world');
      const newData = [...data, newItem];
      return {
        data: newData
      }
    });

  }

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const newArr = this.toogleProperty(data, id, 'important');
      return {
        data: newArr
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const newArr = this.toogleProperty(data, id, 'done');
      return {
        data: newArr
      }
    });
  }


  toogleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const updatedItem = { ...oldItem, [propName]: !oldItem[propName] };
    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);
    const newArr = [...before, updatedItem, ...after];
    return newArr;
  };

  render() {

    const { data } = this.state;
    const doneCount = data.filter((el) => el.done).length;
    const todoCont = data.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader todo={todoCont} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.data}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addNewItem={this.addNewItem} />
      </div>
    );
  }

}
