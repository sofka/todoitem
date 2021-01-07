import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    const items = ['Test First Item', 'Test Second Item'];
    return (
      <ul>
        <li><ToDoListItem/></li>
        <li><ToDoListItem/></li>
      </ul>
    );
  };
  export default ToDoList;