# 🏀 JunStats

<div align="center">

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Plataforma de estadísticas y análisis del equipo de baloncesto Junior C Masculino del CDE Leganés**

[✨ Ver Demo](#) · [🐛 Reportar Bug](https://github.com/eloypgweb/JunStats/issues) · [💡 Solicitar Feature](https://github.com/eloypgweb/JunStats/issues)

</div>

---

## 📖 Descripción

**JunStats** es una aplicación web moderna desarrollada con **Astro 5.13+** que permite visualizar y analizar las estadísticas del equipo de baloncesto Junior C Masculino del Club Deportivo Elemental Leganés.

La plataforma ofrece una experiencia **responsive**, **rápida** y **profesional** para consultar estadísticas por jornadas, rendimiento individual de jugadores, análisis detallados de cada partido y un completo catálogo de jugadas tácticas del equipo.

## ✨ Características Principales

### 🎯 **Funcionalidades Core**

- **📊 Estadísticas por Jornadas** - Datos completos y detallados de cada partido
- **🏆 Sistema MVP Automático** - Corona dorada animada al mejor jugador por valoración
- **🎥 Catálogo de Jugadas** - Videos explicativos de las tácticas del equipo
- **🚫 Gestión de Sanciones** - Visualización especial para jugadores sancionados
- **📱 Diseño 100% Responsive** - Optimizado para móvil, tablet y escritorio
- **🌓 Modo Oscuro/Claro** - Cambio de tema con transiciones suaves
- **🌍 Multiidioma** - Soporte para múltiples idiomas

### ⚡ **Rendimiento y Optimización**

- ✅ **100/100 en Lighthouse Performance**
- ✅ **SEO Optimizado** - Meta tags, OpenGraph, sitemap automático
- ✅ **RSS Feed** integrado para suscriptores
- ✅ **Imágenes optimizadas** con lazy loading
- ✅ **Zero JS por defecto** - Carga ultrarrápida

### � **Experiencia de Usuario**

- **📱 Cards interactivas** en dispositivos móviles
- **📊 Tablas profesionales** en desktop y tablets
- **✨ Animaciones suaves** y transiciones fluidas
- **🎭 Efectos visuales modernos** - Hover states, shadows, transforms
- **♿ Accesibilidad mejorada** - Focus states, ARIA labels
- **� Tipografía personalizada** - Fuente Atkinson

### 🔧 **Stack Tecnológico**

- **⚡ Astro 5.13+** - Framework moderno para sitios estáticos ultrarrápidos
- **🎯 TypeScript** - Tipado estático para código más robusto
- **📱 CSS3 Moderno** - Grid, Flexbox, Custom Properties, Animations
- **📊 Sistema JSON** - Gestión eficiente de datos de jornadas
- **🎨 Componentes .astro** - Sin JavaScript innecesario en el cliente

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18.0 o superior
- **npm**, **yarn**, **pnpm** o **bun**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/eloypgweb/JunStats.git

# Entrar al directorio
cd JunStats

# Instalar dependencias
npm install
# o
pnpm install
# o
yarn install
```

### Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa del build antes de desplegar        |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |
| `npm run astro -- --help` | Ayuda sobre comandos de Astro                    |

## 📁 Estructura del Proyecto

```text
JunStats/
├── public/                    # Archivos estáticos
│   ├── favicons/             # Iconos del sitio
│   └── fonts/                # Fuentes personalizadas
├── src/
│   ├── assets/               # Imágenes y recursos optimizables
│   │   ├── fotos/           # Fotos de partidos
│   │   ├── jornadas/        # Imágenes de jornadas
│   │   └── jugadas/         # Videos de jugadas
│   ├── components/           # Componentes Astro reutilizables
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LanguageToggle.astro
│   │   └── HamburgerMenu.astro
│   ├── data/                 # Datos JSON
│   │   └── jornadas.json    # Estadísticas de partidos
│   ├── i18n/                 # Internacionalización
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/              # Layouts de página
│   │   ├── BlogPost.astro
│   │   └── JornadaPost.astro
│   ├── pages/                # Páginas del sitio (file-based routing)
│   │   ├── index.astro      # Página principal
│   │   ├── jornadas/        # Páginas de jornadas
│   │   ├── jugadas.astro    # Catálogo de jugadas
│   │   ├── galeria.astro    # Galería de fotos
│   │   └── api/             # API endpoints
│   ├── scripts/              # Scripts de utilidad
│   ├── styles/               # Estilos CSS
│   │   ├── global.css       # Estilos globales
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   └── ...
│   ├── consts.ts            # Constantes del sitio
│   ├── content.config.ts    # Configuración de contenido
│   └── middleware.ts        # Middleware de Astro
├── astro.config.mjs         # Configuración de Astro
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias del proyecto
```

## 🏀 Estadísticas Incluidas

### Métricas por Jugador y Jornada

| Estadística | Descripción |
|-------------|-------------|
| 🎯 **Puntos** | Total de anotaciones |
| 🏹 **T2/T3** | Tiros de 2 y 3 puntos convertidos |
| 🎳 **TL** | Tiros libres (metidos/intentados) |
| 🤝 **Assists** | Pases que generan canasta |
| 🔄 **Rebotes** | Capturas ofensivas y defensivas |
| 👐 **Robos** | Interceptaciones al rival |
| ❌ **Pérdidas** | Balones perdidos |
| 🟨 **Faltas** | Infracciones personales cometidas |
| ⭐ **Valoración** | Índice de eficiencia del jugador |

### Características Visuales Especiales

- **👑 MVP Automático** - Corona dorada animada al jugador con mejor valoración
- **🚫 Jugadores Sancionados** - Badge rojo con fondo especial y visualización destacada
- **📊 Responsive Design** - Cards adaptativas en móvil, tablas completas en desktop
- **✨ Animaciones** - Transiciones suaves, efectos hover y microinteracciones

## ⚡ Catálogo de Jugadas

### Jugadas Disponibles

| Jugada | Descripción | Estado |
|--------|-------------|--------|
| 🏃 **Transi 1** | Jugada de transición rápida con 5 abiertos | ✅ Disponible |
| 👁️ **Fondo Blind** | Jugada de fondo con bloqueo ciego | ✅ Disponible |
| 🏃 **Banda Short** | Saque de banda con bloqueos consecutivos | ✅ Disponible |
| 🖐️ **Palma** | Jugada estática con carretón | ✅ Disponible |
| 🔨 **Hammer** | Jugada con ascensor de bloqueos | ✅ Disponible |
| 🍞 **Fufu** | Saque de fondo con bloqueos consecutivos 2 | ✅ Disponible |

### Contenido de cada Jugada

- **🎥 Video explicativo** (MP4 y WebM para máxima compatibilidad)
- **📝 Descripción detallada** de la ejecución paso a paso
- **🎯 Situaciones de uso** recomendadas
- **👥 Posicionamiento** específico de cada jugador
- **📐 Diagramas visuales** para mejor comprensión

## 🎨 Diseño Visual

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| 🔵 **Azul Primario** | `#2337ff` | Color institucional del club |
| 🔷 **Azul Oscuro** | `#1e40af` | Contrastes y headers |
| 🔴 **Rojo Alerta** | `#dc2626` | Sanciones y errores |
| 🟢 **Verde Éxito** | `#16a34a` | MVP y logros |
| 🟡 **Amarillo MVP** | `#fbbf24` | Coronas y destacados |
| ⚫ **Grises** | `#0f172a` - `#f8fafc` | Texto y fondos |

### Tipografía

- **Principal**: [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible) (Regular/Bold)
  - Diseñada para máxima legibilidad
  - Optimizada para personas con baja visión
- **Fallback**: System UI, -apple-system, sans-serif
- **Iconos**: Emojis nativos para mejor compatibilidad multiplataforma

### Sistema de Diseño

- **Variables CSS** para consistencia en toda la app
- **Transiciones suaves** configurables (fast/normal/slow)
- **Bordes redondeados** con sistema escalable (sm/md/lg/xl)
- **Sombras dinámicas** con diferentes niveles de profundidad
- **Dark mode** con transiciones automáticas

## 📱 Responsive Breakpoints

| Dispositivo | Breakpoint | Diseño |
|-------------|-----------|---------|
| 📱 **Móvil** | < 768px | Cards individuales con todas las estadísticas |
| 📟 **Tablet** | 768px - 1024px | Tabla compacta optimizada |
| 🖥️ **Desktop** | > 1024px | Tabla completa con todas las columnas |

### Adaptaciones Específicas

- **Móvil**: Menú hamburguesa, cards apiladas, navegación táctil optimizada
- **Tablet**: Scroll horizontal en tablas, navegación híbrida
- **Desktop**: Navegación completa, hover states, todas las columnas visibles

## 🛠️ Optimizaciones

### Rendimiento

- ✅ **Imágenes optimizadas** - WebP con fallback a JPG/PNG
- ✅ **Videos eficientes** - Múltiples formatos (MP4/WebM)
- ✅ **Lazy loading** - Carga diferida de contenido multimedia
- ✅ **Compresión automática** - Assets minificados en build
- ✅ **Code splitting** - JavaScript dividido por rutas
- ✅ **CSS crítico** - Estilos inline para primera carga

### SEO

- ✅ **Meta tags completos** - Title, description, keywords
- ✅ **Open Graph** - Compartir optimizado en redes sociales
- ✅ **Twitter Cards** - Vista previa en Twitter/X
- ✅ **Sitemap automático** - Generado en cada build
- ✅ **RSS Feed** - Para lectores y agregadores
- ✅ **Canonical URLs** - URLs únicas para cada página
- ✅ **Structured Data** - Schema.org markup

## 🎯 Características Avanzadas

### Temas Visuales

- **🌓 Modo Claro/Oscuro** - Cambio con transiciones suaves
- **💾 Persistencia** - Preferencia guardada en localStorage
- **🎨 Animaciones** - Iconos animados al cambiar de tema
- **♿ Accesibilidad** - Respeta `prefers-color-scheme`

### Internacionalización

- **🌍 Multiidioma** - Sistema i18n integrado
- **🔄 Cambio dinámico** - Sin recargar la página
- **📝 Traducciones** - Archivos separados por idioma
- **🚀 Extensible** - Fácil añadir nuevos idiomas

### Galería de Fotos

- **📸 Vista de cuadrícula** - Diseño masonry responsive
- **🔍 Modal interactivo** - Vista ampliada con navegación
- **⬇️ Descarga directa** - Botón de descarga integrado
- **⌨️ Navegación por teclado** - Flechas y ESC
- **📱 Gestos táctiles** - Swipe en dispositivos móviles

## 🚀 Despliegue

El proyecto está optimizado para desplegarse en:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Cualquier hosting de contenido estático

### Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### Versión Actual (Octubre 2025)

- ✅ Mejoras visuales completas con animaciones modernas
- ✅ Sistema de variables CSS para consistencia
- ✅ Efectos hover y transiciones suaves
- ✅ Header sticky con glassmorphism
- ✅ Menú hamburguesa con animaciones
- ✅ Galería de fotos mejorada
- ✅ Catálogo de jugadas expandido

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

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