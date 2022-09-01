
import { defineNuxtConfig } from 'nuxt'
// // https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
//     css: ["~/assets/tailwind.css"],
// import { defineNuxtConfig } from 'nuxt'


//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    build: {
      postcss: {
        postcssOptions: require('./postcss.config.js'),
      },
    }
})
// import { defineNuxtConfig } from 'nuxt'

// // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
// export default defineNuxtConfig({
//   build: {
//     postcss: {
//       postcssOptions: {
//         plugins: {
//           tailwindcss: {},
//           autoprefixer: {},
//         },
//       },
//     },
//   },
// })

// //   css: [
// //     "~/assets/css/tailwind.css"
// //   ],


// // })