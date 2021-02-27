import React from 'react';
import './app-header.css'

const AppHeader = ({ todo = 1, done = 3 }) => {
  return (
    <div className="app-header d-flex">
      <h1>ToDoList</h1>
      <h2>{todo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;