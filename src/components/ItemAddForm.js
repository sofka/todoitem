import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../style/item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
        const { addNewItem } = this.props;
        return (
            <div className="item-add-form">
                <button type="button"
                    className="btn btn-primary"
                    onClick={addNewItem}>
                    Добавить новый элемент
            </button>
            </div>
        );
    };
}