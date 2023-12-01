import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const clientPort = env.CLIENT_REACT_PORT
    ? parseInt(env.CLIENT_REACT_PORT)
    : 3000;

  const apiURL = `${env.CLIENT_NODE_HOST}:${env.CLIENT_NODE_PORT}`;

  console.log(apiURL);

  return {
    plugins: [react()],
    envPrefix: "CLIENT_",
    server: {
      port: clientPort,
      strictPort: true,
      proxy: {
        "/api": {
          target: apiURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
