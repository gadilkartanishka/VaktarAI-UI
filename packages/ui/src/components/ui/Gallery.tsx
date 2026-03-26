// import { useState, useRef } from "react"
// import { NavBar } from "@workspace/ui/components/ui/tubelight-navbar";
// // ── Types ──────────────────────────────────────────────────────────────────
// interface VideoItem {
//   src: string
//   poster: string
//   title: string
//   desc: string
// }

// // ── Data ───────────────────────────────────────────────────────────────────
// const VIDEOS: VideoItem[] = [
//   {
//     src: "/gallery_video/video1.mp4",
//     poster: "https://via.placeholder.com/800",
//     title: "My Video 1",
//     desc: "Custom video",
//   },
//   {
//     src: "/gallery_video/video2.mp4",
//     poster: "https://via.placeholder.com/800",
//     title: "My Video 2",
//     desc: "Custom video",
//   },
//   {
//     src: "/gallery_video/video3.mp4",
//     poster: "https://via.placeholder.com/800",
//     title: "My Video 3",
//     desc: "Custom video",
//   },
//   {
//     src: "/gallery_video/video4.mp4",
//     poster: "https://via.placeholder.com/800",
//     title: "My Video 4",
//     desc: "Custom video",
//   },
// ]
// // ── Scoped CSS ─────────────────────────────────────────────────────────────
// const CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

//   .vg-root {
//     --navy:     #223448;
//     --steel:    #547892;
//     --pale:     #94b4c1;
//     --beige:    #e9e0cf;
//     --beige2:   #ddd3be;
//     --bg:       #d9f0f6;
//     --surface:  #f2ece0;
//     --border:   rgba(34,52,72,0.12);
//     --accent:   #547892;
//     --text:     #1a2a3a;
//     --muted:    #6a8598;
//     --nav-h:    80px;
//     --footer-h: 72px;

//     background: var(--bg);
//     color: var(--text);
//     font-family: 'Taviraj', serif;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     .vg-root .tubelight-pill {
//     min-width: max-content;
//     }
//   }

//   .vg-root *, .vg-root *::before, .vg-root *::after {
//     box-sizing: border-box; margin: 0; padding: 0;
//   }

//   /* ── HERO ── */
//   .vg-hero {
//     display: flex; flex-direction: column; align-items: center;
//     justify-content: center; text-align: center;
//     padding: calc(var(--nav-h) + 48px) 24px 40px;
//   }
//   .vg-hero-tag {
//     display: inline-flex; align-items: center; gap: 8px;
//     padding: 6px 16px; border-radius: 100px;
//     background: color-mix(in srgb, var(--accent) 12%, transparent);
//     border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
//     font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em;
//     text-transform: uppercase; color: var(--accent); margin-bottom: 20px;
//   }
//   .vg-hero-title {
//     font-family: 'Taviraj', serif; font-weight: 600;
//     font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.1;
//     letter-spacing: -0.02em; margin-bottom: 14px; color: var(--navy);
//   }
//   .vg-hero-title span {
//     background: linear-gradient(90deg, var(--accent), var(--pale));
//     -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }
//   .vg-hero-sub {
//     font-size: 1rem; color: var(--muted); max-width: 460px; line-height: 1.7;
//   }

//   /* ── VIDEO GRID ── */
//   .vg-grid {
//     flex: 1;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//     gap: 20px;
//     padding: 0 32px 40px;
//   }

//   /* ── VIDEO CARD ── */
//   .vg-card {
//     position: relative;
//     border-radius: 18px;
//     overflow: hidden;
//     border: 1px solid var(--border);
//     background: var(--navy);
//     cursor: pointer;
//     box-shadow: 0 4px 24px rgba(34,52,72,0.12);
//     transition: box-shadow 0.3s, transform 0.3s;
//     aspect-ratio: 16/9;
//   }

//   .vg-card:hover {
//     box-shadow: 0 16px 48px rgba(34,52,72,0.22);
//     transform: translateY(-3px);
//   }

//   .vg-card video {
//     width: 100%; height: 100%;
//     object-fit: cover; display: block;
//   }

//   /* ── OVERLAY (shown when not playing) ── */
//   .vg-overlay {
//     position: absolute; inset: 0;
//     background: linear-gradient(to top, rgba(22,36,52,0.75) 0%, rgba(22,36,52,0.15) 60%, transparent 100%);
//     display: flex; flex-direction: column;
//     justify-content: flex-end;
//     padding: 24px;
//     transition: opacity 0.3s;
//   }

//   .vg-card.playing .vg-overlay {
//     opacity: 0;
//     pointer-events: none;
//   }

//   .vg-card.playing:hover .vg-overlay {
//     opacity: 1;
//     pointer-events: auto;
//   }

//   .vg-caption h3 {
//     font-family: 'Taviraj', serif; font-weight: 600;
//     font-size: 1.1rem; color: var(--beige); margin-bottom: 4px;
//   }
//   .vg-caption p {
//     font-size: 0.8rem;
//     color: rgba(233,224,207,0.7);
//   }

//   /* ── PLAY BUTTON ── */
//   .vg-play-btn {
//     position: absolute;
//     top: 50%; left: 50%;
//     transform: translate(-50%, -50%);
//     width: 60px; height: 60px;
//     border-radius: 50%;
//     background: rgba(255,255,255,0.18);
//     backdrop-filter: blur(8px);
//     border: 2px solid rgba(255,255,255,0.4);
//     display: flex; align-items: center; justify-content: center;
//     transition: background 0.2s, transform 0.2s;
//   }

//   .vg-card:hover .vg-play-btn {
//     background: rgba(255,255,255,0.28);
//     transform: translate(-50%, -50%) scale(1.1);
//   }

//   .vg-card.playing .vg-play-btn {
//     opacity: 0;
//   }

//   .vg-card.playing:hover .vg-play-btn {
//     opacity: 1;
//   }

//   .vg-play-btn svg {
//     width: 22px; height: 22px; fill: #fff;
//     margin-left: 4px;
//   }

//   /* pause icon shown when playing */
//   .vg-pause-icon svg {
//     margin-left: 0;
//   }

//   /* ── FOOTER ── */
//   .vg-footer {
//     height: var(--footer-h);
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 0 36px;
//     border-top: 1px solid rgba(148,180,193,0.2);
//     background: var(--navy);
//     flex-shrink: 0;
//   }
//   .vg-footer-brand {
//     font-family: 'Taviraj', serif; font-weight: 600;
//     font-size: 0.95rem; color: var(--beige);
//   }
//   .vg-footer-brand span { color: var(--pale); }
//   .vg-footer-links { display: flex; gap: 24px; }
//   .vg-footer-links a {
//     font-size: 0.8rem; color: var(--pale);
//     text-decoration: none; transition: color 0.2s;
//   }
//   .vg-footer-links a:hover { color: var(--beige); }
//   .vg-footer-copy { font-size: 0.75rem; color: var(--pale); opacity: 0.7; }

//   @media (max-width: 640px) {
//     .vg-grid { grid-template-columns: 1fr; grid-template-rows: auto; padding: 0 16px 32px; }
//     .vg-footer { flex-direction: column; gap: 10px; height: auto; padding: 20px; text-align: center; }
//   }
// `

// // ── Video Card ─────────────────────────────────────────────────────────────
// function VideoCard({ video }: { video: VideoItem }) {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [playing, setPlaying] = useState(false)

//   const handleMouseEnter = () => {
//     if (!playing && videoRef.current) {
//       videoRef.current.currentTime = 0
//       videoRef.current.muted = true
//       videoRef.current.play()
//     }
//   }

//   const handleMouseLeave = () => {
//     if (!playing && videoRef.current) {
//       videoRef.current.pause()
//       videoRef.current.currentTime = 0
//     }
//   }

//   const handleClick = () => {
//     const vid = videoRef.current
//     if (!vid) return

//     if (playing) {
//       vid.pause()
//       vid.currentTime = 0
//       vid.muted = true
//       setPlaying(false)
//     } else {
//       vid.muted = false
//       vid.play()
//       setPlaying(true)
//     }
//   }

//   const handleVideoEnded = () => {
//     setPlaying(false)
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0
//       videoRef.current.muted = true
//     }
//   }

//   return (
//     <div
//       className={`vg-card${playing ? " playing" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       <video
//         ref={videoRef}
//         src={video.src}
//         poster={video.poster}
//         muted
//         playsInline
//         preload="metadata"
//         onEnded={handleVideoEnded}
//       />

//       <div className="vg-overlay">
//         <div className="vg-play-btn">
//           {playing ? (
//             /* Pause icon */
//             <svg viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 0 }}>
//               <rect x="5" y="3" width="4" height="18" rx="1" />
//               <rect x="15" y="3" width="4" height="18" rx="1" />
//             </svg>
//           ) : (
//             /* Play icon */
//             <svg viewBox="0 0 24 24">
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           )}
//         </div>
//         <div className="vg-caption">
//           <h3>{video.title}</h3>
//           <p>{video.desc}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Main Component ─────────────────────────────────────────────────────────
// export default function VaktarGallery() {
//   const navItems = [
//   { name: "About", url: "/#about" },
//   { name: "Sectors", url: "/#sectors" },
//   { name: "Guide", url: "/#guide" },
//   { name: "People", url: "/#people" },
//   { name: "Try", url: "/avatar" },
//   { name: "Chat", url: "/chat" },
//   { name: "Gallery", url: "/gallery" },
//   { name: "Login", url: "/#login" },
// ]
//   return (
//     <div className="vg-root">
//       <style>{CSS}</style>
//       <NavBar items={navItems} className="!left-1/2 !-translate-x-1/2 !w-auto" />

//       {/* Hero */}
//       <section className="vg-hero">
//         <div className="vg-hero-tag">✦ Visual Gallery</div>
//         <h1 className="vg-hero-title">
//           Moments <span>Captured</span>
//           <br />by Intelligence
//         </h1>
//         <p className="vg-hero-sub">
//           Explore a curated selection of AI-generated visuals — each frame a testament
//           to what Vaktar AI sees and creates.
//         </p>
//       </section>

//       {/* 2×2 Video Grid */}
//       <section className="vg-grid">
//         {VIDEOS.map((video, i) => (
//           <VideoCard key={i} video={video} />
//         ))}
//       </section>

//       {/* Footer */}
//       <footer className="vg-footer">
//         <div className="vg-footer-brand">Vaktar <span>AI</span></div>
//         <div className="vg-footer-links">
//           {["Privacy", "Terms", "Docs", "Contact"].map((l) => (
//             <a key={l} href="#">{l}</a>
//           ))}
//         </div>
//         <div className="vg-footer-copy">© 2025 Vaktar AI. All rights reserved.</div>
//       </footer>
//     </div>
//   )
// }

import { useState, useRef } from "react"
import { NavBar } from "@workspace/ui/components/ui/tubelight-navbar";
// ── Types ──────────────────────────────────────────────────────────────────
interface VideoItem {
  src: string
  poster: string
  title: string
  desc: string
}

// ── Data ───────────────────────────────────────────────────────────────────
const VIDEOS: VideoItem[] = [
  {
    src: "/gallery_video/video1.mp4",
    poster: "https://via.placeholder.com/800",
    title: "My Video 1",
    desc: "Custom video",
  },
  {
    src: "/gallery_video/video2.mp4",
    poster: "https://via.placeholder.com/800",
    title: "My Video 2",
    desc: "Custom video",
  },
  {
    src: "/gallery_video/video3.mp4",
    poster: "https://via.placeholder.com/800",
    title: "My Video 3",
    desc: "Custom video",
  },
  {
    src: "/gallery_video/video4.mp4",
    poster: "https://via.placeholder.com/800",
    title: "My Video 4",
    desc: "Custom video",
  },
]
// ── Scoped CSS ─────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

  .vg-root {
    --navy:     #223448;
    --steel:    #547892;
    --pale:     #94b4c1;
    --beige:    #e9e0cf;
    --beige2:   #ddd3be;
    --bg:       #d9f0f6;
    --surface:  #f2ece0;
    --border:   rgba(34,52,72,0.12);
    --accent:   #547892;
    --text:     #1a2a3a;
    --muted:    #6a8598;
    --nav-h:    80px;
    --footer-h: 72px;

    background: var(--bg);
    color: var(--text);
    font-family: 'Taviraj', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .vg-root .tubelight-pill {
    min-width: max-content;
    }
  }

  .vg-root *, .vg-root *::before, .vg-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  /* ── HERO ── */
  .vg-hero {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; text-align: center;
    padding: calc(var(--nav-h) + 8px) 24px 24px;
  }
  .vg-hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 16px; border-radius: 100px;
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 20px;
  }
  .vg-hero-title {
    font-family: 'Taviraj', serif; font-weight: 600;
    font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.1;
    letter-spacing: -0.02em; margin-bottom: 14px; color: var(--navy);
  }
  .vg-hero-title span {
    background: linear-gradient(90deg, var(--accent), var(--pale));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .vg-hero-sub {
    font-size: 1rem; color: var(--muted); max-width: 460px; line-height: 1.7;
  }

  /* ── VIDEO GRID ── */
  .vg-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding: 0 32px 40px;
  }

  /* ── VIDEO CARD ── */
  .vg-card {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--navy);
    cursor: pointer;
    box-shadow: 0 4px 24px rgba(34,52,72,0.12);
    transition: box-shadow 0.3s, transform 0.3s;
    aspect-ratio: 16/9;
  }

  .vg-card:hover {
    box-shadow: 0 16px 48px rgba(34,52,72,0.22);
    transform: translateY(-3px);
  }

  .vg-card video {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }

  /* ── OVERLAY (shown when not playing) ── */
  .vg-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(22,36,52,0.75) 0%, rgba(22,36,52,0.15) 60%, transparent 100%);
    display: flex; flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    transition: opacity 0.3s;
  }

  .vg-card.playing .vg-overlay {
    opacity: 0;
    pointer-events: none;
  }

  .vg-card.playing:hover .vg-overlay {
    opacity: 1;
    pointer-events: auto;
  }

  .vg-caption h3 {
    font-family: 'Taviraj', serif; font-weight: 600;
    font-size: 1.1rem; color: var(--beige); margin-bottom: 4px;
  }
  .vg-caption p {
    font-size: 0.8rem;
    color: rgba(233,224,207,0.7);
  }

  /* ── PLAY BUTTON ── */
  .vg-play-btn {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 60px; height: 60px;
    border-radius: 50%;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255,255,255,0.4);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, transform 0.2s;
  }

  .vg-card:hover .vg-play-btn {
    background: rgba(255,255,255,0.28);
    transform: translate(-50%, -50%) scale(1.1);
  }

  .vg-card.playing .vg-play-btn {
    opacity: 0;
  }

  .vg-card.playing:hover .vg-play-btn {
    opacity: 1;
  }

  .vg-play-btn svg {
    width: 22px; height: 22px; fill: #fff;
    margin-left: 4px;
  }

  /* pause icon shown when playing */
  .vg-pause-icon svg {
    margin-left: 0;
  }

  /* ── FOOTER ── */
  .vg-footer {
    height: var(--footer-h);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 36px;
    border-top: 1px solid rgba(148,180,193,0.2);
    background: var(--navy);
    flex-shrink: 0;
  }
  .vg-footer-brand {
    font-family: 'Taviraj', serif; font-weight: 600;
    font-size: 0.95rem; color: var(--beige);
  }
  .vg-footer-brand span { color: var(--pale); }
  .vg-footer-links { display: flex; gap: 24px; }
  .vg-footer-links a {
    font-size: 0.8rem; color: var(--pale);
    text-decoration: none; transition: color 0.2s;
  }
  .vg-footer-links a:hover { color: var(--beige); }
  .vg-footer-copy { font-size: 0.75rem; color: var(--pale); opacity: 0.7; }

  @media (max-width: 640px) {
    .vg-grid { grid-template-columns: 1fr; grid-template-rows: auto; padding: 0 16px 32px; }
    .vg-footer { flex-direction: column; gap: 10px; height: auto; padding: 20px; text-align: center; }
  }
`

// ── Video Card ─────────────────────────────────────────────────────────────
function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleMouseEnter = () => {
    if (!playing && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (!playing && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleClick = () => {
    const vid = videoRef.current
    if (!vid) return

    if (playing) {
      vid.pause()
      vid.currentTime = 0
      vid.muted = true
      setPlaying(false)
    } else {
      vid.muted = false
      vid.play()
      setPlaying(true)
    }
  }

  const handleVideoEnded = () => {
    setPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = true
    }
  }

  return (
    <div
      className={`vg-card${playing ? " playing" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnded}
      />

      <div className="vg-overlay">
        <div className="vg-play-btn">
          {playing ? (
            /* Pause icon */
            <svg viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 0 }}>
              <rect x="5" y="3" width="4" height="18" rx="1" />
              <rect x="15" y="3" width="4" height="18" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
        <div className="vg-caption">
          <h3>{video.title}</h3>
          <p>{video.desc}</p>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function VaktarGallery() {
  const navItems = [
  { name: "About", url: "/#about" },
  { name: "Sectors", url: "/#sectors" },
  { name: "Guide", url: "/#guide" },
  { name: "People", url: "/#people" },
  { name: "Try", url: "/avatar" },
  { name: "Chat", url: "/chat" },
  { name: "Gallery", url: "/gallery" },
  { name: "Login", url: "/#login" },
]
  return (
    <div className="vg-root">
      <style>{CSS}</style>
      <NavBar items={navItems} fullWidth />

      {/* Hero */}
      <section className="vg-hero">
        <div className="vg-hero-tag">✦ Visual Gallery</div>
        <h1 className="vg-hero-title">
          Moments <span>Captured</span>
          <br />by Intelligence
        </h1>
        <p className="vg-hero-sub">
          Explore a curated selection of AI-generated visuals — each frame a testament
          to what Vaktar AI sees and creates.
        </p>
      </section>

      {/* 2×2 Video Grid */}
      <section className="vg-grid">
        {VIDEOS.map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
      </section>

      {/* Footer */}
      <footer className="vg-footer">
        <div className="vg-footer-brand">Vaktar <span>AI</span></div>
        <div className="vg-footer-links">
          {["Privacy", "Terms", "Docs", "Contact"].map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
        <div className="vg-footer-copy">© 2025 Vaktar AI. All rights reserved.</div>
      </footer>
    </div>
  )
}