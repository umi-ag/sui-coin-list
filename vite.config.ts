import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    dts({
        insertTypesEntry: true,
    }),
],
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      events: 'rollup-plugin-node-polyfills/polyfills/events',
    },
  },
  define: {
    'process.env': process.env ?? {},
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'sui-sdk',
      formats: ['es', 'umd'],
      fileName: (format) => `sui-sdk.${format}.js`,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
