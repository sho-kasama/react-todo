import React, { Component } from 'react'
import './css/form.css'

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input name="title" type="text" placeholder="タイトル *必須やで" defaultValue="reactの勉強" /><br />
                    <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています!"></textarea><br />
                    <button type="submit">todoを作成</button>
                </form>
            </div>
        )
    }
}

export default Form

{

    // Formタグを使って通常のHTML同様のフォームを作る
    // 入力するのが面倒ならdefaultValueを作成する

}