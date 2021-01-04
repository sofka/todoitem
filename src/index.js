import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
  return (
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My First ToDoItem Project </h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder="search" />
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));