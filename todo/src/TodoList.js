import React, { Component } from 'react';
import Todo from './Todo';



class Todolist extends Component {

    render() {
        const todos = this.props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}

            />
        )

        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default Todolist

{
    // 親コンポーネントから渡されたものは this.propsを使って受け取ることができる
    // TodoListから複数のTodoができる時など、子コンポーネントに同じ形式の配列を渡すときは、それらを区別するための絶対に重複しないkeyを設定する必要がある
    // 今回は todo.idをkeyに入れている
    // {...todo}はtodoに入っている要素を全て引き継ぐという意味です
    // returnで配列の入ったtodosを返すことでTodoコンポーネントでpropsとして受け取ることができます。{}で変数展開ができます。
}