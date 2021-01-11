import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../style/add-new-item-panel.css';

export default class AddNewItemPanel extends Component {
    addNewItem = () => {
        console.log('Нажата кнопка добавить');
    }
    render() {
        return (
            <div className="add-new-item-panel">
                <button type="button" className="btn btn-primary" onClick={this.addNewItem}>
                    Добавить новый элемент
            </button>
            </div>
        );
    };
}