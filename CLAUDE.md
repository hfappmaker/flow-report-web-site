# CLAUDE.md

## このリポジトリの位置づけ
[c:/Users/furugakihiromitsu/source/repos/flow-report](c:/Users/furugakihiromitsu/source/repos/flow-report) で開発している
Webアプリ **FlowReport（株式会社FlowTech）** の**紹介LP**。
プロダクト本体（Next.js 16 / Vercelデプロイ）とは別のリポジトリ・別のホスト想定。

## 紹介するプロダクト
**FlowReport** — フリーランスエンジニア向けの勤怠・作業報告書・請求書 SaaS
- 勤怠の月次入力（一括・前月コピー・休日自動判定）
- 作業報告書 Excel 自動生成（クライアント指定テンプレ取込み可）
- 複数の精算方式（上下割 / 中間割 / 固定精算 / 時間単価、税込税抜・端数処理）
- 複数クライアント・契約管理
- 請求書ワンクリック発行
- メールテンプレート + mailto / 添付送信
- freee API 連携、AI補助 (OpenAI / Ollama)
- Google OAuth、2要素認証、監査ログ
- Stripe サブスク（14日間トライアル）

## 技術スタック（このLP）
- **Astro 4.16** + `@astrojs/tailwind` 5.1（Node 20.10 のため4系ピン）
- **Tailwind CSS 3.4**
- **TypeScript** strict
- 静的HTML出力、JSはほぼゼロ。LPに最適

## ブランド
- ロゴ: [public/flow-report.png](public/flow-report.png)（本体アプリと共用、青い書類アイコン + ミントの罫線 + "Flow Report" 文字）
- カラー:
  - Brand Blue `#3b9cf8` (50/100..900は `tailwind.config.mjs` 参照)
  - Mint `#5dd4be`
  - Ink (テキスト) `#0a1428` 〜 `#f7f9fc`
- フォント: Inter (CDN: rsms.me) + Hiragino Sans / Noto Sans JP フォールバック
- トーン: ライト基調、清潔感、フリーランス/個人事業主が信頼できる落ち着き

## ディレクトリ
```
src/
  layouts/Layout.astro        ルート。ライト背景 + 青/ミントのフロートオーブ + ドットグリッド
  components/
    Nav.astro                 ロゴ + 課題/機能/使い方/料金/FAQ + 無料CTA
    Hero.astro                見出し + モック画面（勤怠表 + 作業報告書 + 請求書 + メール送信ボタン）
    Problem.astro             「こんな月末ありませんか」4つのペインカード
    Features.astro            6機能（勤怠/報告書/精算方式/契約管理/請求書/メール+freee）
    HowItWorks.astro          3ステップ + 右側ビジュアル（クライアント一覧 + 生成物カード）
    Pricing.astro             2プラン（Free Trial / Pro ¥1,480）
    FAQ.astro                 6項目 (<details>)
    CTA.astro                 「月末を取り戻そう」
    Footer.astro              3カラム + 株式会社FlowTech クレジット
  pages/index.astro
  styles/global.css
public/
  flow-report.png             本体ロゴ (3000x646)
  favicon.svg                 ブランドカラーで再描画した書類アイコン
tailwind.config.mjs           brand / mint / ink パレット
```

## ⚠️ 要差し替え（仮置き）
LPコピーは README.md と機能一覧から推測して書いた。**プロダクトオーナーの正式コピーが決まったら以下を見直す:**
- **価格** — `Pricing.astro` の `¥1,480 / 月` は仮置き。Stripe側の実価格と整合させる
- **会社情報** — `Footer.astro` の「株式会社FlowTech」は privacy-policy.md から拾った値
- **キャッチコピー** — 「月末の面倒を、ボタンひとつに。」「月末を、取り戻そう。」は提案。ブランドガイド未確認
- **モック内の数値** — Hero モックの `¥792,000` などは仮の表示用

## 編集の流儀
- 文言差し替えは各 `*.astro` のフロントマター配列で一元管理（`features`, `plans`, `steps`, `faqs`, `pains`, `links`, `columns`）
- 新セクションは `src/components/` に追加 → `src/pages/index.astro` に並べる
- 色追加は `tailwind.config.mjs` の `theme.extend.colors` と必要なら `global.css` の `:root` の両方
- アニメは `global.css` の `@keyframes` と `.rise` / `.gradient-text` / `.orb` を流用。`prefers-reduced-motion` で停止する設計

## コマンド
```
npm run dev       # http://localhost:4321
npm run build     # dist/ へ static 出力
npm run preview   # ビルド成果物のプレビュー
npm run check     # 型チェック (@astrojs/check)
```

## 既知の環境制約
- ローカル Node は **20.10.0**。Astro 5+ / Tailwind 4 / Vite 7 は Node 22 必須で動かない（`util.styleText` 不在）
- 解消法: Node 22 を入れた後 `nvm use 22` → `npx @astrojs/upgrade` → `global.css` を `@import "tailwindcss"` + `@theme` 形式へ移行、`astro.config.mjs` を `@tailwindcss/vite` 構成へ切替

## 今後の候補（未実装）
- お問い合わせフォーム実装（Resend or Formspree）
- ブログ / 事例（`src/content/` + MDX）
- `@astrojs/sitemap` （SEO）
- 構造化データ (JSON-LD) で SoftwareApplication / Organization を埋め込み
- 多言語化（英語版が必要になったら `src/pages/en/`）
