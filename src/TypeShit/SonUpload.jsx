import React from 'react';
import Marquee from 'react-fast-marquee';
import './SonUpload.css';
import dex from './assets/dex.png';
import s1 from './assets/s1.jpg';
import s2 from './assets/s2.jpg';
import s3 from './assets/s3.jpg';
import g1 from './assets/g1.jpg';
import g2 from './assets/g2.jpg';
import g3 from './assets/g3.jpg';
function XLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SonUpload() {
  return (
    <div className="ts-page">
    

      <main>
        <section className="ts-hero" id="top">
          <div className="ts-hero-media" aria-hidden="true" />
          <div className="ts-hero-overlay" aria-hidden="true" />

          <div className="ts-hero-inner">
            <p className="ts-pill">Solana meme coin </p>
            <h1 className="ts-hero-title">TypeShii</h1>
            <p className="ts-hero-sub">
              An aggressive street-style cat ruling the Solana blocks. Built for degens who type fast,
              move faster, and meme the loudest.
            </p>
            <div className="ts-hero-actions">
              <a href="#how" className="ts-cta-main">Buy Shii</a>
              <span className="ts-hero-tagline">No roadmap. Just vibes, volume, and velocity.</span>
            </div>
          </div>
        </section>

        <div className="ts-hero-divider" aria-hidden="true">
          <span className="ts-divider-line" />
          <span className="ts-divider-diamond" />
          <span className="ts-divider-line" />
        </div>

        <div className="ts-marquee-wrap">
          <Marquee
            className="ts-marquee"
            speed={48}
            gradient={false}
            pauseOnHover
          >
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
         <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
             <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
       <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
         <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
       <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />

                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
          </Marquee>
        </div>

        <section id="gallery" className="ts-section ts-section-alt ts-gallery">
          <div className="ts-section-header">
            <h2>Gallery</h2>
            <p>Straight from the block. Vibes, art, and the $Shii universe.</p>
          </div>
          <div className="ts-gallery-grid">
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={s1} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={s2} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={s3} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g1} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g2} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g3} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>Tokenomics</h2>
            <p>Contract details for $Shii are coming soon. Check back here once the launch is live.</p>
          </div>
          <div className="ts-tokenomics-grid">
            <div className="ts-token-card">
              <h3>Contract Address</h3>
              <p className="ts-token-number">
                <span>Coming soon</span>
              </p>
              <p>We will publish the official $Shii contract here after launch. Always double-check before you buy.</p>
              <button
                type="button"
                className="ts-copy-btn"
                onClick={() => navigator.clipboard && navigator.clipboard.writeText('COMING_SOON')}
                disabled
              >
                Copy CA (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        <section id="how" className="ts-section">
          <div className="ts-section-header">
            <h2>How to Buy Shii</h2>
            <p>Getting your paws on $Shii takes three fast Solana moves.</p>
          </div>
          <div className="ts-steps">
            <div className="ts-step">
              <span className="ts-step-index">01</span>
              <h3>Connect a Solana Wallet</h3>
              <p>Use Phantom, Backpack, or any Solana wallet you trust. Load up with SOL for gas and buys.</p>
            </div>
            <div className="ts-step">
              <span className="ts-step-index">02</span>
              <h3>Head to a DEX</h3>
              <p>Open your favorite Solana DEX, paste the official $Shii contract address, and review the pair.</p>
            </div>
            <div className="ts-step">
              <span className="ts-step-index">03</span>
              <h3>Swap & Join the Gang</h3>
              <p>Swap SOL for $Shii, join the community channels, and help steer the narrative on-chain.</p>
            </div>
          </div>
        </section>

        <section id="community" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>The TypeShii Block</h2>
            <p>We live on Solana, but the real action is where the memes and music never sleep.</p>
          </div>
          <div className="ts-community-grid">
            <div className="ts-community-card">
              <h3>Stay Posted</h3>
              <p>Follow our socials for drops, raids, contests, and lore updates straight from the alley.</p>
              <div className="ts-social-row">
                <a href="https://x.com/SonCoin_" target="_blank" rel="noopener noreferrer" className="ts-social-pill" aria-label="X / Twitter">
                  <XLogo className="ts-social-logo" />
              
                </a>
              
                <a href="https://dexscreener.com/solana" target="_blank" rel="noopener noreferrer" className="ts-social-pill" aria-label="DexScreener">
                  <img src={dex} alt="" className="ts-social-logo ts-social-logo-img" />
         
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ts-footer">
        <div className="ts-footer-inner">
          <span>© {new Date().getFullYear()} TypeShii on Solana. All rights reserved to the streets.</span>
          <span className="ts-footer-tag">$Shii • Solana Meme Coin</span>
        </div>
      </footer>
    </div>
  );
}

export default SonUpload;
