import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 5173, // use the default vite dev port
    allowedHosts: ['.ahojreality.sk', 'localhost', '127.0.0.1'],
    proxy: {
      '/api': {
        target: mode === "development"
            ? "http://localhost:5000"
            : "http://localhost:5000", // or your backend domain
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));