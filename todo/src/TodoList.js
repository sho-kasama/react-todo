import React, { Component } from 'react';
import Todo from './Todo';



export default class Todolist extends Component {

    render() {
        if (this.props.hasError) {
            return <h2>error</h2>;
        }
        if (this.props.isLoading) {
            return <h2>loading....</h2>;
        }
        const todos = [];
        for (var i = 0; i < this.props.todos.length; i++) {
            todos.push(
                <Todo
                    key={i}
                    index={i}
                    countTodo={this.props.todos[i].countTodo}
                    title={this.props.todos[i].title}
                    desc={this.props.todos[i].desc}
                    done={this.props.todos[i].done}
                    setTodoStatus={this.props.setTodoStatus}
                    deleteTodoState={this.props.deleteTodoState}
                />
            );
        }

        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

{

    // this.propsで親コンポーネントから(app.js)からhasErrorとisLoadingをとってきて、
    // 条件分岐をしているß
    // App.jsで関数setTodoStatus()をTodoListに渡し、そこからさらにTodoに渡します
    // 








}