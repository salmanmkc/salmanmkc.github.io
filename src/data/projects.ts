export type Project = {
  title: string;
  blurb: string;
  gif?: string;
  link?: string;
  tags?: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    title: 'Audio-Driven Avatar Lipsync',
    blurb:
      'End-to-end audio-driven facial animation that runs entirely on-device. Mic → MFCCs → small MLP → 52 ARKit blendshapes → stylised avatar. The browser trains the model itself with TF.js on data captured live from your face via MediaPipe FaceLandmarker (free labels). The same architecture is mirrored in a JAX/Flax trainer that exports to LiteRT for Android XR / Quest.',
    gif: '/gifs/audio-avatar-lipsync.mp4',
    link: 'https://salmanmkc.github.io/audio-avatar-lipsync/',
    tags: ['ML', 'Audio', 'XR', 'On-Device'],
    year: '2026',
  },
  {
    title: 'On-Device Language Detection + Gemini Voice — Google XR Blocks',
    blurb:
      'Spartial-transcript pipeline that detects language per utterance. Uses Gemini Live for the audio stream and MediaPipe\'s language detector on device to tag each utterance. Lays out as a chat-style list with the latest at the bottom — slots scale together so it doesn\'t jump when a new line comes in.',
    gif: '/gifs/ondevice-language-and-gemini-voice.mp4',
    link: 'https://github.com/google/xrblocks',
    tags: ['XR', 'Gemini', 'MediaPipe'],
    year: '2026',
  },
  {
    title: 'Mixed Reality EEG + PPG Panic Attack Intervention — MIT Reality Hack',
    blurb:
      'Brain–computer interface combining EEG (brain), PPG (heart) and pose detection in mixed reality to support panic attack intervention. Built at MIT Reality Hack.',
    gif: '/gifs/mit-reality-hack-eeg.png',
    tags: ['MR', 'BCI', 'Health'],
    year: '2025',
  },
  {
    title: 'Metaverse AR Therapy (CHI 2025, Japan)',
    blurb:
      'Research project exploring AR-based therapeutic experiences in the metaverse — published at CHI 2025.',
    gif: '/gifs/chi25-304-fig1.jpg',
    link: 'https://dl.acm.org/doi/full/10.1145/3706598.3713387',
    tags: ['Research', 'AR', 'HCI'],
    year: '2025',
  },
  {
    title: 'Microsoft Patent — Emphasis Image Generation',
    blurb:
      'Inventor on a Microsoft patent application: "Generation of Emphasis Image with Emphasis Boundary".',
    gif: '/gifs/ms-patent.png',
    link: 'https://patents.google.com/?inventor=salman+chishti&oq=salman+chishti',
    tags: ['Patent', 'Microsoft'],
    year: '2022',
  },
  {
    title: 'Multiplayer Support - Google XR Blocks',
    blurb:
      'Designed and implemented multiplayer networking for XR Blocks, enabling shared mixed-reality experiences across devices, this includes proximity voice, a shared chat, shared objects that can move, RPC actions, presence and 3 transport protocols. This works across networks, and custom servers as well as locally between devices, Meta Quest, Android XR, mobile and PC',
    gif: '/gifs/xrblocks-multiplayer.mp4',
    link: 'https://github.com/google/xrblocks',
    tags: ['XR', 'Networking', 'TypeScript'],
    year: '2026',
  },
  {
    title: 'Portals Demo — Google XR Blocks',
    blurb:
      'A showcase XR experience built on XR Blocks demonstrating immersive scene composition and interaction primitives.',
    gif: '/gifs/portals.mp4',
    link: 'https://github.com/google/xrblocks',
    tags: ['XR', 'Demo'],
    year: '2026',
  },
  {
    title: 'Gamepad Controller Support — Google XR Blocks',
    blurb:
      'Added gamepad input support to XR Blocks so developers can build XR apps that work with standard controllers.',
    gif: '/gifs/xrblocks-gamepad.mp4',
    link: 'https://github.com/google/xrblocks',
    tags: ['XR', 'Input'],
    year: '2026',
  },
  {
    title: 'AR National Gallery — London National Gallery',
    blurb:
      'AR experience trained on paintings from the National Gallery in London — overlays AR storytelling, narration, and contextual information onto recognised artworks.',
    gif: '/gifs/ar-national-gallery.mp4',
    tags: ['AR', 'Computer Vision'],
    year: '2022',
  },
  {
    title: 'Augmented Reality Supermarket Experience',
    blurb:
      'Prototype AR demo of an in-store supermarket experience — overlaying product info, navigation, and contextual UI onto a physical shopping environment.',
    gif: '/gifs/ar-supermarket.mp4',
    tags: ['AR', 'Prototype', 'UX'],
    year: '2022',
  },
  {
    title: 'Youth WellTech (arXiv, with Microsoft Research)',
    blurb:
      'A global remote co-design sprint for youth mental health technology, with Microsoft Research. I was a mentor and the second-highest contributor on the paper.',
    gif: '/gifs/youth-welltech.png',
    link: 'https://arxiv.org/abs/2401.05824',
    tags: ['Research', 'Microsoft Research', 'Mental Health'],
    year: '2024',
  },
  {
    title: 'Biospatial OpenWorm — NASA Hackathon Award Winner',
    blurb:
      'AR simulation of the C. elegans connectome built for the NASA International Space Apps Challenge.',
    gif: '/gifs/biospatial.mp4',
    tags: ['AR', 'NASA', 'Award'],
    year: '2023',
  },
  {
    title: 'UCL Agentverse Hackathon #1 — Multi-Agent System',
    blurb:
      'Winning multi-agent system built with CAIPE / LangGraph at the UCL Agentverse Hackathon.',
    gif: '/gifs/agentverse.png',
    link: 'https://github.com/salmanmkc/agentverse',
    tags: ['Multi-Agent', 'LangGraph', 'Award'],
    year: '2024',
  },
  {
    title: 'Mixed Reality Smart Office — HoloLens',
    blurb:
      'HoloLens experience visualising IoT data in 3D with dynamic image tracking on physical devices around the office.',
    gif: '/gifs/mr-smart-office.jpg',
    link: 'https://www.youtube.com/watch?v=HiRQvAdTFec',
    tags: ['HoloLens', 'IoT', 'MR'],
    year: '2019',
  }
];
