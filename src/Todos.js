import React from 'react';
import { Todo } from './Todo';
import "./Todos.css";

export class Todos extends React.Component {
    constructor(props) {
        super(props);

        const { tasks } = props;

        this.state = {
            tasks: tasks || []
        };
    }

    render() {
        const { tasks } = this.state;

        return <div className="todos">
            <ul>
                {tasks.map(task => <Todo key={task.text} task={task}></Todo>)}
            </ul>
        </div>;
    }
}