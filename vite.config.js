import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bahrain-mosaic-app/', // must match GitHub repo name
});
