import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ref: https://stackoverflow.com/questions/74987006/tailwindcss-not-working-with-vite-react
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
