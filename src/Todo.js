import React from 'react';
export class Todo extends React.Component {

    constructor(props) {
        super(props);

        const {  task   } = props;

        this.state = {
            task: task || []
        }
    }

    render() {
       const { task } = this.state;

       return <li>{task.text}</li>
    }
}