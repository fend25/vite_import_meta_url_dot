import {defineConfig} from 'vite'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    target: 'es2020',
  }
})