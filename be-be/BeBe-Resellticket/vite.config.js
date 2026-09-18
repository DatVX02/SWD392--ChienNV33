<<<<<<< HEAD:be-be/BeBe-Resellticket/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
>>>>>>> 2150929c1a687402a3199817b39da69753a3d87b:FE/ticket-reused/vite.config.js

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react()],
});
