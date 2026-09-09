# TRIAXIS ／ VO2MAX × 睡眠 × 腸活 リサーチハブ

## 2026-09-09 リニューアル

出典付き研究6件、キーワード検索、分野フィルター、研究背景と限界の開閉、レスポンシブ表示を追加。旧トップは `archive-2026-08.html` に保存しています。

- 本番: https://triaxis-research-hub.vercel.app/
- 編集: `articles.json` と `template.html` を更新し、`node build.mjs` を実行。
- プレビュー: `node serve.cjs` → http://127.0.0.1:4173
- 公開: main への push で Vercel が `node build.mjs` を実行し、`dist` の静的ファイルだけを公開。
- 依存パッケージ不要。Google Fonts 読み込み失敗時はシステムフォントにフォールバック。
- Notionの朝刊を参考に編集し、出典は各記事の原著・公開資料に記載。自動同期は行いません。
- 新着はサイト追加日。論文のオンライン公開日と掲載号は区別しています。

以下は旧版の説明です。

VO2MAX向上・睡眠・腸活の3軸を、Three.js 3D球体メニューからジャンル別に辿る個人リサーチハブ。

## 概要
- **コンセプト**: 意志力ではなく、仕組みで変える。
- **機能**:
  - Three.js 3D icosahedron / nodes インタラクティブメニュー
  - VO2MAX / 睡眠 / 腸活 / 交差点（GUT×SLEEP, GUT×VO2MAX, SLEEP×VO2MAX）のカテゴリ・レベル別論文データベース
  - PRACTICE（明日から回せるアクションプラン）

## テクノロジー
- HTML5 / CSS3 (CSS Variables, Responsive Grid, Dark Mode)
- Vanilla JavaScript (ES6+)
- Three.js (r128)
