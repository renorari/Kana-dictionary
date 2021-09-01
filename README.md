# Kana-dictionary

KanaAPI の辞書

## Kana のキャラクター辞書(設定)について⚠️廃止⚠️

- character.json
  - version → Kanaキャラクターバージョン(何か追加・削除する度に0.0.1上げる)(何か変更する度に0.0.0.1上げる)
  - dictionary → Kana キャラクター辞書全体の応答に使われる辞書
    - 配列 → 順番通りに辞書 ID となる
  - full → Kana に送られたメッセージを完全に一致して返答するメッセージ
    - 完全一致のタグ
      - word → 返答のワード(辞書 ID もしくは文字列)
      - second_word → 追加の返答のワード(辞書 ID もしくは文字列)(-1 にすると無効化)
  - match → Kana に送られたメッセージの一部に一致して返信するメッセージ
    - 一部一致のタグ
      - word → 返答のワード(辞書 ID もしくは文字列)
      - second_word → 追加の返答のワード(辞書 ID もしくは文字列)(-1 にすると無効化)

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
