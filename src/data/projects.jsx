// ─── Tech stack key definitions ───────────────────────────────────────────────
// Each key has: id, label, color (brand), and an SVG icon path or simple shape.
// Icons use Simple Icons paths where available.

export const TECH_ICONS = {
  nextjs: {
    label: 'Next.js',
    color: '#fff',
    bg: '#000',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>,
  },
  typescript: {
    label: 'TypeScript',
    color: '#fff',
    bg: '#3178c6',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>,
  },
  tailwind: {
    label: 'Tailwind',
    color: '#fff',
    bg: '#06b6d4',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
  },
  framermotion: {
    label: 'Framer Motion',
    color: '#fff',
    bg: '#0055ff',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>,
  },
  gemini: {
    label: 'Gemini AI',
    color: '#fff',
    bg: '#8e44ad',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  excalidraw: {
    label: 'Excalidraw',
    color: '#fff',
    bg: '#6965db',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3L7 21M3 9l18 6M3 15l18-6"/></svg>,
  },
  sandpack: {
    label: 'Sandpack',
    color: '#fff',
    bg: '#1c1c1e',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2zm0 2.236L5 7.764v8.472L12 19.764l7-3.528V7.764L12 4.236z"/></svg>,
  },
  zustand: {
    label: 'Zustand',
    color: '#fff',
    bg: '#433e38',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="#433e38" d="M8 10a2 2 0 104 0 2 2 0 00-4 0zm4 0a2 2 0 104 0 2 2 0 00-4 0zm-4 6h8v1H8z"/></svg>,
  },
  zod: {
    label: 'Zod',
    color: '#fff',
    bg: '#3068b7',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 6.5v11L12 23l9-5.5v-11L12 1zm0 2.311l7 4.278v8.822l-7 4.278-7-4.278V7.589l7-4.278z"/></svg>,
  },
  flutter: {
    label: 'Flutter',
    color: '#fff',
    bg: '#027dfd',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>,
  },
  firebase: {
    label: 'Firebase',
    color: '#fff',
    bg: '#ff6f00',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>,
  },
  nodejs: {
    label: 'Node.js',
    color: '#fff',
    bg: '#339933',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.05-.139.143-.139.241v10.15c0 .097.055.189.139.236l2.409 1.391c1.307.654 2.108-.116 2.108-.891V7.24c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.567c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.85 1.85 0 0 1-.919-1.604V6.921c0-.658.351-1.273.919-1.604l8.795-5.082c.554-.315 1.291-.315 1.841 0l8.794 5.082c.567.331.919.946.919 1.604v10.15c0 .658-.353 1.273-.919 1.604l-8.794 5.076c-.28.163-.6.247-.921.247z"/></svg>,
  },
  mongodb: {
    label: 'MongoDB',
    color: '#fff',
    bg: '#47a248',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>,
  },
  express: {
    label: 'Express',
    color: '#fff',
    bg: '#333',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.013-.092-.032-.184-.048-.277zm1.114-.7h9.084c-.064-3.023-2.036-5.019-4.524-4.972-2.612.048-4.395 2.01-4.56 4.972z"/></svg>,
  },
  jwt: {
    label: 'JWT',
    color: '#fff',
    bg: '#d63aff',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 0v4.32l2.76-3.791A11.985 11.985 0 0 0 13.8 0zM10.2 4.529L7.44.529A11.985 11.985 0 0 0 10.2 4.529zM0 8.063l4.56 5.803 2.88-.336L4.32 7.73zm23.52-.337l-3.24 5.797 2.88.337 4.56-5.8zm-19.2.673l3.24 5.796-1.68 2.472-5.28-.768zm18.72 0l-5.28.769-1.68 2.47 3.24 5.798zm-17.04 7.92l1.68-2.47 3.24 5.798-3.84-2.16zm15.36 1.169l1.68 2.47-3.84 2.16 3.24-5.798zM8.4 14.424l5.28.769-2.88 2.16zm7.2 0-2.4 2.929 2.88-2.16zm-10.8.625L12 17.209l7.2-2.16-3.6 6.24v2.71h-3.2v-2.71z"/></svg>,
  },
  render: {
    label: 'Render',
    color: '#fff',
    bg: '#46e3b7',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0zm13.5 5.25a5.25 5.25 0 0 1 0 10.5H9v3H6.75V5.25zm0 7.5a2.25 2.25 0 1 0 0-4.5H9v4.5z"/></svg>,
  },
  fastapi: {
    label: 'FastAPI',
    color: '#fff',
    bg: '#009688',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.626 5.375 12 12 12 6.626 0 12-5.374 12-12 0-6.625-5.374-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/></svg>,
  },
  streamlit: {
    label: 'Streamlit',
    color: '#fff',
    bg: '#ff4b4b',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.673 7.438l6.23 3.632-6.23 3.645V7.438zM1.897 11.07l9.58-5.583v3.653L5.02 12.594 11.477 16.1v3.66L1.897 14.17v-3.1zm12.372 5.037l5.455-3.146-5.455-3.148V7.18L21.677 12l-7.408 4.77v-2.663z"/></svg>,
  },
  mediapipe: {
    label: 'MediaPipe',
    color: '#fff',
    bg: '#ff6d00',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>,
  },
  python: {
    label: 'Python',
    color: '#fff',
    bg: '#3776ab',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.74l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82z"/><path d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.74l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V8.5h2.81l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.21.01H9.75l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v3.06h-2.09l-.14-.01zm6.47-14.25a.91.91 0 1 0 0 1.82.91.91 0 0 0 0-1.82z"/></svg>,
  },
  railway: {
    label: 'Railway',
    color: '#fff',
    bg: '#0b0d0e',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.958 11.996a11.056 11.056 0 00.09 1.434l4.086.807.024-.006-4.2-2.235zm22.085 0l-4.2 2.235.025.006 4.085-.807a11.06 11.06 0 00.09-1.434zM5.067 17.44l-3.29 2.035a11.078 11.078 0 002.374 2.413l2.748-3.578c-.639-.23-1.254-.53-1.832-.87zm13.866 0a9.048 9.048 0 01-1.832.87l2.748 3.578a11.078 11.078 0 002.374-2.413zm-7.94 3.005l.017 4.112a10.893 10.893 0 001.983 0l.017-4.112c-.334.025-.669.038-1.008.038-.34 0-.675-.013-1.009-.038zM12 0C5.383 0 0 5.383 0 12a11.974 11.974 0 00.09 1.434l4.086.807.024-.006-4.2-2.235c.07-1.17.31-2.292.701-3.34l3.787 2.022-.018-.046L.958 11.996zM12 0c6.617 0 12 5.383 12 12 0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm0 4.79a7.21 7.21 0 100 14.42A7.21 7.21 0 0012 4.79z"/></svg>,
  },
}

// ─── Projects data ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'logiclens',
    title: 'LogicLens',
    description:
      'Bridge the gap between ideation and implementation. Draw UI wireframes or logic flowcharts on an integrated whiteboard — LogicLens uses a multi-modal AI pipeline to instantly synthesize a fully functional, multi-file React application with real-time code streaming and a live interactive sandbox.',
    image: '/assets/logiclens.png',
    github: 'https://github.com/hmcommits/LogicLens',
    live: 'https://logic-lens-mauve.vercel.app/',
    demo: 'https://youtu.be/AGeLCxv_Vjs',
    techKeys: ['nextjs', 'typescript', 'tailwind', 'framermotion', 'gemini', 'excalidraw', 'sandpack', 'zustand', 'zod'],
  },
  {
    id: 'visiondrift',
    title: 'VisionDrift',
    description:
      'Drive any racing game with your bare hands — no wheel, no controller, no keyboard. VisionDrift is a real-time computer vision controller that turns your webcam into a steering wheel using MediaPipe hand landmarker. The game receives standard hardware scan codes seamlessly.',
    image: '/assets/visiondrift.png',
    github: 'https://github.com/hmcommits/VisionDrift',
    live: null,
    demo: 'https://youtu.be/6amhwCqCkPU',
    techKeys: ['python', 'OpenCV', 'mediapipe', 'PyDirectInput'],
  },
  {
    id: 'codespotlight',
    title: 'CodeSpotlight',
    description:
      'A centralized showcase directory where developers host deployed projects, generate AI-powered technical deep-dives, and present their work through a polished portfolio interface. Paste a GitHub URL — CodeSpotlight generates architecture diagrams, commit heatmaps, language visualizations, and a fully formatted README.',
    image: '/assets/codespotlight.png',
    github: 'https://github.com/hmcommits/CodeSpotlight',
    live: 'https://codespotlight-hm.web.app',
    demo: 'https://youtu.be/BZO2LhEN5AU',
    techKeys: ['flutter', 'firebase', 'nodejs', 'express', 'mongodb', 'jwt', 'gemini', 'render'],
  },
  {
    id: 'attentionx',
    title: 'AttentionX',
    description:
      'A fully autonomous AI-driven video repurposing engine. Transform hours of long-form video (podcasts, interviews, keynotes) into viral 60-second vertical Shorts using Narrative Intelligence — transcribes with faster-whisper, ranks "Golden Nuggets" by Virality Score, tracks speaker faces, renders karaoke captions, and exports 9:16 vertical video.',
    image: '/assets/attentionx.png',
    github: 'https://github.com/hmcommits/AttentionX',
    live: null,
    demo: 'https://drive.google.com/file/d/1VxejpV63GaUFptoqXc3Qo6bhsDrd2unX/view?usp=sharing',
    techKeys: ['fastapi', 'python', 'streamlit', 'gemini', 'mediapipe', 'railway'],
  },
]
