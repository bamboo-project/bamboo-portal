import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
  },
  title: false,
  // mfsu:{},
  antd: {
    dark: false,
    compact: false,
  },
  favicon: '/favicon.ico',
  fastRefresh: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
});
