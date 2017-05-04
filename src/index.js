import React from 'react';
import ReactDOM from 'react-dom';
import Create from './component/Create';
import Todo from './component/Todo';
import TodoService from './service/todo';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.service =new TodoService();
        this.service.load();
        this.state = {todos: this.service.todos};
    }

    handleTodoChange(todo) {
        if (todo.isCompleted) {
            this.service.complete(todo.key);
        } else {
            this.service.reopen(todo.key);
        }
        this.setState({todos: this.service.todos});
    }

    handleCreate(title) {
        this.service.create(title);
        this.setState({todos: this.service.todos});
    }

    render() {
        return (
            <div>
                <Create onCreate={this.handleCreate.bind(this)} />
                {this.state.todos.map(it => <Todo key={it.key} todo={it} onChange={this.handleTodoChange.bind(this)}/>)}
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));