// @astrojs/tailwind は Astro 6+ 非対応のため、Tailwind 3 を PostCSS 経由で読み込む
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
