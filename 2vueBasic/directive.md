### ディレクティブとは
Vue の機能
標準の HTML に独自の属性を追加し､属性値の式の変化に応じて DOM 操作を行う｡
### 条件付きレンダリング
- v-if
	- 式の結果に応じて DOM 要素を追加削除する
- v-show
	- 式の結果に応じてスタイルの display プロパティの値を変更する
- 使い分け
	- どちらも式の結果に応じて､表示・非表示を切り替える
	- そのため基準は切り替えの頻度と初期表示コスト
	- スタイルの操作よりも DOM の操作のほうがレンダリングのコストが高くなる
	- そのため､頻繁に表示非表示を切り替える場合は v-show

### バインディング
特定の条件のときに UI の見た目を変える事ができる
- v-vind
クラスのバインドとスタイルのバインド

### リストレンダリング
- v-for

### イベントハンドリング
- v-on

### フォーム入力バインディング
- v-model