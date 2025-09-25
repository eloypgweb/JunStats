# 🏀 JunStats# 🏀 JunStat



> **Plataforma de estadísticas y análisis del equipo de baloncesto Junior C Masculino del CDE Leganés**> **Plataforma de estadísticas del Junior C Masculino del CDE Leganés**



## 📖 Descripción## 📖 DescripciónFeatures:



**JunStats** es una aplicación web moderna desarrollada con **Astro** que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.**JunStats** es una aplicación web moderna desarrollada con Astro que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.

- ✅ Minimal styling (make it your own!)

La plataforma ofrece una experiencia **responsive** y **profesional** para consultar estadísticas por jornadas, rendimiento individual de jugadores, análisis detallados de cada partido y un completo catálogo de jugadas del equipo.

- ✅ 100/100 Lighthouse performance

## ✨ Características

La plataforma ofrece una experiencia responsive y elegante para consultar estadísticas por jornadas, rendimiento individual de jugadores y análisis detallados de cada partido.

### 🎯 **Funcionalidades Principales**- ✅ SEO-friendly with canonical URLs and OpenGraph data



- **📊 Jornadas detalladas** - Estadísticas completas de cada partido- ✅ Sitemap support

- **🏆 Sistema MVP automático** - Corona al mejor jugador por valoración

- **⚡ Catálogo de jugadas** - Videos explicativos de las tácticas del equipo## ✨ Características

- **📱 Diseño 100% responsive** - Optimizado para móvil, tablet y escritorio- ✅ RSS Feed support

- **🚫 Gestión de sanciones** - Visualización especial para jugadores sancionados

- **⚡ Rendimiento optimizado** - 100/100 en Lighthouse Performance- ✅ Markdown & MDX support

- **🎨 Interfaz moderna** - Diseño limpio y profesional

### 🎯 **Funcionalidades Principales**

### 🎮 **Experiencia de Usuario**

- **📊 Estadísticas por jornadas**

- **📱 Cards interactivas** en móviles con información completa- **Datos detallados de cada partido**

- **📊 Tablas profesionales** en escritorio y tablets

- **✨ Animaciones suaves** para coronas MVP y elementos especiales## 🚀 Project Structure

- **🎨 Tipografía personalizada** con fuente Atkinson

- **🏀 Tema visual coherente** con colores del club- **🏆 Sistema MVP** - Corona automática al mejor jugador por valoración



### 🔧 **Stack Tecnológico**- **📱 Diseño responsive** - Adaptado para móvil, tablet y escritorioInside of your Astro project, you'll see the following folders and files:



- **⚡ Astro 5.13+** - Framework moderno para sitios estáticos- **🚫 Gestión de sanciones** - Visualización especial para jugadores sancionados

- **🎨 Archivos .astro** - Componentes optimizados sin JavaScript innecesario

- **📊 Sistema JSON** - Gestión eficiente de datos de jornadas- **⚡ Rendimiento optimizado** - 100/100 en Lighthouse```text

- **🎯 TypeScript** - Tipado estático para mayor robustez

- **📱 CSS3 moderno** - Estilos avanzados con Grid, Flexbox y animaciones├── public/

- **🔍 SEO optimizado** - Sitemap automático y RSS feed

### 🎨 **Experiencia de Usuario**├── src/

## 🚀 Inicio Rápido

- **Cards interactivas** en móviles con información completa│   ├── components/

### Prerrequisitos

- **Tablas profesionales** en escritorio y tablets│   ├── content/

- **Node.js** 18+ 

- **npm**, **yarn** o **pnpm**- **Animaciones suaves** para coronas MVP y elementos sancionados│   ├── layouts/



### Instalación- **Tipografía personalizada** con fuente Atkinson│   └── pages/



1. **Clonar el repositorio**- **Tema visual coherente** con colores del club├── astro.config.mjs

   ```bash

   git clone https://github.com/eloypgweb/JunStats.git├── README.md

   cd JunStats

   ```### 🔧 **Tecnología**├── package.json



2. **Instalar dependencias**- **Astro 5.13+** - Framework moderno para sitios estáticos└── tsconfig.json

   ```bash

   npm install- **MDX** - Contenido enriquecido con componentes React```

   ```

- **TypeScript** - Tipado estático para mayor robustez

3. **Iniciar servidor de desarrollo**

   ```bash- **CSS3** - Estilos avanzados con animaciones y responsive designAstro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

   npm run dev

   ```- **Sitemap & RSS** - SEO optimizado



4. **Abrir en el navegador**There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

   ```

   http://localhost:4321## 🚀 Inicio Rápido

   ```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

## 🧞 Comandos Disponibles

### Prerrequisitos

| Comando | Descripción |

|---------|-------------|- **Node.js** 18+ Any static assets, like images, can be placed in the `public/` directory.

| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |

| `npm run build` | Construye la aplicación para producción en `./dist/` |- **npm** o **yarn**

| `npm run preview` | Previsualiza la build localmente |

| `npm run astro ...` | Ejecuta comandos CLI de Astro |## 🧞 Commands

| `npm run astro -- --help` | Ayuda del CLI de Astro |

### Instalación

## 📂 Estructura del Proyecto

All commands are run from the root of the project, from a terminal:

```

JunStats/1. **Clonar el repositorio**

├── public/                    # 📁 Archivos estáticos

│   ├── favicon.jpg           # 🖼️ Favicon del sitio   ```bash| Command                   | Action                                           |

│   ├── favicons/             # 📱 Iconos en diferentes formatos

│   └── fonts/                # 🔤 Fuentes personalizadas (Atkinson)   git clone https://github.com/eloypgweb/JunStats.git| :------------------------ | :----------------------------------------------- |

├── src/

│   ├── assets/               # 🖼️ Imágenes y recursos   cd JunStats| `npm install`             | Installs dependencies                            |

│   │   ├── campobasket.jpg   # 🏀 Imagen del campo

│   │   ├── juncmr.jpeg       # 📸 Foto del equipo   ```| `npm run dev`             | Starts local dev server at `localhost:4321`      |

│   │   ├── totaltemporada.png # 📊 Tabla de temporada

│   │   ├── jornadas/         # 📅 Imágenes por jornada (presJ1.png, presJ2.png...)| `npm run build`           | Build your production site to `./dist/`          |

│   │   └── jugadas/          # ⚡ Videos de jugadas (MP4 y WebM)

│   ├── components/           # 🧩 Componentes reutilizables2. **Instalar dependencias**| `npm run preview`         | Preview your build locally, before deploying     |

│   │   ├── BaseHead.astro    # 🏷️ Meta tags y SEO

│   │   ├── Header.astro      # 🧭 Navegación principal   ```bash| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

│   │   ├── Footer.astro      # 👣 Pie de página

│   │   ├── FormattedDate.astro # 📅 Formateo de fechas   npm install| `npm run astro -- --help` | Get help using the Astro CLI                     |

│   │   └── HeaderLink.astro  # 🔗 Enlaces de navegación

│   ├── data/                 # 📊 Datos estructurados   ```

│   │   └── jornadas.json     # 📋 Metadatos de jornadas

│   ├── layouts/              # 🎨 Plantillas de página## 👀 Want to learn more?

│   │   ├── BlogPost.astro    # 📝 Layout genérico (compatible)

│   │   └── JornadaPost.astro # 🏀 Layout específico para jornadas3. **Iniciar servidor de desarrollo**

│   ├── pages/                # 🛣️ Rutas del sitio

│   │   ├── index.astro       # 🏠 Página principal   ```bashCheck out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

│   │   ├── jugadas.astro     # ⚡ Catálogo de jugadas

│   │   ├── rss.xml.js        # 📡 Feed RSS   npm run dev

│   │   └── jornadas/         # 📊 Sistema de jornadas

│   │       ├── index.astro   # 📋 Lista de jornadas   ```## Credit

│   │       ├── jornada1.astro # 🥇 Primera jornada

│   │       └── jornada2.astro # 🥈 Segunda jornada

│   ├── styles/

│   │   └── global.css        # 🎨 Estilos globales4. **Abrir en el navegador**This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

│   └── consts.ts             # ⚙️ Constantes del sitio

├── astro.config.mjs          # ⚙️ Configuración de Astro   ```

├── package.json              # 📦 Dependencias del proyecto   http://localhost:4321

└── tsconfig.json             # 🔧 Configuración TypeScript   ```

```

## 🛠️ Scripts Disponibles

## 🏀 Estadísticas Incluidas

| Comando | Descripción |

### Por Jugador y Jornada|---------|-------------|

- **🎯 Puntos** - Total de anotaciones| `npm run dev` | Inicia el servidor de desarrollo |

- **🏹 T2/T3** - Tiros de 2 y 3 puntos convertidos  | `npm run build` | Construye la aplicación para producción |

- **🎳 TL** - Tiros libres (metidos/intentados)| `npm run preview` | Previsualiza la build localmente |

- **🤝 Assists** - Pases de gol| `npm run astro` | Ejecuta comandos CLI de Astro |

- **🔄 Rebotes** - Capturas ofensivas y defensivas

- **👐 Robos** - Interceptaciones al rival## 📂 Estructura del Proyecto

- **❌ Pérdidas** - Balones perdidos

- **🟨 Faltas** - Infracciones personales```

- **⭐ Valoración** - Índice de eficiencia ACBJunStats/

├── public/                 # Archivos estáticos

### Características Visuales Especiales│   ├── favicon.jpg         # Favicon del sitio

- **👑 MVP Automático** - Corona dorada al jugador con mejor valoración│   ├── favicons/           # Iconos en diferentes formatos

- **🚫 Jugadores Sancionados** - Badge rojo con visualización especial│   └── fonts/              # Fuentes personalizadas (Atkinson)

- **📊 Responsive Design** - Cards en móvil, tablas completas en desktop├── src/

- **🎨 Animaciones** - Transiciones suaves y efectos visuales│   ├── assets/             # Imágenes del equipo y jornadas

│   │   ├── juncmr.jpeg     # Foto del equipo

## ⚡ Jugadas del Equipo│   │   └── jornadas/       # Imágenes por jornada

│   ├── components/         # Componentes reutilizables

### Jugadas Disponibles│   │   ├── BaseHead.astro  # Meta tags y SEO

- **🏃 Transi 1** - Jugada de transición rápida con 5 abiertos│   │   ├── Header.astro    # Navegación principal

- **👁️ Blind** - Jugada de fondo con bloqueo ciego│   │   └── Footer.astro    # Pie de página

- **🏃 Short** - Saque de banda con bloqueos consecutivos│   ├── content/            # Contenido del sitio

│   │   └── blog/           # Estadísticas por jornada

### Jugadas en Desarrollo│   ├── layouts/            # Plantillas de página

- **🖐️ Palma** - Jugada estática con carretón│   │   └── BlogPost.astro  # Layout para jornadas

- **🔨 Hammer** - Jugada con ascensor de bloqueos│   ├── pages/              # Rutas del sitio

│   │   ├── index.astro     # Página principal

Cada jugada incluye:│   │   └── blog/           # Sistema de blog/jornadas

- **🎥 Video explicativo** (MP4 y WebM para compatibilidad)│   └── styles/

- **📝 Descripción detallada** de la ejecución│       └── global.css      # Estilos globales

- **🎯 Situaciones de uso** recomendadas├── astro.config.mjs        # Configuración de Astro

- **👥 Posicionamiento** de cada jugador├── package.json            # Dependencias del proyecto

└── tsconfig.json          # Configuración TypeScript

## 🎨 Diseño Visual```



### Paleta de Colores## 🏀 Estadísticas Incluidas

- **🔵 Primario**: `#2337ff` (Azul institucional)

- **🔷 Secundario**: `#1e40af` (Azul oscuro para contraste)  ### Por Jugador

- **🔴 Alerta**: `#dc2626` (Rojo para sanciones)- **🎯 Puntos** - Anotaciones totales

- **🟢 Éxito**: `#16a34a` (Verde para MVP)- **🏹 T2/T3** - Tiros de 2 y 3 puntos convertidos

- **⚫ Neutros**: Escala de grises para texto y fondos- **🎳 TL** - Tiros libres (metidos/intentados)

- **🤝 Assists** - Pases de gol

### Tipografía- **🔄 Rebotes** - Ofensivos y defensivos

- **Principal**: Atkinson (Regular/Bold) - Fuente moderna y legible- **👐 Robos** - Interceptaciones

- **Fallback**: System UI, sans-serif- **❌ Pérdidas** - Balones perdidos

- **Iconos**: Emojis nativos para mejor compatibilidad- **🟨 Faltas** - Infracciones cometidas

- **⭐ Valoración** - Índice de eficiencia

## 📱 Responsive Breakpoints

### Características Especiales

| Dispositivo | Ancho | Comportamiento |- **👑 MVP Automático** - Corona al jugador con mejor valoración

|-------------|--------|----------------|- **🚫 Jugadores Sancionados** - Visualización especial con badge rojo

| **📱 Móvil** | < 768px | Cards individuales con estadísticas completas |- **📊 Tablas Responsive** - Cards en móvil, tabla completa en escritorio

| **📟 Tablet** | 768px - 1024px | Tabla compacta optimizada |

| **🖥️ Desktop** | > 1024px | Tabla completa con todas las columnas |## 🎨 Temas Visuales



## 🛠️ Desarrollo### Colores Principales

- **Primario**: `#2337ff` (Azul del club)

### Para añadir una nueva jornada:- **Secundario**: `#1e40af` (Azul oscuro)

- **Acento**: `#dc2626` (Rojo para sanciones)

1. **Crear archivo Astro**- **Éxito**: `#16a34a` (Verde para MVP)

   ```bash

   src/pages/jornadas/jornada[N].astro### Tipografía

   ```- **Fuente principal**: Atkinson (Regular/Bold)

- **Fallback**: System fonts

2. **Añadir imagen de presentación**

   ```bash## 📱 Responsive Design

   src/assets/jornadas/presJ[N].png

   ```### Breakpoints

- **📱 Móvil**: < 768px (Cards individuales)

3. **Actualizar datos JSON**- **📟 Tablet**: 769px - 1024px (Tabla compacta)

   ```json- **🖥️ Desktop**: > 1024px (Tabla completa)

   // src/data/jornadas.json

   {## 🤝 Contribuir

     "id": "jornada[N]",

     "title": "Jornada [N]",### Para añadir una nueva jornada:

     "description": "Resumen de la jornada [N] de la temporada.",

     "pubDate": "2025-XX-XX",1. **Crear archivo MDX**

     "heroImage": "/src/assets/jornadas/presJ[N].png",   ```

     "opponent": "Nombre del rival",   src/content/blog/[numero]jornada.mdx

     "slug": "jornada[N]"   ```

   }

   ```2. **Añadir imagen de presentación**

   ```

### Para añadir una nueva jugada:   src/assets/jornadas/presJ[numero].png

   ```

1. **Subir videos** en `src/assets/jugadas/`

2. **Actualizar** `src/pages/jugadas.astro`3. **Seguir la estructura existente** de la Jornada 1

3. **Seguir estructura** de jugadas existentes

### Para modificar estilos:

## 🏆 Equipo Junior C Masculino- **Globales**: `src/styles/global.css`

- **Por componente**: En el archivo `.astro` correspondiente

**🏀 Club**: CDE Leganés  

**📊 Categoría**: Junior C Masculino  ## 🏆 Equipo Junior C Masculino

**📅 Temporada**: 2024-2025  

**🌐 Web**: [JunStats](https://junstats.vercel.app)**Club**: CDE Leganés  

**Categoría**: Junior C Masculino  

### Plantilla Actual**Temporada**: 2024-2025

- 👨‍🏫 **Entrenador**: [Nombre del entrenador]

- 👥 **Jugadores**: 12 jugadores activos> *"El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos."* - Michael Jordan

- 🏟️ **Pabellón**: [Nombre del pabellón]

## 📄 Licencia

## 📊 SEO y Performance

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

### Métricas Lighthouse

- **⚡ Performance**: 100/100## 👨‍💻 Desarrollado por

- **♿ Accessibility**: 100/100  

- **🔍 SEO**: 100/100**Eloy** - [@eloypgweb](https://github.com/eloypgweb)

- **💡 Best Practices**: 100/100

---

### Optimizaciones

- ✅ **Imágenes optimizadas** con formato WebP<div align="center">

- ✅ **Videos en múltiples formatos** (MP4/WebM)  <p>⭐ Si te gusta el proyecto, ¡dale una estrella!</p>

- ✅ **Carga diferida** de contenido multimedia  <p>🏀 <strong>¡Vamos Leganés!</strong> 🏀</p>

- ✅ **Compresión automática** de assets</div>
- ✅ **Meta tags completos** para redes sociales
- ✅ **Sitemap automático** para buscadores
- ✅ **RSS Feed** para suscriptores

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollado por

**Eloy Pérez González** - [@eloypgweb](https://github.com/eloypgweb)

### Contacto
- 🐦 Twitter: [@eloy_6lega](https://x.com/eloy_6lega)
- 📸 Instagram: [@eloyypg](https://instagram.com/eloyypg)
- 💼 GitHub: [@eloypgweb](https://github.com/eloypgweb)

## 🙏 Agradecimientos

- **🏀 CDE Leganés** - Por el apoyo al proyecto
- **👥 Jugadores del Junior C** - Por su dedicación y esfuerzo
- **🚀 Astro Team** - Por el increíble framework
- **🎨 Bear Blog** - Inspiración para el diseño base

---

<div align="center">
  <p>⭐ <strong>Si te gusta el proyecto, ¡dale una estrella!</strong></p>
  <p>🏀 <strong>¡Vamos Leganés!</strong> 🏀</p>
  
  ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
</div>