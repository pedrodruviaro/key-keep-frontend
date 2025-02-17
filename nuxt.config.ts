import { AppPreset } from "./assets/primevue/themes/AppPreset"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@nuxt/fonts"],
  primevue: {
    options: {
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: false || "none",
        },
      },
    },
  },
  css: ["primeicons/primeicons.css"],

  // @ts-ignore
  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Raleway: true,
    },
  },
})
