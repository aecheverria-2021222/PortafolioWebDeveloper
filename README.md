# Portafolio — Alejandro Echeverría Garrido

Sitio web personal y portafolio profesional de **Alejandro Echeverría Garrido**, desarrollador Full Stack.

Construido a mano con **HTML5, CSS3 y JavaScript Vanilla** (sin frameworks ni librerías de UI), siguiendo un lenguaje visual propio: **Soft UI de precisión** con modo claro/oscuro.

---

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3** (custom properties, grid, container/media queries)
- **JavaScript Vanilla** con ES Modules
- **Google Fonts** — Space Grotesk + Inter
- **Font Awesome** — iconografía

Sin build, sin dependencias que instalar.

---

## 📁 Estructura

```
.
├── index.html                 # Landing (una sola página)
├── proyectos/                 # Páginas de detalle de cada proyecto (case studies)
├── css/
│   ├── tokens.css             # Variables de diseño + modo oscuro
│   ├── base.css               # Reset + tipografía + elementos
│   ├── layout.css             # Contenedor, header, footer, grid
│   ├── components.css         # Botones, tarjetas, chips, timeline, formularios…
│   └── sections.css           # Estilos específicos de cada sección
├── js/
│   ├── main.js                # Punto de entrada
│   └── modules/
│       ├── theme.js           # Modo claro/oscuro
│       ├── nav.js             # Menú móvil + scroll-spy
│       ├── reveal.js          # Animaciones al hacer scroll
│       └── form.js            # Validación del formulario
└── assets/                    # Imágenes, favicon, CV
```

---

## ▶️ Cómo ejecutarlo en local

Como el sitio usa **ES Modules**, hay que servirlo por HTTP (no abrir `index.html` con `file://`).

Opciones:

```bash
# Con Python
python -m http.server 8000

# Con Node
npx serve
```

Luego abre `http://localhost:8000`.

En VS Code también puedes usar la extensión **Live Server**.

---

## 🚀 Despliegue (GitHub Pages)

1. Sube el repositorio a GitHub.
2. Settings → Pages → Source: rama `main`, carpeta `/root`.
3. El archivo `.nojekyll` ya está incluido para servir correctamente las carpetas.

También funciona en Netlify o Vercel arrastrando la carpeta (sitio estático).

---

## ✅ Pendiente de completar (contenido real)

Busca los comentarios `TODO` en el código. Lo esencial:

- [ ] URLs reales de GitHub y LinkedIn
- [ ] Correo de contacto (en el Hero, Contacto y Footer)
- [ ] CV en `assets/docs/cv.pdf`
- [ ] Datos de la ficha: ubicación, idiomas, disponibilidad
- [ ] Fechas reales de la Trayectoria
- [ ] Imágenes de proyectos y `assets/img/og-image.png`
- [ ] (Opcional) Foto profesional para el Hero
- [ ] Conectar el formulario a un servicio (Formspree / Netlify Forms)
- [ ] Crear las páginas de detalle en `proyectos/`
