# Kana-dictionary

KanaAPI の辞書

## Kana のキャラクター設定について
Kanaのキャラクター設定は、kanaファイルで行われます。

ファイルのフォーマットは、

```
正規表現:応答確率:応答時間:応答内容:応答に添える内容:応答の拡張機能(JSON)
```

となっています。

## Kanationary(カナ辞書)について

- kanationary.json → カナ辞書
  - 配列
    - tag → Kana の検索時用のタグ(配列)
    - title → 内容のタイトル(文字列)
    - content → 内容(文字列)

## Kana共通タグ

- user → ユーザ名で置き換えます。
  - 例
    - こんにちは。{user}さん。
