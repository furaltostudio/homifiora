import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HOMIFIORA Architectural Atelier',
    short_name: 'HOMIFIORA',
    description: 'Haute-couture architectural monograph atelier. Spaces People Belong To.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090a08',
    theme_color: '#090a08',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
