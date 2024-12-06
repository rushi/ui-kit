import { defineConfig } from 'tsup'

export default defineConfig({
    target: "node20",
    entry: ['src/index.js'],
    format: ["cjs", "esm"],
    outDir: "dist",
    clean: true,
})
