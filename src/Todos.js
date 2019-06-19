import React from 'react';
import { Todo } from './Todo';
import "./Todos.css";

export class Todos extends React.Component {
    constructor(props) {
        super(props);

        const { tasks } = props;

        this.state = {
            tasks: tasks || [],
            newTaskText:'Привет, новая пременная!'
        };
    }

    handleChange(event) {
         this.setState({
         newTaskText: event.target.value
         });
    }

    render() {
        const { tasks, newTaskText } = this.state;

        return <div className="todos">
           <input value={newTaskText} onChange={this.handleChange.bind(this)} type="text" placeholder="Введите новую задачу"></input>
            <button type="button">Добавить</button>
            <ul>
                {tasks.map(task => <Todo key={task.text} task={task}></Todo>)}
            </ul>
        </div>;
    }
}