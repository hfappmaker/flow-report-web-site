# Flow Report — 紹介LP

**https://www.flowreport.app** の紹介ランディングページ（マーケティングサイト）です。

[FlowReport](https://www.flowreport.app)（株式会社FlowTech）は、**フリーランスエンジニア向けの勤怠・作業報告書・請求書 SaaS** です。本リポジトリはそのプロダクト紹介用の静的サイトで、プロダクト本体とは別リポジトリ・別ホストで運用しています。

- 🌐 **本サービス:** https://www.flowreport.app
- 🏢 **運営:** 株式会社FlowTech

## 紹介している主な機能

- 勤怠の月次入力（一括・前月コピー・休日自動判定）
- 作業報告書 Excel 自動生成（クライアント指定テンプレート取込み可）
- 複数の精算方式（上下割 / 中間割 / 固定精算 / 時間単価、税込税抜・端数処理）
- 複数クライアント・契約管理
- 請求書ワンクリック発行、メールテンプレート + mailto / 添付送信
- freee API 連携、AI補助 (OpenAI / Ollama)
- Google OAuth、2要素認証、監査ログ
- Stripe サブスク（14日間トライアル）

## 技術スタック

- [Astro 4.16](https://astro.build/) + `@astrojs/tailwind` 5.1（Node 20.10 のため4系ピン）
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- TypeScript (strict)
- 静的HTML出力、JSはほぼゼロ

## 開発

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ へ static 出力
npm run preview   # ビルド成果物のプレビュー
npm run check     # 型チェック (@astrojs/check)
```

## ディレクトリ

```
src/
  layouts/        Layout / LegalLayout
  components/     Nav / Hero / Problem / Features / HowItWorks / Pricing / FAQ / CTA / Footer
  pages/          index / privacy-policy / terms-of-service / act-on-specified-commercial-transactions
  styles/         global.css
public/           ロゴ・スクリーンショット・favicon
tailwind.config.mjs   brand / mint / ink パレット
```

詳細な開発ガイドは [CLAUDE.md](./CLAUDE.md) を参照してください。
