import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
      pluginReact(),
      pluginModuleFederation({
        name: 'provider',
        exposes: {
          './Button': './src/button.tsx',
          './App': './src/App.tsx',
        }
      })
  ],
});
