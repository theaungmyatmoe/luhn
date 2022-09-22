import {defineConfig} from "vite";
import {fileURLToPath, URL} from "url";
import dts from "vite-plugin-dts";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    build: {
        lib: {
            name: 'luhn',
            entry: fileURLToPath(new URL('./src/luhn.ts', import.meta.url)),
            formats: ['es', 'umd', 'cjs'],
        },

    },
    plugins: [
        dts()
    ]
})