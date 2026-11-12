# Sanjo Rock — sitio web

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni compilación). Funciona en GitHub Pages tal cual.

## Estructura

```
index.html      Estructura de la página
styles.css      Identidad visual y animaciones
main.js         Comportamiento (cuenta regresiva, fondo, filtros, lector de notas)
content.js      TODO el contenido editable
assets/
  logos/        Logo del festival, bandas del line up y organizadores (PNG transparente)
  img/          Fotos y placas de las notas, logos de auspiciantes y placas de stands/publicidad
  fonts/        Antonio y tipografía script
videos_bandas/  Videos de las bandas (los sube el equipo; ver LEEME.txt)
  favicon.png   Ícono de la pestaña
  og.jpg        Imagen al compartir el link (WhatsApp, redes)
```

## Actualizar contenido (solo `content.js`)

- **Nueva nota:** copiar un bloque de `posts` y pegarlo al principio. Campos: `cat` (`Historia`, `Novedades` o `Bandas`), `date` (`AAAA-MM-DD`), `title`, `excerpt` (la bajada), `cover` (imagen principal, opcional) y `body`.
  En `body`, cada texto es un párrafo. Admite `*cursiva*`, `**negrita**` y `[texto](https://enlace)`. Un párrafo que es solo `**negrita**` funciona como subtítulo. Para insertar una imagen: `{ img: 'assets/img/foto.jpg', alt: 'descripción', max: 300 }`.
  Subí las fotos a `assets/img/`. Las notas se ordenan solas por fecha, de la más nueva a la más vieja.
- **Fecha y hora del evento:** `event.start`. La cuenta regresiva se ajusta sola y, pasado el evento, la portada muestra "Estuve".
- **Fechas (Pre Sanjo Rock, etc.):** lista `events`. La próxima fecha se marca sola.
- **Sumar una banda:** subir su logo a `assets/logos/` y agregar una línea en `lineup`. Con `time: '21:30'` aparece el horario. Con `post: 'id-de-la-nota'` abre su nota.
- **Videos de las bandas (Sanjo TV):** subir el archivo a `videos_bandas/` y poner su nombre, sin extensión, en `video` de la banda. La extensión y la carpeta se cambian en `videos` (una sola vez). Si un video todavía no está subido, esa banda muestra "Sin señal".
- **Horarios:** `event.doors` (apertura del predio) y `event.timeLabel` (bandas).
- **Auspiciantes:** agregar una línea en `sponsors.items` con `name`, `logo` (en `assets/img/`), `url` (opcional) y `bg` (color de fondo del logo, opcional; por defecto negro).
- **Stands y publicidad:** precios y placas en `advertise.groups`.
- **Merch y materiales:** completar `merch.items` y `materials.items`. Mientras estén vacíos, esas secciones no se muestran.
- **Redes y contacto:** `social` y `advertise.ctaUrl`.

## Tipografías

- **Antonio Semibold:** incluida.
- **ChopinScript:** copiar el archivo a `assets/fonts/` como `ChopinScript.woff2` (o `ChopinScript.otf`). Se aplica automáticamente. Mientras no esté, el sitio usa una tipografía script de reemplazo.

## Publicar en GitHub Pages

1. Subir el contenido de esta carpeta a la raíz del repositorio (reemplazando los archivos actuales).
2. Conservar el archivo `CNAME` que ya tiene el repositorio, para mantener el dominio sanjorock.com.ar.

## Probar en la computadora

```
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.
