import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './css/App.css'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      countTodo: 1,
      countDone: 0,
      level: 1,
      num: 1,
      nextLevel: 1
    }
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos })
        this.setState({ countTodo: this.state.countTodo + this.state.todos.length })
      }
      )
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidMount() {
    this.fetchData('data1.json');
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("タイトルを入力してください");
      return;
    }
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();

    if (todos.filter(todo => todo.title === title).length > 0) {
      alert("同じタイトルのtodoがあります");
      return;
    }

    todos.push({
      title: title,
      desc: desc,
      done: false,
      countTodo: this.state.countTodo
    });
    const countTodo = this.state.countTodo + 1;
    this.setState({ todos });
    this.setState({ countTodo })

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  setTodoStatus(clickTodo) {
    let countDone = this.state.countDone;
    let level = this.state.level;
    let num = this.state.num;
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.index];
    todo.done = !todo.done;
    todos[clickTodo] = todo;

    if (todo.done) {
      countDone++;
    } else {
      countDone--;
    }

    while (countDone >= num) {
      level++;
      if (num === 0) {
        num += 2;
      } else {
        num += level;
      }
      console.log(countDone, num);
    }
    const nextLevel = num - countDone;

    this.setState({ todos });
    this.setState({ countDone });
    this.setState({ level });
    this.setState({ num });
    this.setState({ nextLevel });
  }

  deleteTodoState(clickTodo) {
    const todos = this.state.todos.slice();
    todos.splice(clickTodo.index, 1);
    this.setState({ todos });
  }

  render() {
    let undoneNum = 0;

    this.state.todos.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });

    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <h2>完了：{this.state.countDone}　　残り：{undoneNum}</h2>
        <h3>Lv. {this.state.level}　(次のレベルまで{Math.round(this.state.nextLevel)})</h3>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList // 呼び出したいコンポーネントを記述している ( 今回の場合はTodolist )
          todos={this.state.todos}  // さらにコンポーネントに渡したい内容も書いてあげる。これでTodolistでtodosという変数が使えるようになる。
          setTodoStatus={this.setTodoStatus.bind(this)}
          deleteTodoState={this.deleteTodoState.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default App // import された時にデフォルトで呼び出されたものを定義します


{

  // class ●● extends Component{} でコンポーネントと呼ばれるクラスを作成してる
  // constructorは初期値を設定します
  // superはComponentを継承するため必須です
  // コンポーネントの状態はインスタンス変数stateで保持する
  // stateはコンストラクタ内で定義する
  // stateを変更する際には、setState()を介して設定する
  // key = 連続する要素を識別するためのするための名前のこと
  // リスト構造の要素に対してkeyを指定することでそれらの要素が非効率にレンダリングされることを防ぐ



  // fetchData()を定義し非同期処理の中身を記述します。
  // まず、isLoading: true　というstateをsetしデータロード中であることを定めます
  // fectchメソッドの.then()を使うことで段階を踏んで処理ができます
  // 一つ目の.thenではresponseのokプロパティでアクセスの判定をします, trueの場合は正常にアクセスできているので isLoadingをfalseにします
  // 二つ目の.thenでは .json()メソッドでresponceがjsonであることを定義しています。1行のアロー関数なので自動的にreturnされています
  // 三つ目は、アロー関数で todoとcountTodoが、setStateでリセットされている(?)
  // どこかで処理がうまくいかなかった場合は,catch()が呼ばれるため hasError: ture というstateをsetします



  // 最後に fetchData()を起動時に呼び出すようにする。componentDidMount() はcomponentがDOMに追加された後で自動的に呼ばれる
  // この中で先ほど定義した、fetchData()を呼び出し、引数にdata.jsonを渡します
  // 


  // 関数handleSubmit(e)を定義します。e.preventDefault()で画面の更新がされないようにします
  // またe.target.(name属性).value でフォームの中身を取り出すことができます
  // .slice() でコピーされた新しい配列を作り、stateが直接変更されることを防ぎます
  // 配列todosにTodoの中身をpushし、setState()でstateを更新します。


  // Todoの完了/未完了　を切り替える関数setTodoStatus()を定義します。
  // handleSubmit()の時と同じく.sliceで新しくコピーした配列を使います
  // todo.done は true/falseのBoolean型なので、!マークで審議を反転させることができます。
  // これをtodosに入れ直し、setState()で更新します
  // 関数setTodoStatusを、TodoListに渡しましょう。.bind()を忘れなく




  // 関数handleSubmit(e)を定義します。4
  // 126, Form onSubmit={this.handleSubmit.bind(this)} とし、FromコンポーネントでhandleSubmit()という関数が使えるようにする
  // this.handleSubmit(this)とすることで、このthisは呼び出された先(この場合はFormコンポーネント)になっていますし、.bint(this)をつけることでをつけることでthisをこのコンポーネントに束縛できます
  // 126,127, 呼び出したいコンポーネントを記述している


  // ライフサイクルイベント
  // 特定の名前のメソッドをコンポーネントに定義しておくと、コンポーネントの状態が変わった際にそれら自動的に呼ばれる( = ライフサイクルイベント)







}