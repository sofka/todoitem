import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../style/item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addNewItem(this.state.label);
    }
    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Что ещё нужно сделать" />
                <button type="submit"
                    className="btn btn-primary">
                    Добавить
            </button>
            </form>
        );
    };
}