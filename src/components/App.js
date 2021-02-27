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

  // Создать новый пункт с заданным название
  createItem(label) {
    const newItem = {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
      hide: false
    };
    return newItem;
  }

  // Удалить пункт по идентификатору из списка
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

  // Добавить новый пункт в список
  addNewItem = (text) => {
    this.setState(({ data }) => {
      const newItem = this.createItem(text);
      const newData = [...data, newItem];
      return {
        data: newData
      }
    });

  }

  // Пометить пункт, как важный
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const newArr = this.toogleProperty(data, id, 'important');
      return {
        data: newArr
      }
    });
  }

  // Пометить пункт, как выделенный
  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const newArr = this.toogleProperty(data, id, 'done');
      return {
        data: newArr
      }
    });
  }

  // Установить противоположное свойство пункта
  // Если был важный, сделать неважным и т.д.
  toogleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const updatedItem = { ...oldItem, [propName]: !oldItem[propName] };
    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);
    const newArr = [...before, updatedItem, ...after];
    return newArr;
  };

  hideItems = ({ text, hide, done }) => {
    this.setState(({ data }) => {
      const searchArr = data.map((el) => {
        let isHide = el.hide;
        if (text) {
          isHide = text ? el.label.toLowerCase().indexOf(text.toLowerCase()) === -1 : isHide;
        }
        if (hide !== undefined) {
          isHide = isHide && hide;
        }
        if (done !== undefined) {
          isHide = el.done !== done;
        }
        const newItem = { ...el, hide: isHide }
        return newItem;
      });
      return {
        data: searchArr
      }
    });
  }
  // Поиск пунктов, соответствующих строке поиска
  // Те, которые не соответствуют прячутся, меняется свойство hide
  searchItems = (text) => {
    this.hideItems({ text });
  }

  filterItems = ({ isAll = false, isActive = false, isDone = false }) => {
    switch (true) {
      case isAll:
        this.hideItems({ hide: !isAll });
        break;
      case isActive:
        this.hideItems({ hide: false, done: !isActive });
        break;
      case isDone:
        this.hideItems({ hide: false, done: isDone });
        break;
      default:
        this.hideItems({ hide: !isAll });
        break;
    }
  }

  render() {

    const { data } = this.state;
    const doneCount = data.filter((el) => el.done).length;
    const todoCont = data.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader todo={todoCont} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchItems={this.searchItems} />
          <ItemStatusFilter filterItems={this.filterItems} />
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
