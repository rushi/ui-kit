import { defineConfig } from 'tsup'

export default defineConfig({
    target: "node20",
    entry: ['src/index.js', 'tailwind.config.cjs', 'postcss.config.cjs'],
    format: ["esm", "cjs"],
    splitting: true,
    sourceMap: true,
    clean: true,
})
