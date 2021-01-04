import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>ToDoItem</h1>
    <input placeholder="search"/>
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));