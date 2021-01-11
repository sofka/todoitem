import React, { Component } from 'react';
import '../style/todo-list-item.css';


export default class ToDoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    // Передаём в setState функцию, 
    // которая принимает в качестве аргумента
    // текущее состояние, до изменения
    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        });
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        });
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
        const style = {
            color: important ? 'tomato' : 'black',
        };

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}