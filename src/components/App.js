import React from 'react';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';
import '../style/index.css';

const App = () => {
  const data = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make pizza', important: true, id: 2 },
    { label: 'Listen courses', important: true, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader todo={0} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={data} />
    </div>
  );
}

export default App;