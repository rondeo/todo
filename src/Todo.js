import React from 'react';
import "./Todo.css";

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        const { task } = props;

        this.state = {
            task: task || {}
        };
    }

    handleDelete() {
        this.props.onDelete(this.state.task.id);
    }

    render() {
        const { task } = this.state;
        
        return <li className="todo">
                <div className="todo-text">
                {task.text}
            </div>
            <i className="fas fa-trash" onClick={this.handleDelete.bind(this)}></i>
        </li>;
    }
}