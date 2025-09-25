# 🏀 JunStats



> **Plataforma de estadísticas y análisis del equipo de baloncesto Junior C Masculino del CDE Leganés**
> **Plataforma de estadísticas del Junior C Masculino del CDE Leganés**



## 📖 Descripción



**JunStats** es una aplicación web moderna desarrollada con **Astro** que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.**JunStats** es una aplicación web moderna desarrollada con Astro que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.

- ✅ Minimal styling (make it your own!)

La plataforma ofrece una experiencia **responsive** y **profesional** para consultar estadísticas por jornadas, rendimiento individual de jugadores, análisis detallados de cada partido y un completo catálogo de jugadas del equipo.

- ✅ 100/100 Lighthouse performance

## ✨ Características

La plataforma ofrece una experiencia responsive y elegante para consultar estadísticas por jornadas, rendimiento individual de jugadores y análisis detallados de cada partido.

### 🎯 **Funcionalidades Principales**
- ✅ SEO-friendly with canonical URLs and OpenGraph data

- **📊 Jornadas detalladas** - Estadísticas completas de cada partido- ✅ Sitemap support

- **🏆 Sistema MVP automático** - Corona al mejor jugador por valoración

- **⚡ Catálogo de jugadas** - Videos explicativos de las tácticas del equipo

## ✨ Características

- **📱 Diseño 100% responsive** - Optimizado para móvil, tablet y escritorio - ✅ RSS Feed support

- **🚫 Gestión de sanciones** - Visualización especial para jugadores sancionados

- **⚡ Rendimiento optimizado** - 100/100 en Lighthouse Performance - ✅ Markdown & MDX support

- **🎨 Interfaz moderna** - Diseño limpio y profesional

### 🎯 **Funcionalidades Principales**

### 🎮 **Experiencia de Usuario**

- **📊 Estadísticas por jornadas**

- **📱 Cards interactivas** en móviles con información completa - **Datos detallados de cada partido**

- **📊 Tablas profesionales** en escritorio y tablets

- **✨ Animaciones suaves** para coronas MVP y elementos especiales## 🚀 Project Structure

- **🎨 Tipografía personalizada** con fuente Atkinson

- **🏀 Tema visual coherente** con colores del club - **🏆 Sistema MVP** - Corona automática al mejor jugador por valoración



### 🔧 **Stack Tecnológico**
- **📱 Diseño responsive** - Adaptado para móvil, tablet y escritorioInside of your Astro project, you'll see the following folders and files:

- **⚡ Astro 5.13+** - Framework moderno para sitios estáticos 

- **🚫 Gestión de sanciones** - Visualización especial para jugadores sancionados

- **🎨 Archivos .astro** - Componentes optimizados sin JavaScript innecesario

- **📊 Sistema JSON** - Gestión eficiente de datos de jornadas

- **⚡ Rendimiento optimizado** - 100/100 en Lighthouse```text

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

### Por Jugador y Jornada

- **🎯 Puntos** - Total de anotaciones

- **🏹 T2/T3** - Tiros de 2 y 3 puntos convertidos

- **🎳 TL** - Tiros libres (metidos/intentados)

- **🤝 Assists** - Pases de gol

- **🔄 Rebotes** - Capturas ofensivas y defensivas

- **👐 Robos** - Interceptaciones al rival

- **❌ Pérdidas** - Balones perdidos

- **🟨 Faltas** - Infracciones personales 

- **⭐ Valoración** - Índice de eficiencia 

### Características Visuales Especiales│   ├── favicon.jpg         # Favicon del sitio

- **👑 MVP Automático** - Corona dorada al jugador con mejor valoración

- **🚫 Jugadores Sancionados** - Badge rojo con visualización especial

- **📊 Responsive Design** - Cards en móvil, tablas completas en desktop

- **🎨 Animaciones** - Transiciones suaves y efectos visuales

## ⚡ Jugadas del Equipo

### Jugadas Disponibles

- **🏃 Transi 1** - Jugada de transición rápida con 5 abiertos

- **👁️ Blind** - Jugada de fondo con bloqueo ciego

- **🏃 Short** - Saque de banda con bloqueos consecutivos

### Jugadas en Desarrollo

- **🖐️ Palma** - Jugada estática con carretón

- **🔨 Hammer** - Jugada con ascensor de bloqueos

Cada jugada incluye:

- **🎥 Video explicativo** (MP4 y WebM para compatibilidad)

- **📝 Descripción detallada** de la ejecución

- **🎯 Situaciones de uso** recomendadas

- **👥 Posicionamiento** de cada jugador

## 🎨 Diseño Visual

### Paleta de Colores
## 🏀 Estadísticas Incluidas

- **🔵 Primario**: `#2337ff` (Azul institucional)

- **🔷 Secundario**: `#1e40af` (Azul oscuro para contraste)

- **🔴 Alerta**: `#dc2626` (Rojo para sanciones)

- **🎯 Puntos** - Anotaciones totales

- **🟢 Éxito**: `#16a34a` (Verde para MVP)

- **🏹 T2/T3** - Tiros de 2 y 3 puntos convertidos

- **⚫ Neutros**: Escala de grises para texto y fondos

- **🎳 TL** - Tiros libres (metidos/intentados)

- **🤝 Assists**

### Tipografía
- **🔄 Rebotes** - Ofensivos y defensivos

- **Principal**: Atkinson (Regular/Bold) - Fuente moderna y legible

- **👐 Robos** - Interceptaciones

- **Fallback**: System UI, sans-serif

- **❌ Pérdidas** - Balones perdidos

- **Iconos**: Emojis nativos para mejor compatibilidad

- **🟨 Faltas** - Infracciones cometidas

- **⭐ Valoración** - Índice de eficiencia

## 📱 Responsive Breakpoints

### Características Especiales

- **👑 MVP Automático** - Corona al jugador con mejor valoración

- **🚫 Jugadores Sancionados** - Visualización especial con badge rojo

- **📱 Móvil** | < 768px | Cards individuales con estadísticas completas |

- **📊 Tablas Responsive** - Cards en móvil, tabla completa en escritorio

- **📟 Tablet** | 768px - 1024px | Tabla compacta optimizada |

- **🖥️ Desktop** | > 1024px | Tabla completa con todas las columnas |

## 🎨 Temas Visuales

## 🛠️ Desarrollo### Colores Principales

- **Primario**: `#2337ff` (Azul del club)

### Optimizaciones

- ✅ **Imágenes optimizadas** con formato WebP <div align="center">

- ✅ **Videos en múltiples formatos** (MP4/WebM)  <p>⭐ Si te gusta el proyecto, ¡dale una estrella!</p>

- ✅ **Carga diferida** de contenido multimedia  <p>🏀 <strong>¡Vamos Leganés!</strong> 🏀</p>

- ✅ **Compresión automática** de assets</div>
- ✅ **Meta tags completos** para redes sociales
- ✅ **Sitemap automático** para buscadores
- ✅ **RSS Feed** para suscriptores

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollado por

**Eloy Pérez Gómez** - [@eloypgweb](https://github.com/eloypgweb)

### Contacto
- 🐦 Twitter: [@eloy_6lega](https://x.com/eloy_6lega)
- 📸 Instagram: [@eloyypg](https://instagram.com/eloyypg)
- 💼 GitHub: [@eloypgweb](https://github.com/eloypgweb)


---

<div align="center">
  <p>⭐ <strong>Si te gusta el proyecto, ¡dale una estrella!</strong></p>
  <p>🏀 <strong>¡Vamos Leganés!</strong> 🏀</p>
  
  ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
</div>