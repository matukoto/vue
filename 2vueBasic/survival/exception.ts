try {
	throw new Error("something wrong");
} catch (e) {
	console.log(e.message);
}
// Error オブジェクトをスローするのが一般的だが､何でも投げられる
throw new "error";
/*
 * だがこれはアンチパターン
 *スタックトレースが追えるのは Error オブジェクトだけ
 * TS では catch の変数の型はデフォルトでは any
 * 何でも throw できるから
 * useUnknownInatchVariables を有効にすると catch の変数が unknown 型になる
 * コンパイラーオプションの設定
*/

