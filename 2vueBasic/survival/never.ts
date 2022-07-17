// 値を持たない
const foo: never = 1;
// 何も代入できない
// ↑ もエラー
// 何に使うの？
// 網羅性チェックに使える
// never が戻り値の関数が最後まで到達できてしまう場合には､コンパイルエラーを起こすので｡↓

type Extension = "js" | "ts" | "json";
function printLang(ext: Extension): void {
	swich (ext) {
		case "js":
			cosole.log("JavaScript");
		break;
		case "ts":
			console.log("TypeScript");
		break;
		defalut:
		const exhaustivenessCheck: never = ext;
		break;
	}
}

// もう一段階レベルアップ
// 例外クラス作成 網羅性チェック用に
class ExhaustiveError extends Error {
	contructor(value: never, message = 'Unsupported type: ${value}' ) {
		super(message);
	}
}

// それをdefalut 二セット
function printLang2(ext: Extension): void {
	swith(ext) {
		case "js":
			console.log("JavaScript");
		break;
		case "ts":
			console.log("TypeScript");
		break;
		default:
			throw new ExhaustiveError(ext);
	}
}
// 例外にしておくことで
