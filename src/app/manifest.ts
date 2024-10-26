import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Syed Faizan | Robo',
        short_name: 'Robo',
        description: 'Play with Virtual Robo',
        start_url: '/',
        display: 'standalone',
        background_color: '#808080',
        theme_color: '#808080',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            // {
            //     src: "/android-chrome-192x192.png",
            //     sizes: "192x192",
            //     type: "image/png"
            // },
            // {
            //     src: "/android-chrome-512x512.png",
            //     sizes: "512x512",
            //     type: "image/png"
            // }
        ]
    }

}
