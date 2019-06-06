import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import './css/App.css'


class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      isLoading: false,
      hasError: false,
      todos: todos,
      countTodo: todos.length + 1,
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,

    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  // tidoの完了/未完了を切り替える関数を定義する
  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos })
  }

  // 非同期処理の実装
  fetchData(url) {
    this.setState({ isLoading: true })
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false })
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        let countTodo = this.state.countTodo
        const todos = data.map(data => {
          const todo = Object.assign({}, data, { id: countTodo++, done: false })
          return todo
        })
        this.setState({ todos, countTodo })
      })
      .catch(() => this.setState({ hasError: true }))
  }

  componentDidMount() {
    this.fetchData('data.json');
  }



  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }

}


export default App

{
  // class ●● extends Component{} でコンポーネントと呼ばれるクラスを作成します。これを組み合わせて様々なviewを作れるのがreactの特徴です
  // constructorでは初期値を設定します。super()はComponentを継承するため必須です。
  // this.stateはこのクラスのstateを示しています。今回はtodosという配列に各キーとバリューを設定して起きます
  // render(){}でHTMLとして渡したい変数などを設定し、return()の中に実際に返したいHTMLそのものを記述する、実際にHTMLに近いJSXという記法です。
  // HTMLのclassはJSXではclassNameとなるので気をつける
  // 呼び出したいコンポーネントは <Todolist />のように記述します。さらに、todos={this.state.todos}のようにそのコンポーネントに渡したい内容も書いてあげる
  // これでTodoListでtodosという変数を使えるようになった
  // export default ●● でimportされた時にデフォルトで呼び出されるのを定義している
}