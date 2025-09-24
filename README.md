# 🏀 JunStat

> **Plataforma de estadísticas del Junior C Masculino del CDE Leganés**

## 📖 DescripciónFeatures:

**JunStats** es una aplicación web moderna desarrollada con Astro que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.
- ✅ Minimal styling (make it your own!)

- ✅ 100/100 Lighthouse performance

La plataforma ofrece una experiencia responsive y elegante para consultar estadísticas por jornadas, rendimiento individual de jugadores y análisis detallados de cada partido.
- ✅ SEO-friendly with canonical URLs and OpenGraph data

- ✅ Sitemap support

## ✨ Características
- ✅ RSS Feed support

- ✅ Markdown & MDX support

### 🎯 **Funcionalidades Principales**

- **📊 Estadísticas por jornadas**
- **Datos detallados de cada partido**

## 🚀 Project Structure

- **🏆 Sistema MVP** - Corona automática al mejor jugador por valoración

- **📱 Diseño responsive** - Adaptado para móvil, tablet y escritorioInside of your Astro project, you'll see the following folders and files:

- **🚫 Gestión de sanciones** - Visualización especial para jugadores sancionados

- **⚡ Rendimiento optimizado** - 100/100 en Lighthouse```text

├── public/

### 🎨 **Experiencia de Usuario**├── src/

- **Cards interactivas** en móviles con información completa│   ├── components/

- **Tablas profesionales** en escritorio y tablets│   ├── content/

- **Animaciones suaves** para coronas MVP y elementos sancionados│   ├── layouts/

- **Tipografía personalizada** con fuente Atkinson│   └── pages/

- **Tema visual coherente** con colores del club├── astro.config.mjs

├── README.md

### 🔧 **Tecnología**├── package.json

- **Astro 5.13+** - Framework moderno para sitios estáticos└── tsconfig.json

- **MDX** - Contenido enriquecido con componentes React```

- **TypeScript** - Tipado estático para mayor robustez

- **CSS3** - Estilos avanzados con animaciones y responsive designAstro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- **Sitemap & RSS** - SEO optimizado

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

## 🚀 Inicio Rápido

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

### Prerrequisitos

- **Node.js** 18+ Any static assets, like images, can be placed in the `public/` directory.

- **npm** o **yarn**

## 🧞 Commands

### Instalación

All commands are run from the root of the project, from a terminal:

1. **Clonar el repositorio**

   ```bash| Command                   | Action                                           |

   git clone https://github.com/eloypgweb/JunStats.git| :------------------------ | :----------------------------------------------- |

   cd JunStats| `npm install`             | Installs dependencies                            |

   ```| `npm run dev`             | Starts local dev server at `localhost:4321`      |

| `npm run build`           | Build your production site to `./dist/`          |

2. **Instalar dependencias**| `npm run preview`         | Preview your build locally, before deploying     |

   ```bash| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

   npm install| `npm run astro -- --help` | Get help using the Astro CLI                     |

   ```

## 👀 Want to learn more?

3. **Iniciar servidor de desarrollo**

   ```bashCheck out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

   npm run dev

   ```## Credit



4. **Abrir en el navegador**This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

   ```
   http://localhost:4321
   ```

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build localmente |
| `npm run astro` | Ejecuta comandos CLI de Astro |

## 📂 Estructura del Proyecto

```
JunStats/
├── public/                 # Archivos estáticos
│   ├── favicon.jpg         # Favicon del sitio
│   ├── favicons/           # Iconos en diferentes formatos
│   └── fonts/              # Fuentes personalizadas (Atkinson)
├── src/
│   ├── assets/             # Imágenes del equipo y jornadas
│   │   ├── juncmr.jpeg     # Foto del equipo
│   │   └── jornadas/       # Imágenes por jornada
│   ├── components/         # Componentes reutilizables
│   │   ├── BaseHead.astro  # Meta tags y SEO
│   │   ├── Header.astro    # Navegación principal
│   │   └── Footer.astro    # Pie de página
│   ├── content/            # Contenido del sitio
│   │   └── blog/           # Estadísticas por jornada
│   ├── layouts/            # Plantillas de página
│   │   └── BlogPost.astro  # Layout para jornadas
│   ├── pages/              # Rutas del sitio
│   │   ├── index.astro     # Página principal
│   │   └── blog/           # Sistema de blog/jornadas
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs        # Configuración de Astro
├── package.json            # Dependencias del proyecto
└── tsconfig.json          # Configuración TypeScript
```

## 🏀 Estadísticas Incluidas

### Por Jugador
- **🎯 Puntos** - Anotaciones totales
- **🏹 T2/T3** - Tiros de 2 y 3 puntos convertidos
- **🎳 TL** - Tiros libres (metidos/intentados)
- **🤝 Assists** - Pases de gol
- **🔄 Rebotes** - Ofensivos y defensivos
- **👐 Robos** - Interceptaciones
- **❌ Pérdidas** - Balones perdidos
- **🟨 Faltas** - Infracciones cometidas
- **⭐ Valoración** - Índice de eficiencia

### Características Especiales
- **👑 MVP Automático** - Corona al jugador con mejor valoración
- **🚫 Jugadores Sancionados** - Visualización especial con badge rojo
- **📊 Tablas Responsive** - Cards en móvil, tabla completa en escritorio

## 🎨 Temas Visuales

### Colores Principales
- **Primario**: `#2337ff` (Azul del club)
- **Secundario**: `#1e40af` (Azul oscuro)
- **Acento**: `#dc2626` (Rojo para sanciones)
- **Éxito**: `#16a34a` (Verde para MVP)

### Tipografía
- **Fuente principal**: Atkinson (Regular/Bold)
- **Fallback**: System fonts

## 📱 Responsive Design

### Breakpoints
- **📱 Móvil**: < 768px (Cards individuales)
- **📟 Tablet**: 769px - 1024px (Tabla compacta)
- **🖥️ Desktop**: > 1024px (Tabla completa)

## 🤝 Contribuir

### Para añadir una nueva jornada:

1. **Crear archivo MDX**
   ```
   src/content/blog/[numero]jornada.mdx
   ```

2. **Añadir imagen de presentación**
   ```
   src/assets/jornadas/presJ[numero].png
   ```

3. **Seguir la estructura existente** de la Jornada 1

### Para modificar estilos:
- **Globales**: `src/styles/global.css`
- **Por componente**: En el archivo `.astro` correspondiente

## 🏆 Equipo Junior C Masculino

**Club**: CDE Leganés  
**Categoría**: Junior C Masculino  
**Temporada**: 2024-2025

> *"El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos."* - Michael Jordan

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollado por

**Eloy** - [@eloypgweb](https://github.com/eloypgweb)

---

<div align="center">
  <p>⭐ Si te gusta el proyecto, ¡dale una estrella!</p>
  <p>🏀 <strong>¡Vamos Leganés!</strong> 🏀</p>
</div>