import React, { Component } from 'react';
import cn from 'classnames'


export default class ItemStatusFilter extends Component {

    filter = ({ isAll = false, isActive = false, isDone = false }) => {
        this.setState(() => ({
            isAll: isAll,
            isActive: isActive,
            isDone: isDone
        }));
        this.props.filterItems({ isAll, isActive, isDone });
    }

    state = {
        isAll: true,
        isActive: false,
        isDone: false
    };
    render() {
        const { isAll, isActive, isDone } = this.state;
        return (
            <div className="btn-group">
                <button type="button" className={cn("btn", { "btn-info": isAll }, { "btn-outline-secondary": !isAll })} onClick={() => { this.filter({ isAll: true }) }}>All</button>
                <button type="button" className={cn("btn", { "btn-info": isActive }, { "btn-outline-secondary": !isActive })} onClick={() => { this.filter({ isActive: true }) }}>Active</button>
                <button type="button" className={cn("btn", { "btn-info": isDone }, { "btn-outline-secondary": !isDone })} onClick={() => { this.filter({ isDone: true }) }}>Done</button>
            </div>
        );
    };
};