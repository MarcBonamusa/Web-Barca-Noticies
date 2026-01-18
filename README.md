# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Començar projecte amb vite + react
1. npm create vite@latest -> react -> javascript -> no -> yes
2. Crear directori "components" a "src"
3. 
   
## P1 - RA3 - Navbar

### Instal·la React Router DOM al projecte
- npm install react-router-dom
### Configura les rutes principals de la teva aplicació dins el component App.jsx i modificar Main.jsx
### Crea un menú de navegació (component Navbar.jsx o similar) que utilitzi els components:
- BrowserRouter
- Routes
- Route
- Link

### El menú ha de:
- Permetre navegar entre les diferents rutes sense recarregar la pàgina.
- Romandre visible en tot moment.
   Estar dins del <BrowserRouter> (important).
- Aplicar un CSS diferent si estic visitant la pàgina corresponent

## P2 - RA3 - Contingut multimèdia
### Video
- MP4 o WebM
- Activar controls i loading="lazy"
- VideoPlayer
### Galeria d’imatges
- WebP o AVIF
- Lazy loading
- Atribut "alt" i si cal "srcset"
- Gallery
### Àudio
- MP3 o OGG
- Afegir controls i fallback
- AudioPlayer
### Organització en components
- Cada tipus de contingut multimèdia ha de ser un component independent (Gallery, AudioPlayer, VideoPlayer, etc.).
- Importeu i exporteu correctament els components dins de la vostra App principal.

## P1 - RA4 -  Elements d’interactivitat i accessibilitat
### UseRef
- Implementar un botó que, en fer-hi clic, faci que el focus se situï en un formulari o element específic de la pàgina.
- O, si ja teniu algun formulari, feu que un input tingui focus automàtic quan la pàgina es carrega.

### Aria
- Afegir aria-label als inputs per proporcionar descripcions de la funció del camp.
- Utilitzar role="button" per millorar l'ús d'elements que no són botons però actuïn com a tal.
- Exemple: Si teniu un menú de navegació, podeu afegir atributs ARIA per indicar que és una barra de navegació: role="navigation".

### WCAG
- Contrast de colors i tabindex

### Web responsive
- Si la pàgina té una barra lateral, feu que aquesta desaparegui en pantalles petites i s'acumuli en un menú de tipus hamburguesa.
- Canvieu l'estructura de la pàgina en funció de la mida de la pantalla (canvi de mides de font, disposició de les imatges, etc.).
