import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        moduleName: "solid-canvaskit-renderer",
        generate: "universal",
      }
    })
  ]
})
