// 簡単にオブジェクトを生成できる
// クラスとか必要ない
const object = {};

const person = { name: "Ancy", age: 40 };

// JSON = JavaScript Object Notation の略
// JSON をそのままオブジェクトリテラルとして解釈できる

// 関数などもオブジェクトに入れることができる
const product = {
  name: "ミネラルウォーター",
  price: 100,
  getTaxIncludedPrice: function () {
    return Math.floor(this.price * 1.1);
  },
  shomikigen: new Date("2022-01-20"),
};
// 型注釈

let box: { width: number; height: number };
box = {width: "string", height: 100 }
// かたちゅうしゃくをせっていすればコンパイルエラーが起こる
