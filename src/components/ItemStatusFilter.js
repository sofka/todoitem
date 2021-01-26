import React, { Component } from 'react';


export default class ItemStatusFilter extends Component {
    filter = ({ isAll = false, isActive = false, isDone = false }) => {
        this.props.filterItems({isAll, isActive, isDone});
    }
    render() {

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info" onClick={() => { this.filter({ isAll: true }) }}>All</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => { this.filter({ isActive: true }) }}>Active</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => { this.filter({ isDone: true }) }}>Done</button>
            </div>
        );
    };
};