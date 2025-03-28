import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { alias } from '../alias'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  resolve: {
    alias,
  },
})
