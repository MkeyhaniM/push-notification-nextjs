import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: "red",
    theme_color: "blue",
    id: "/manifest.json",
    icons: [
       {
          src: "/file-manifest.192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
       {
         src: "/file-manifest.256x256.png",
         sizes: "256x256",
         type: "image/png",
      }
    ],
    screenshots:[
      {
         src: "/file-manifest.512x512.png",
         sizes: "512x512",
         type: "image/png"
      },
      {
        src: "/file-manifest.1024x1024.png",
        sizes: "1024x1024",
        type: "image/png",
        form_factor:"wide"
     }
    ]
  }
}