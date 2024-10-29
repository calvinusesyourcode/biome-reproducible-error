import { defineConfig } from 'tsup'

export default defineConfig([
  // Core library
  {
    entry: ['core/index.ts'],
    format: ['cjs', 'esm'],
    external: ['shared'],
    dts: true,
  },
])
