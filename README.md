# Logue

Phaserを使用したゲームプロジェクト

## 開発環境のセットアップ

### 必要条件
- Node.js (v14以上)
- Yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/hchaki/logue.git
cd logue

# 依存関係のインストール
yarn install
```

### 開発サーバーの起動

```bash
yarn start
```

ブラウザで http://localhost:1234 を開いてゲームを確認できます。

### ビルド

```bash
yarn build
```

ビルド後のファイルは `dist` ディレクトリに出力されます。

## 技術スタック

- [Phaser 3](https://phaser.io/) - HTML5ゲームフレームワーク
- [Parcel](https://parceljs.org/) - ウェブアプリケーションバンドラー
