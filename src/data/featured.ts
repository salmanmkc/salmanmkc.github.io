export type FeaturedLink = { label: string; href: string };

export type Featured = {
  title: string;
  kicker: string;
  blurb: string;
  cardBlurb: string;
  video: string;
  poster: string;
  caption: string;
  note?: string;
  links: FeaturedLink[];
  tags?: string[];
  year?: string;
};

export const featured: Featured[] = [
  {
    title: 'Roomcraft — author a whole virtual place together by describing it',
    kicker: 'Google XR Blocks · addon · solo or shared',
    blurb:
      'An opt-in XR Blocks addon that turns a prompt into editable 3D content, composing catalog assets with procedural primitive-part designs. Scenes are refined in place through text, Gemini voice or direct manipulation — alone, or with several people at once. A four-letter room code opens the same scene across headsets, phones and laptops, sharing authoring, dragging, selection, presence and peer voice kept separate from Gemini, with animation running from a common timeline so late arrivals catch up. Optional virtual worlds add ground, sky, lighting, ponds, paths and seeded plants; characters and creatures can be added and set moving, objects can take bounded swing or spin animation, and the whole scene supports selection, undo/redo and JSON export. It composes and edits a scene graph — not text-to-mesh generation, and not generated JavaScript.',
    cardBlurb:
      'An opt-in XR Blocks addon that turns a prompt into editable 3D content, composing catalog assets with procedural primitive-part designs. Scenes are refined in place through text, Gemini voice or direct manipulation — alone, or with several people sharing one room code across headsets, phones and laptops. Optional virtual worlds, characters and creatures set moving, bounded animation, undo/redo and JSON export.',
    video: '/gifs/roomcraft.mp4',
    poster: '/gifs/roomcraft-poster.jpg',
    caption:
      'Silent clip. Meta Quest headset footage first, then the desktop simulator.',
    note: 'Runs anywhere XR Blocks does, including the desktop simulator — not a headset-only app.',
    links: [
      { label: 'Watch the full demo', href: 'https://youtu.be/0CXubRowyPo' },
      {
        label: 'Try the collaborative sample',
        href: 'https://xrblocks.github.io/docs/samples/Collaborative-Roomcraft/',
      },
      { label: 'XR Blocks on GitHub', href: 'https://github.com/google/xrblocks' },
    ],
    tags: ['XR', 'three.js', 'Scene Authoring', 'Collaboration'],
    year: '2026',
  },
  {
    title: 'AgentHands — speech-synchronised gestures and room-aware pointing',
    kicker: 'Google XR Blocks · addon',
    blurb:
      'Translucent posable hands and a glowing orb that gesture while an AI agent speaks. Inline gesture markup in the reply is synchronised to real text-to-speech word boundaries, and the agent points at objects in the room, grounded through depth. A scripted demonstration runs with no API key; add one for live Gemini conversation. Gestures are driven by browser speech, with a simpler vocabulary and coarser point grounding than the paper.',
    cardBlurb:
      'Translucent posable hands and a glowing orb that gesture while an AI agent speaks. Gesture markup is synchronised to real text-to-speech word boundaries, and the agent points at objects in the room, grounded through depth. Runs scripted with no API key, or live with Gemini.',
    video: '/gifs/agenthands.mp4',
    poster: '/gifs/agenthands-poster.jpg',
    caption:
      'Silent clip.',
    note:
      'Based on AgentHands (Liu et al., CHI 2026), implemented as reusable three.js / WebXR components for XR Blocks.',
    links: [
      { label: 'Watch the full demo', href: 'https://youtu.be/JgDE5crT3MQ' },
      {
        label: 'CHI 2026 paper',
        href: 'https://www.duruofei.com/papers/Liu_AgentHands-GeneratingInteractiveHandsGesturesForSpatiallyGroundedAgentConversationsInXR_CHI2026.pdf',
      },
      { label: 'XR Blocks on GitHub', href: 'https://github.com/google/xrblocks' },
    ],
    tags: ['XR', 'Agents', 'WebXR', 'Research → Product'],
    year: '2026',
  },
  {
    title: 'Persistent Spatial Anchors — content that stays put',
    kicker: 'Google XR Blocks · addon',
    blurb:
      'Capability-aware WebXR anchors that keep content tied to a physical location across sessions. On Meta Quest the platform handles real anchor persistence, so markers are restored on the next visit; elsewhere the addon falls back to session-only anchors, and the desktop simulator keeps the same demo working without a headset. The same API covers dropped markers, an anchored gallery and anchored notes.',
    cardBlurb:
      'Capability-aware WebXR anchors that keep content tied to a physical location across sessions. On Meta Quest the platform handles real anchor persistence; elsewhere the addon falls back to session-only anchors, and the desktop simulator keeps the demo working without a headset.',
    video: '/gifs/anchors.mp4',
    poster: '/gifs/anchors-poster.jpg',
    caption:
      'Silent clip, recorded in the desktop simulator.',
    links: [
      { label: 'XR Blocks on GitHub', href: 'https://github.com/google/xrblocks' },
    ],
    tags: ['XR', 'WebXR', 'Anchors'],
    year: '2026',
  },
  {
    title: 'Multiplayer — shared mixed reality across devices',
    kicker: 'Google XR Blocks · networking',
    blurb:
      'Multiplayer networking for XR Blocks, enabling shared mixed-reality experiences across devices: proximity voice, shared chat, shared objects that can move, RPC actions, presence and three transport protocols. It works across networks and custom servers as well as locally between devices — Meta Quest, Android XR, mobile and PC.',
    cardBlurb:
      'Multiplayer networking for XR Blocks: proximity voice, shared chat, shared movable objects, RPC actions, presence and three transport protocols, across networks, custom servers or locally between Meta Quest, Android XR, mobile and PC.',
    video: '/gifs/xrblocks-multiplayer.mp4',
    poster: '/gifs/multiplayer-poster.jpg',
    caption:
      'Silent clip: two devices in one session.',
    links: [
      { label: 'Watch the full demo', href: 'https://youtu.be/n4Me8imRzxA' },
      { label: 'XR Blocks on GitHub', href: 'https://github.com/google/xrblocks' },
    ],
    tags: ['XR', 'Networking', 'TypeScript'],
    year: '2026',
  },
];
