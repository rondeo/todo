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

    render() {
        const { task } = this.state;

        return <li className="todo">{task.text}</li>;
    }
}