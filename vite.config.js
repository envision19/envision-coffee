import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // This increases the limit to 1000kb to stop the warning
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // This splits your libraries (like React) into a separate file 
        // so your main code stays small and fast
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
})