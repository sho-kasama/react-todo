
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';






let Todolist = React.createClass({

    /*
    ステートの初期値を定義
    */

    getInitialState() {
        return {
            newTask: '',
            tasks: [
                '夕飯を作る',
                'ゲージの掃除をする',
                'must to study programing',
            ]
        };
    },

    /*
    新規タスクの入力内容の変更
    */
    changeText(e) {
        this.setState({ newTask: e.target.value });
    },

    /*
    新規タスクを作成
    */

    addNewTask() {
        let newTasks = this.state.tasks;
        newTasks.push(this.state.newTask);
        this.setState({
            newTask: '',
            tasks: newTasks
        });
    },

    /*
    既存タスクを削除
    */
    removeTask(idx) {
        let newTasks = this.state.tasks;
        newTasks.splice(idx, 1);
        this.setState({ tasks: newTasks });

    },

    /*
    UIの描画
    */

    render() {
        let tasks = this.state.tasks.map((t, idx) =>
            < li key={idx} >
                {t}
                < input type='button' value='x' onclick={() => this.removeTask(idx)} />

            </li >
        );

        return (
            <div>
                <input type='text' value={this.state.newTask} onChange={this.changeText} />
                <input type='button' onClick={this.addNewTask} value="追加する" />
                <ul>
                    {tasks}
                </ul>
            </div>
        );
    },
});

/* DOMの描画 */
ReactDOM.render(<TodoList />, document.getElementById('content'));