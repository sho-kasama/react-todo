import React, { Component } from 'react';
import TodoList from './TodoList';
import './css/App.css'


class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <TodoList
          todos={this.state.todos}
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