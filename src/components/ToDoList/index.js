import React from 'react';
import ToDoListItem from '../ToDoListItem';
import './todo-list.css';

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos?.map((item) => {

    // {} деструктуризация
    // ... spreed оператор
    const { id, hide, ...itemProps } = item;
    let classNames = 'list-group-item';
    if (hide) {
      classNames += ' hide';
    }

    return (
      <li key={id} className={classNames}>
        <ToDoListItem {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};
export default ToDoList;