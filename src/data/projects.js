// ─── Projects data ─────────────────────────────────────────────────────────────
// Images are optimized WebP (originals archived in /assets-original).
// `imageAspect` = intrinsic width/height, used to prevent layout shift.

export const PROJECTS = [
  {
    id: 'logiclens',
    title: 'LogicLens',
    description:
      'Bridge the gap between ideation and implementation. Draw UI wireframes or logic flowcharts on an integrated whiteboard — LogicLens uses a multi-modal AI pipeline to instantly synthesize a fully functional, multi-file React application with real-time code streaming and a live interactive sandbox.',
    image: '/assets/logiclens.webp',
    imageWidth: 2048,
    imageHeight: 1490,
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
    image: '/assets/visiondrift.webp',
    imageWidth: 1280,
    imageHeight: 853,
    github: 'https://github.com/hmcommits/VisionDrift',
    live: null,
    demo: 'https://youtu.be/6amhwCqCkPU',
    techKeys: ['python', 'opencv', 'mediapipe', 'pydirectinput'],
  },
  {
    id: 'codespotlight',
    title: 'CodeSpotlight',
    description:
      'A centralized showcase directory where developers host deployed projects, generate AI-powered technical deep-dives, and present their work through a polished portfolio interface. Paste a GitHub URL — CodeSpotlight generates architecture diagrams, commit heatmaps, language visualizations, and a fully formatted README.',
    image: '/assets/codespotlight.webp',
    imageWidth: 1280,
    imageHeight: 960,
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
    image: '/assets/attentionx.webp',
    imageWidth: 1280,
    imageHeight: 960,
    github: 'https://github.com/hmcommits/AttentionX',
    live: null,
    demo: 'https://drive.google.com/file/d/1VxejpV63GaUFptoqXc3Qo6bhsDrd2unX/view?usp=sharing',
    techKeys: ['fastapi', 'python', 'streamlit', 'gemini', 'mediapipe', 'railway'],
  },
]
