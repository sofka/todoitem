import React, { useState } from 'react';
import './app-header.css'

const AppHeader = ({ todo = 1, done = 3, onChangeTheme=null }) => {
  const [isSun, setIsSun] = useState(true);
  return (
    <div className="app-header d-flex ">
      <div className=" d-flex flex-row justify-content-center align-items-center">
        <h1>Список дел</h1>
        <span className="app-header__icon" onClick={() => {
          onChangeTheme && onChangeTheme(!isSun);
          setIsSun(!isSun);
        }}><i class={isSun?"fa fa-sun-o": "fa fa-moon-o"} aria-hidden="true"></i></span>
      </div>

      <h2>{todo} пункта, сделано {done} </h2>
    </div>
  );
};

export default AppHeader;