import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const clientPort = env.CLIENT_REACT_PORT
    ? parseInt(env.CLIENT_REACT_PORT)
    : 3000;

  const apiURL = `${env.CLIENT_NODE_HOST}:${env.CLIENT_NODE_PORT}`;

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
          configure: (proxy, _options) => {
            proxy.on('error', (err: NodeJS.ErrnoException, req, _res) => {
              if (err.code === "ECONNREFUSED") {
                console.log(`\x1b[31mProxy Error: ${err.code}\x1b[0m`); // Log the error code
                console.log('\x1b[93m\x1b[1mDid you remember to run the API server?\x1b[0m')
              }
            })
          },
        },
      },
    },
  };
});
