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

    handleDelete(id) {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    }

    handleComplete(id) {
        const { tasks } = this.state;
        const completedTask = tasks.find(task => task.id === id);
        if (completedTask === undefined) {
            return;
        }
        if (completedTask.completed === true) {

            completedTask.completed = false;
            this.setState({
                tasks: [
                    completedTask,
                    ...tasks.filter(task => task.id !== id)
                ]
            });
            return;
        }
        completedTask.completed = true;

        this.setState({
            tasks: [
                ...tasks.filter(task => task.id !== id),
                completedTask
            ]
        });
    }
    handleOnEnterPress(event) {
        if (event.key === 'Enter') {
            this.handleAddTask();
        }
    }
    handleAddTask() {
        const { newTaskText } = this.state;
        if (newTaskText.length === 0) {
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
            <div className="add-todo">
                <input 
                    value={newTaskText}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleOnEnterPress.bind(this)}
                    type="text"
                    placeholder="Введите новую задачу"
                ></input>
                <i className="fas fa-plus" onClick={this.handleAddTask.bind(this)}></i>
            </div>
            <ul>
                {tasks.map(task => <Todo
                    key={task.id}
                    task={task}
                    onDelete={this.handleDelete.bind(this)}
                    onComplete={this.handleComplete.bind(this)}
                    ></Todo>)}
            </ul>
        </div>;
    }
}