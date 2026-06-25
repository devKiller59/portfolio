import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'fix-white-flash',
      transformIndexHtml(html) {
        // Inyectamos el color de fondo exacto directamente en la etiqueta html y body
        return html
        .replace(
          '<html lang="es">', // Asegúrate de que coincida con la etiqueta de tu index.html (ej: <html lang="en"> o <html lang="es">)
          '<html lang="es" style="background-color: #2d1d47;">'
        )
        .replace(
          '<body>',
          '<b style="background-color: #2d1d47; margin: 0; min-height: 100vh;">'
        )
        .replace(
          '<div id="root">',
          '<div id="root" style="opacity: 0; transition: opacity 0.3s ease;">'
          )
      },
    },
  ],
  server: {
    port: 3000,
  },
});
