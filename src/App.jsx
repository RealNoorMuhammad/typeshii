import { useState, useCallback, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import typeshiiImage from './assets/typeshii.png'
// Gallery images
import g1 from './assets/g1.jpg'
import g2 from './assets/g2.jpg'
import g3 from './assets/g3.jpg'
import './App.css'

const GALLERY_IMAGES = [g1, g2, g3]
const HERO_IMAGE = typeshiiImage

// Direct video URLs from Cloudinary
const TIKTOK_PROFILE_URL = 'https://www.tiktok.com/@typeshii'
const TIKTOK_VIDEOS = [
  'https://res.cloudinary.com/dvp5f8zbt/video/upload/v1771233999/ssstik.io__leothehomelesstort_1771233947291_o6un2m.mp4',
  'https://res.cloudinary.com/dvp5f8zbt/video/upload/v1771234129/ssstik.io__leothehomelesstort_1771233885301_ehspr5.mp4',
  'https://res.cloudinary.com/dvp5f8zbt/video/upload/v1771234142/ssstik.io__leothehomelesstort_1771233920559_jfyxlf.mp4',
  'https://res.cloudinary.com/dvp5f8zbt/video/upload/v1771234150/ssstik.io__leothehomelesstort_1771233901808_ycl0a6.mp4',
  'https://res.cloudinary.com/dvp5f8zbt/video/upload/v1771234155/ssstik.io_1771233849640_plywtv.mp4',
]

const CONTRACT_ADDRESS = 'J2PTfUwVMFYxJsEkgcbzazyX4aLbVgZzDBBU1WcFpump'
const DEXSCREENER_EMBED_URL =
  'https://dexscreener.com/solana/dn37kcnvq7eic3e9ktwfpzjbyebpvhgmjuznybhjedjq?embed=1&chartTheme=dark&theme=dark&chartLeftToolbar=0&loadChartSettings=0'

function App() {
  const [toastVisible, setToastVisible] = useState(false)
  const [chartLoaded, setChartLoaded] = useState(false)
  const [copied, setCopied] = useState(false)
  const tiktokScrollRef = useRef(null)
  const videoRefs = useRef([])

  const scrollTiktok = useCallback((direction) => {
    const el = tiktokScrollRef.current
    if (!el) return
    const step = Math.min(380, el.offsetWidth * 0.95)
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
  }, [])

  const handleVideoPlay = useCallback((currentIndex) => {
    // Pause all other videos except the one that's playing
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef && index !== currentIndex && !videoRef.paused) {
        videoRef.pause()
      }
    })
  }, [])


  const copyAddress = useCallback(async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS)
        setCopied(true)
        setToastVisible(true)
        setTimeout(() => {
          setToastVisible(false)
          setCopied(false)
        }, 3000)
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea')
        textArea.value = CONTRACT_ADDRESS
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        
        try {
          const successful = document.execCommand('copy')
          if (successful) {
            setCopied(true)
            setToastVisible(true)
            setTimeout(() => {
              setToastVisible(false)
              setCopied(false)
            }, 3000)
          } else {
            throw new Error('Copy command failed')
          }
        } catch (err) {
          console.error('Failed to copy:', err)
          // Still show toast even if copy fails
          setToastVisible(true)
          setTimeout(() => {
            setToastVisible(false)
          }, 3000)
          alert('Failed to copy address. Please copy manually: ' + CONTRACT_ADDRESS)
        } finally {
          document.body.removeChild(textArea)
        }
      }
    } catch (err) {
      console.error('Failed to copy:', err)
      // Fallback: try the old method
      try {
        const textArea = document.createElement('textarea')
        textArea.value = CONTRACT_ADDRESS
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        
        if (successful) {
          setCopied(true)
          setToastVisible(true)
          setTimeout(() => {
            setToastVisible(false)
            setCopied(false)
          }, 3000)
        } else {
          throw new Error('Fallback copy failed')
        }
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
        // Show toast anyway
        setToastVisible(true)
        setTimeout(() => {
          setToastVisible(false)
        }, 3000)
        alert('Failed to copy address. Please copy manually: ' + CONTRACT_ADDRESS)
      }
    }
  }, [])

  return (
    <div className="app">
      {/* Dark web background — grid + scanlines */}
      <div className="video-background" aria-hidden="true">
        <div className="video-background__overlay" aria-hidden="true" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-scanline" aria-hidden="true" />
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />

      <Navbar />

      <main className="main">
        <section className="hero">
          {/* Floating particles background */}
          <div className="hero-particles" aria-hidden="true">
            <div className="hero-particle"></div>
            <div className="hero-particle"></div>
            <div className="hero-particle"></div>
            <div className="hero-particle"></div>
            <div className="hero-particle"></div>
          </div>
          
          <div className="hero-container">
            {/* Left Side - Text Content */}
            <div className="hero-left">
              <div className="hero-content">
                <p className="hero-badge">
                  <span className="hero-badge-icon">🔥</span>
                  $TYPESHII Meme Coin
                </p>
                <h1 className="hero-leo" aria-hidden="true">
                  <span className="hero-leo-dollar">$</span>
                  <span className="hero-leo-text">TYPESHII</span>
                </h1>
                <p className="hero-subtitle">Born in the shadows of the dark web</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <div className="hero-image-border"></div>
                <img
                  src={HERO_IMAGE}
                  alt="TypeShii — dark web meme coin"
                  className="hero-image"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-image-overlay" aria-hidden="true" />
                <div className="hero-image-glow" aria-hidden="true" />
                <div className="hero-image-shine" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* CA — Contract Address Section (Separate) */}
        <section className="contract-address-section">
          <div className="contract-address-container">
            <span className="contract-address-label">CA — Contract Address</span>
            <div className="contract-address-box">
              <code className="contract-address-text">{CONTRACT_ADDRESS}</code>
              <button
                type="button"
                className={`btn btn-copy ${copied ? 'btn-copy--copied' : ''}`}
                onClick={copyAddress}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="Copy contract address"
                tabIndex={0}
              >
                {copied ? (
                  <>
                    <span className="btn-copy-icon">✓</span>
                    Copied!
                  </>
                ) : (
                  'Copy Address'
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="lore" id="lore">
          <h2 className="lore-heading">TypeShii Lore</h2>
          <div className="lore-inner">
            <div className="lore-media">
              <img
                src={typeshiiImage}
                alt="TypeShii sigil glowing in the dark web grid"
                className="lore-image"
                loading="lazy"
                decoding="async"
              />
              <div className="lore-image-shine" aria-hidden="true" />
            </div>
              <div className="lore-content">
                <p className="lore-text">
                  TypeShii was forged by anonymous coders deep in the dark web, where broken scripts and failed
                  memes go to die. One glitched TypeScript snippet refused to crash, mutating into a fully sentient,
                  completely unhinged memecoin that thrives on chaos, terminal green, and late-night deploys.
                </p>
              </div>
          </div>
        </section>

        <section className="tiktok-slider" id="videos">
          <h2 className="tiktok-slider-heading">TypeShii Transmission Feed</h2>
          <p className="tiktok-slider-profile">
            From{' '}
            <a
              href={TIKTOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tiktok-slider-profile-link"
            >
              @typeshii
            </a>
            {' '}on TikTok
          </p>
          <div className="tiktok-slider-wrap">
            <button
              type="button"
              className="tiktok-slider-btn tiktok-slider-btn--prev"
              onClick={() => scrollTiktok('prev')}
              aria-label="Previous video"
            >
              ‹
            </button>
            <div className="tiktok-slider-track" ref={tiktokScrollRef}>
              {TIKTOK_VIDEOS.map((url, i) => (
                <div key={i} className="tiktok-slider-slide">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el
                    }}
                    className="tiktok-video"
                    src={url}
                    controls
                    playsInline
                    preload="metadata"
                    style={{ maxWidth: '605px', minWidth: '325px' }}
                    onPlay={() => handleVideoPlay(i)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="tiktok-slider-btn tiktok-slider-btn--next"
              onClick={() => scrollTiktok('next')}
              aria-label="Next video"
            >
              ›
            </button>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <h2 className="gallery-heading">Glitched Gallery</h2>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="gallery-item">
                <div className="gallery-item-inner">
                  <img
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gallery-fire-overlay" aria-hidden="true" />
                  <div className="gallery-glow" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dexscreener-section" id="chart">
          <h2 className="dexscreener-heading">Dark Web Liquidity</h2>
          <p className="dexscreener-desc">$TYPESHII / SOL on DexScreener — Dark Web of TypeShii</p>
          <div className="dexscreener-wrap">
            <div className="dexscreener-frame-wrap">
              {!chartLoaded && (
                <div className="dexscreener-loading" aria-hidden="true">
                  <div className="dexscreener-loading-spinner" />
                  <span className="dexscreener-loading-text">Loading chart…</span>
                </div>
              )}
              <iframe
                src={DEXSCREENER_EMBED_URL}
                className={`dexscreener-iframe ${chartLoaded ? 'dexscreener-iframe--loaded' : ''}`}
                title="LEO SOL pair on DexScreener"
                onLoad={() => setChartLoaded(true)}
              />
              <div className="dexscreener-glow" aria-hidden="true" />
            </div>
            <a
              href="https://dexscreener.com/solana/dn37kcnvq7eic3e9ktwfpzjbyebpvhgmjuznybhjedjq"
              target="_blank"
              rel="noopener noreferrer"
              className="dexscreener-link"
            >
              Open in DexScreener →
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Toast — slides in from right */}
      <div
        className={`toast ${toastVisible ? 'toast--visible' : ''}`}
        role="status"
        aria-live="polite"
        aria-hidden={!toastVisible}
      >
        <span className="toast-icon">✓</span>
        <span className="toast-message">Address copied!</span>
      </div>
    </div>
  )
}

export default App
