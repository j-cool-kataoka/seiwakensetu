module.exports = {
  plugins: {
    //オートプレフィクサー
    autoprefixer: {},
    //メディアクエリをソートして1つにまとめる
    'postcss-sort-media-queries': {},
    //CSSプロパティの順番をソートする
    'css-declaration-sorter':{order:'smacss'},
  },
}