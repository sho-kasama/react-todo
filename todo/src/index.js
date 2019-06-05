import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

{
    // import ●● from 'ファイル名など': 別のファイルで指定した●●(クラス名や変数)を使うことができます。
    // import React from 'react' はReactを使うファイルでは必須です
    // ReactDOM.render()でHTMLのidのある場所にコンポーネントを挿入します。
    // 今回は今回は、public/index.html にある<div id="root"></div>にAppコンポーネントを挿入しています。
}