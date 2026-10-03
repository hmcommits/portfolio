// ─── Tech icon registry ────────────────────────────────────────────────────────
// Official brand icons sourced from the `simple-icons` package (see
// scripts note in README). Each entry: { label, bg, color, svg }.
// `bg` is the tile background (solid or gradient), `color` the glyph color.

import brand from './simpleIcons.json'

const p = (key) => brand[key].path

const Glyph = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
)

/* Brands not available in simple-icons (trademark removals) — official paths kept locally */
const OPENAI_PATH = 'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.74 19.946a4.5 4.5 0 0 1-6.14-1.642zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.8-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.17V6.838a.071.071 0 0 1 .028-.067l4.83-2.786a4.494 4.494 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.98a4.494 4.494 0 0 1 7.375-3.453l-.142.08L8.704 6.322a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'

const VSCODE_PATH = 'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z'

/* Google Antigravity official mark (via @lobehub/icons-static-svg) */
const ANTIGRAVITY_PATH = 'M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z'

const LINKEDIN_PATH = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

export const TECH_ICONS = {
  nextjs:       { label: 'Next.js',        bg: '#000000', color: '#ffffff', svg: <Glyph d={p('nextjs')} /> },
  typescript:   { label: 'TypeScript',     bg: '#3178c6', color: '#ffffff', svg: <Glyph d={p('typescript')} /> },
  tailwind:     { label: 'Tailwind CSS',   bg: '#0b1120', color: '#38bdf8', svg: <Glyph d={p('tailwind')} /> },
  framermotion: { label: 'Framer Motion',  bg: '#0055ff', color: '#ffffff', svg: <Glyph d={p('framermotion')} /> },
  gemini:       { label: 'Gemini AI',      bg: 'linear-gradient(135deg, #4285f4 0%, #9b72cb 60%, #d96570 100%)', color: '#ffffff', svg: <Glyph d={p('gemini')} /> },
  excalidraw:   { label: 'Excalidraw',     bg: '#6965db', color: '#ffffff', svg: <Glyph d={p('excalidraw')} /> },
  sandpack:     { label: 'Sandpack',       bg: '#151515', color: '#ffffff', svg: <Glyph d={p('sandpack')} /> },
  zod:          { label: 'Zod',            bg: '#274d82', color: '#8fc7ff', svg: <Glyph d={p('zod')} /> },
  flutter:      { label: 'Flutter',        bg: '#02569b', color: '#54c5f8', svg: <Glyph d={p('flutter')} /> },
  firebase:     { label: 'Firebase',       bg: 'linear-gradient(135deg, #ff9100 0%, #dd2c00 100%)', color: '#ffffff', svg: <Glyph d={p('firebase')} /> },
  nodejs:       { label: 'Node.js',        bg: '#233056', color: '#5fa04e', svg: <Glyph d={p('nodejs')} /> },
  mongodb:      { label: 'MongoDB',        bg: '#102818', color: '#47a248', svg: <Glyph d={p('mongodb')} /> },
  express:      { label: 'Express',        bg: '#1b1b1b', color: '#ffffff', svg: <Glyph d={p('express')} /> },
  jwt:          { label: 'JWT',            bg: '#0a0a0a', color: '#d63aff', svg: <Glyph d={p('jwt')} /> },
  render:       { label: 'Render',         bg: '#0c0c0d', color: '#46e3b7', svg: <Glyph d={p('render')} /> },
  fastapi:      { label: 'FastAPI',        bg: '#009688', color: '#ffffff', svg: <Glyph d={p('fastapi')} /> },
  streamlit:    { label: 'Streamlit',      bg: '#262730', color: '#ff4b4b', svg: <Glyph d={p('streamlit')} /> },
  mediapipe:    { label: 'MediaPipe',      bg: '#00343a', color: '#00c2cb', svg: <Glyph d={p('mediapipe')} /> },
  python:       { label: 'Python',         bg: '#3776ab', color: '#ffd343', svg: <Glyph d={p('python')} /> },
  railway:      { label: 'Railway',        bg: '#0b0d0e', color: '#ffffff', svg: <Glyph d={p('railway')} /> },
  opencv:       { label: 'OpenCV',         bg: '#2a2440', color: '#a89bff', svg: <Glyph d={p('opencv')} /> },
  react:        { label: 'React',          bg: '#23272f', color: '#61dafb', svg: <Glyph d={p('react')} /> },
  javascript:   { label: 'JavaScript',     bg: '#f7df1e', color: '#000000', svg: <Glyph d={p('javascript')} /> },
  figma:        { label: 'Figma',          bg: '#2c2c2c', color: '#ffffff', svg: <Glyph d={p('figma')} /> },
  pydirectinput: {
    label: 'PyDirectInput', bg: '#2d3748', color: '#e2e8f0',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M9 14h6" />
      </svg>
    ),
  },
  zustand: {
    label: 'Zustand', bg: '#59473c', color: '#f5e6d3',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6.5" cy="7" r="2.6" />
        <circle cx="17.5" cy="7" r="2.6" />
        <path d="M4.5 13.5C4.5 9.9 7.8 8 12 8s7.5 1.9 7.5 5.5S16.2 20 12 20s-7.5-2.9-7.5-6.5z" />
        <path d="M9.5 13.2h.01M14.5 13.2h.01" strokeWidth="2.4" />
      </svg>
    ),
  },
}

/* ── Brand icons for socials / tools (single source of truth) ── */
export const BRAND_PATHS = {
  github:   p('github'),
  git:      p('git'),
  postman:  p('postman'),
  claude:   p('claude'),
  youtube:  p('youtube'),
  whatsapp: p('whatsapp'),
  gmail:    p('gmail'),
  openai:      OPENAI_PATH,
  vscode:      VSCODE_PATH,
  linkedin:    LINKEDIN_PATH,
  antigravity: ANTIGRAVITY_PATH,
}

export const BrandIcon = ({ name }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={BRAND_PATHS[name]} />
  </svg>
)
