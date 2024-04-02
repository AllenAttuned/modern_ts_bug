import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  output: {
    cleanDistPath: true,
    disableSourceMap: false,
    polyfill: 'off',
    distPath: {
      html: '',
    },
    copy: [
      {
        from: './env/fileToCopy.txt',
        to: '',
        // Remove the " " between `@` and `ts-...` to correct the TS exception to fix the type error
        // @ ts-expect-error
        transform(content) {
          return content;
        },
      },
    ],
  },
  html: {
    disableHtmlFolder: true,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack',
    }),
  ],
  source: {
    mainEntryName: 'index',
  },
});
