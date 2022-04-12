import React, { useEffect, useState, useRef } from 'react';
import ItemAddForm from './ItemAddForm';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';
import '../style/index.css';

const getExistMaxId = () => {
  var items = JSON.parse(localStorage.getItem('todoitems')) || [];

  const max = items && items.length ? Math.max.apply(null, items.map((val) => {
    return val.id
  })) : 0;
  return max;
};

const App = () => {


  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todoitems')) || []);
  let [maxId, setMax] = useState(getExistMaxId());
  const appRef = useRef(null);


  // Создать новый пункт с заданным название
  const createItem = (label) => {
    

    const newItem = {
      id: maxId++,
      label: label,
      important: false,
      done: false,
      hide: false
    };
    setMax(maxId++);
    return newItem;
  };

  // Удалить пункт по идентификатору из списка
  const deleteItem = (id) => {
    const idx = data.findIndex((el) => {
      return el.id === id;
    });
    const before = data.slice(0, idx);
    const after = data.slice(idx + 1);
    const newArr = [...before, ...after];

    setData(newArr);
  };

  // Добавить новый пункт в список
  const addNewItem = (text) => {
    const newItem = createItem(text);
    const newData = [...data, newItem];

    setData(newData);
  };

  // Пометить пункт, как важный
  const onToggleImportant = (id) => {
    const newArr = toogleProperty(data, id, 'important');

    setData(newArr);
  };

  // Пометить пункт, как выделенный
  const onToggleDone = (id) => {
    const newArr = toogleProperty(data, id, 'done');
    setData(newArr);
  };


  useEffect(() => {
    const filter = data.filter((item) => {
      return item['done'];
    }) ?? [];
    ;
    setDoneCount(filter.length);
    setTodoCount(data?.length)
    localStorage.setItem('todoitems', JSON.stringify(data));
  }, [data]);


  // Установить противоположное свойство пункта
  // Если был важный, сделать неважным и т.д.
  const toogleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const updatedItem = { ...oldItem, [propName]: !oldItem[propName] };
    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);
    const newArr = [...before, updatedItem, ...after];
    return newArr;
  };

  const hideItems = ({ text, hide, done }) => {

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
    setData(searchArr);
  };

  // Поиск пунктов, соответствующих строке поиска
  // Те, которые не соответствуют прячутся, меняется свойство hide
  const searchItems = (text) => {
    hideItems({ text });
  };

  const filterItems = ({ isAll = false, isActive = false, isDone = false }) => {
    switch (true) {
      case isAll:
        hideItems({ hide: !isAll });
        break;
      case isActive:
        hideItems({ hide: false, done: !isActive });
        break;
      case isDone:
        hideItems({ hide: false, done: isDone });
        break;
      default:
        hideItems({ hide: !isAll });
        break;
    }
  }

  const onChangeTheme = (isSun)=>{
    const html = appRef.current?.parentNode.parentNode.parentNode;
    const themeClass = 'black';

    if(isSun){
      html.classList.remove(themeClass);
    }else{
      html.classList.add(themeClass);
    }
  }

  return (

    <div className="todo-app" ref={appRef}>
      <AppHeader todo={todoCount} done={doneCount}  onChangeTheme={onChangeTheme}/>
      <div className="top-panel d-flex">
        <SearchPanel searchItems={searchItems} />
        <ItemStatusFilter filterItems={filterItems} />
      </div>
      <ToDoList todos={data}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm addNewItem={addNewItem} />
    </div>
  );
};
export default App;


