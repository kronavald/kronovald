import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                rewrite: (path) => path.replace(/^\/api/, ""),
                changeOrigin: true,
                secure: false,
                ws: true,
                configure: (proxy, _options) => {
                    proxy.on("error", (err, _req, _res) => {
                        console.log("proxy error", err)
                    })
                    proxy.on("proxyReq", (_, req, _res) => {
                        console.log("Sending Request to the Target:", req.method, req.url)
                    })
                    proxy.on("proxyRes", (proxyRes, req, _res) => {
                        console.log("Received Response from the Target:", proxyRes.statusCode, req.url)
                    })
                },
            },
        },
    },
})
