import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GoogleMeetBooking',
      formats: ['es', 'umd'],
      fileName: (format) => `google-meet-widget.${format}.js`
    },
    rollupOptions: {
      // Убираем external для standalone сборки
      // React и ReactDOM будут встроены в bundle
      output: {
        // Удаляем globals - они не нужны для standalone
      }
    }
  }
})
