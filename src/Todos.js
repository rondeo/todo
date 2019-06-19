import React from 'react';
import { Todo } from './Todo';
import "./Todos.css";

let idShift = 1000; 

export class Todos extends React.Component {
    constructor(props) {
        super(props);

        const { tasks } = props;

        this.state = {
            tasks: tasks || [],
            newTaskText: ''
        };
    }

    handleChange(event) {
        this.setState({
            newTaskText: event.target.value
        });
    }

    handleAddTask() {
        const { newTaskText } = this.state;
        
        if (newTaskText.length == 0) {
            alert("Введите текст задачи!");
            return;
        }

        this.setState({
            tasks: [
                {
                    id: idShift++,
                    text: newTaskText
                },
                ...this.state.tasks
            ],
            newTaskText: ''
        });
    }

    render() {
        const { tasks, newTaskText } = this.state;

        return <div className="todos">
            <input value={newTaskText} onChange={this.handleChange.bind(this)} type="text" placeholder="Введите новую задачу"></input>
            <button onClick={this.handleAddTask.bind(this)} type="button">Добавить</button>
            <ul>
                {tasks.map(task => <Todo key={task.id} task={task}></Todo>)}
            </ul>
        </div>;
    }
}