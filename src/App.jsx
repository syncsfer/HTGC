import { C, F1, F2 } from "./constants/colors";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import AnimatedCoin from "./components/AnimatedCoin";
import Calculator from "./components/Calculator";
import tokenImg from "./assets/htgc-token.png";
import heroBg from "./assets/hero-bg.png";
import solLogo from "./assets/sol-logo.jpeg";
import stellarLogo from "./assets/stellar-logo.png";
import baseLogo from "./assets/base-logo.png";

// ── shared section helpers ──────────────────────────────
const DARK = "#0A0A10";
const DARK2 = "#111118";

const Label = ({ children, color = C.accent }) => (
  <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: 3, fontFamily: F1, marginBottom: 14, textTransform: "uppercase" }}>
    {children}
  </div>
);

const steps = [
  { n: "01", t: "Deposit", d: "Send gourde to the partner bank or convert USD through the Insfers app.", icon: "↓" },
  { n: "02", t: "Mint", d: "Insfers mints HTGC 1:1 on Solana, Stellar, or Base. Gourde goes into sovereign reserves.", icon: "◆" },
  { n: "03", t: "Transfer", d: "Send HTGC anywhere in the world instantly. Fractions of a cent per transaction.", icon: "→" },
  { n: "04", t: "Redeem", d: "Burn HTGC, get gourde back. Bank, MonCash, Natcash, or cash. Always 1:1.", icon: "↑" },
];

const reserveBars = [
  { pct: 65, label: "Bons BRH (91-day)", yield: "~17%", color: C.accent },
  { pct: 20, label: "Treasury Bonds", yield: "~16-19%", color: C.teal },
  { pct: 10, label: "BRH Deposits", yield: "~16%", color: "#00209F" },
  { pct: 5, label: "Operating Cash", yield: "~4%", color: C.gray },
];

const networks = [
  {
    name: "Solana",
    sub: "SPL Token-2022",
    speed: "400ms",
    cost: "$0.00025",
    color: "#D12229",
    grad: "linear-gradient(135deg, #D12229, #E63946)",
    logo: solLogo,
    desc: "High throughput for DeFi, DEX trading, and developer integrations. Compliance-ready with freeze authority and transfer hooks.",
    features: ["Jupiter & Raydium DEX listing", "Token-2022 compliance hooks", "Fee sponsorship via relayer"],
  },
  {
    name: "Stellar",
    sub: "Stellar Asset + SEP",
    speed: "3-5s",
    cost: "$0.00001",
    color: "#00209F",
    grad: "linear-gradient(135deg, #001166, #00209F)",
    logo: stellarLogo,
    desc: "Purpose-built for remittances. SEP-24/31 standards for regulated cross-border corridors.",
    features: ["SEP-24/31 remittance rails", "Native SDEX trading", "USDC bridge via Stellar"],
  },
  {
    name: "Base",
    sub: "ERC-20 · Ethereum L2",
    speed: "~2s",
    cost: "$0.001",
    color: "#0052FF",
    grad: "linear-gradient(135deg, #0040CC, #0052FF)",
    logo: baseLogo,
    desc: "Coinbase's Ethereum L2 — bringing HTGC to the broadest DeFi ecosystem with low fees and deep liquidity.",
    features: ["Uniswap & Aerodrome liquidity", "Coinbase wallet native support", "ERC-20 composability"],
  },
];

const impactStats = [
  { s: "1813", l: "Year the gourde was born", d: "One of the world's oldest currencies now on blockchain" },
  { s: "$4.1B", l: "Remittances to Haiti", d: "HTGC cuts fees from 8% to under 2%" },
  { s: "80%", l: "Adults unbanked", d: "HTGC works on any phone with a SIM" },
  { s: "~131", l: "HTG per USD", d: "HTGC creates structural gourde demand" },
  { s: "2M+", l: "Diaspora worldwide", d: "First way to hold digital gourde abroad" },
  { s: "24/7", l: "Global access", d: "No bank hours. No intermediaries." },
];

const regulations = [
  { flag: "🇭🇹", j: "Haiti", r: "BRH Stablecoin Issuer", d: "Certificate of Authority" },
  { flag: "🇺🇸", j: "United States", r: "GENIUS Act Issuer", d: "OCC + FinCEN MSB" },
  { flag: "🇪🇺", j: "European Union", r: "MiCA EMT", d: "AMF France" },
  { flag: "🇨🇦", j: "Canada", r: "FINTRAC MSB", d: "Federal registration" },
];

const tickerItems = [
  { l: "EST. 1813 — ONE OF THE WORLD'S OLDEST CURRENCIES ON CHAIN", c: C.accent },
  { l: "1:1 GOURDE PEG", c: C.teal },
  { l: "LAUNCHING SOON", c: C.accent },
  { l: "FULLY BACKED BY REAL CASH AND CASH EQUIVALENTS", c: C.teal },
  { l: "$4.1B REMITTANCE MARKET", c: C.teal },
  { l: "SOLANA · STELLAR · BASE", c: C.accent },
  { l: "SEND", c: C.accent },
  { l: "SPEND", c: C.teal },
  { l: "TRADE", c: C.accent },
];

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, background: C.bg, overflowX: "hidden" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        rel="stylesheet"
      />

      <Nav />

      {/* ══════ HERO ══════ */}
      <section className="hero-section" style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "110px 48px 80px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: "60%", backgroundPosition: "right center", backgroundRepeat: "no-repeat", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0) 100%)" }} />
        <div className="hero-grid" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 480px", gap: 72, alignItems: "center", position: "relative", zIndex: 2, width: "100%" }}>
          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,32,159,0.07)", border: "1px solid rgba(0,32,159,0.15)", borderRadius: 100, padding: "6px 16px 6px 8px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.teal, animation: "pulse2 2s infinite" }} />
                  <span style={{ fontSize: 11.5, color: C.teal, fontWeight: 700, fontFamily: F1, letterSpacing: 1.5 }}>EST. 1813 · ONE OF THE WORLD'S OLDEST CURRENCIES ON CHAIN</span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(209,34,41,0.07)", border: "1px solid rgba(209,34,41,0.2)", borderRadius: 100, padding: "6px 16px 6px 8px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, animation: "pulse2 2s infinite 0.5s" }} />
                  <span style={{ fontSize: 11.5, color: C.accent, fontWeight: 700, fontFamily: F1, letterSpacing: 1.5 }}>LAUNCHING SOON</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="hero-h1" style={{ fontSize: 68, fontWeight: 800, color: C.text, lineHeight: 1.0, margin: "0 0 24px", fontFamily: F1, letterSpacing: -3 }}>
                212 years<br />of history.<br /><span style={{ color: C.accent }}>Now on blockchain.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="hero-p" style={{ fontSize: 18, color: C.sub, lineHeight: 1.8, maxWidth: 500, margin: "0 0 40px", fontFamily: F2 }}>
                HTGC is the Haitian gourde on blockchain — pegged 1:1, backed by Haiti's treasury bills and bonds. One of the world's oldest national currencies, finally tokenized on Solana, Stellar, and Base. Issued by <strong style={{ color: C.text }}>Insfers</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <a href="#cta" style={{ background: C.accent, color: "#fff", padding: "15px 34px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: F1, boxShadow: "0 6px 28px rgba(209,34,41,0.28)", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(209,34,41,0.38)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(209,34,41,0.28)"; }}>
                  Join Waitlist
                </a>
                <a href="#how" style={{ color: C.text, padding: "15px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none", fontFamily: F2, border: "1.5px solid rgba(0,0,0,0.12)", background: "transparent" }}>
                  How It Works →
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="hero-stats" style={{ display: "flex", gap: 36, marginTop: 52, paddingTop: 36, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                {[{ n: "<2%", l: "Transfer fee" }, { n: "1:1", l: "HTG peg" }, { n: "24/7", l: "Availability" }, { n: "~5s", l: "Settlement" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: i % 2 === 0 ? C.accent : C.teal, fontFamily: F1 }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: C.gray, fontFamily: F2, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.35} className="hero-coin" style={{ display: "flex", justifyContent: "center" }}>
            <AnimatedCoin />
          </Reveal>
        </div>
      </section>

      {/* ══════ TICKER ══════ */}
      <div style={{ background: "#F0F2F5", overflow: "hidden", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", animation: "marquee 35s linear infinite", width: "max-content" }}>
          {[...Array(2)].flatMap((_, rep) =>
            tickerItems.map((item, i) => (
              <div key={`${rep}-${i}`} style={{ display: "flex", alignItems: "center", gap: 10, paddingRight: 56, whiteSpace: "nowrap" }}>
                <img src={tokenImg} alt="" style={{ width: 16, height: 16, objectFit: "contain", opacity: 0.6 }} />
                <span style={{ fontSize: 11.5, fontWeight: 700, color: item.c, fontFamily: F1, letterSpacing: 2 }}>{item.l}</span>
              </div>
            ))
          )}
        </div>
      </div>


      {/* ══════ HOW IT WORKS ══════ */}
      <section id="how" className="section-pad" style={{ background: "#F8F8FA", padding: "120px 48px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.teal, letterSpacing: 3, fontFamily: F1, marginBottom: 14 }}>MINT & BURN</div>
              <h2 className="section-h2" style={{ fontSize: 46, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.8, margin: 0 }}>How HTGC works</h2>
            </div>
          </Reveal>
          <div className="four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" }}>
            {/* connector line */}
            <div style={{ position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(90deg, rgba(209,34,41,0.2), rgba(0,32,159,0.2))", zIndex: 0 }} />
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "36px 24px 28px", border: "1px solid rgba(0,0,0,0.07)", textAlign: "center", position: "relative", zIndex: 1, transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = i % 2 === 0 ? "rgba(209,34,41,0.25)" : "rgba(0,32,159,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: i % 2 === 0 ? "rgba(209,34,41,0.08)" : "rgba(0,32,159,0.08)", border: `1px solid ${i % 2 === 0 ? "rgba(209,34,41,0.2)" : "rgba(0,32,159,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22, color: i % 2 === 0 ? C.accent : C.teal }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: i % 2 === 0 ? C.accent : C.teal, fontFamily: F1, letterSpacing: 2.5, marginBottom: 8 }}>STEP {s.n}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "0 0 10px", fontFamily: F1 }}>{s.t}</h3>
                  <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.7, margin: 0, fontFamily: F2 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══════ NETWORKS ══════ */}
      <section id="networks" className="section-pad" style={{ background: "#F8F8FA", padding: "120px 48px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <Label color={C.teal}>Blockchain Networks</Label>
              <h2 className="section-h2" style={{ fontSize: 46, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.8, margin: "0 0 14px" }}>Three chains. One gourde.</h2>
              <p style={{ fontSize: 17, color: C.sub, fontFamily: F2, maxWidth: 480, margin: "0 auto" }}>Natively issued on Solana, Stellar, and Base. Same reserves. Different superpowers.</p>
            </div>
          </Reveal>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {networks.map((n, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div style={{ background: "#fff", borderRadius: 24, padding: "36px 36px 32px", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", transition: "box-shadow 0.3s, transform 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px ${n.color}22`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "none"; }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${n.color}22`, border: "1px solid rgba(0,0,0,0.07)", flexShrink: 0 }}>
                      <img src={n.logo} alt={n.name} style={{ width: 32, height: 32, objectFit: "contain", borderRadius: 6 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: C.text, fontFamily: F1 }}>{n.name}</div>
                      <div style={{ fontSize: 12, color: C.gray, fontFamily: F2 }}>{n.sub}</div>
                    </div>
                    {/* Token mini */}
                    <img src={tokenImg} alt="" style={{ width: 32, height: 32, objectFit: "contain", marginLeft: "auto", opacity: 0.85 }} />
                  </div>
                  <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.75, margin: "0 0 24px", fontFamily: F2 }}>{n.desc}</p>
                  {/* Metrics */}
                  <div style={{ display: "flex", gap: 0, marginBottom: 24, background: "#F8F8FA", borderRadius: 12, overflow: "hidden" }}>
                    {[{ l: "Finality", v: n.speed }, { l: "Cost/tx", v: n.cost }].map((m, j) => (
                      <div key={j} style={{ flex: 1, padding: "14px 20px", borderRight: j === 0 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                        <div style={{ fontSize: 10.5, color: C.gray, fontFamily: F2, marginBottom: 4, letterSpacing: 0.5 }}>{m.l}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: n.color, fontFamily: F1 }}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                  {n.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${n.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: n.color, fontWeight: 700, flexShrink: 0 }}>✓</div>
                      <span style={{ fontSize: 13.5, color: C.text, fontFamily: F2 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══════ IMPACT GRID ══════ */}
      <section className="section-pad" style={{ background: "#F8F8FA", padding: "120px 48px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        {/* Token watermark */}
        <img src={tokenImg} alt="" style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 480, opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label color={C.teal}>Impact</Label>
              <h2 className="section-h2" style={{ fontSize: 46, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.8, margin: 0 }}>Built for Haiti. Available everywhere.</h2>
            </div>
          </Reveal>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {impactStats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 18, padding: "28px 28px 24px", border: "1px solid rgba(0,0,0,0.07)", transition: "box-shadow 0.25s, transform 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ fontSize: 32, fontWeight: 800, fontFamily: F1, color: i % 2 === 0 ? C.accent : C.teal, marginBottom: 8 }}>{s.s}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text, margin: "0 0 6px", fontFamily: F1 }}>{s.l}</div>
                  <div style={{ fontSize: 13, color: C.sub, fontFamily: F2, lineHeight: 1.6 }}>{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ REGULATED ══════ */}
      <section className="section-pad" style={{ background: "#fff", padding: "120px 48px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <Label color={C.accent}>Compliance</Label>
              <h2 className="section-h2" style={{ fontSize: 46, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.8, margin: "0 0 14px" }}>Regulated everywhere it matters.</h2>
              <p style={{ fontSize: 17, color: C.sub, fontFamily: F2, maxWidth: 500, margin: "0 auto" }}>Compliance-first. Every jurisdiction. Every transaction. No shortcuts.</p>
            </div>
          </Reveal>
          <div className="four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {regulations.map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "#F8F8FA", borderRadius: 20, padding: "28px 20px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center", transition: "transform 0.25s, box-shadow 0.25s, background 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.background = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "#F8F8FA"; }}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{r.flag}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: F1, marginBottom: 5 }}>{r.j}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.accent, fontFamily: F1, marginBottom: 5, letterSpacing: 0.3 }}>{r.r}</div>
                  <div style={{ fontSize: 11.5, color: C.sub, fontFamily: F2 }}>{r.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section id="cta" className="section-pad" style={{ background: "#fff", padding: "140px 48px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        {/* Token watermarks */}
        <img src={tokenImg} alt="" style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", width: 520, opacity: 0.05, pointerEvents: "none" }} />
        <img src={tokenImg} alt="" style={{ position: "absolute", left: -100, top: "50%", transform: "translateY(-50%) scaleX(-1)", width: 400, opacity: 0.03, pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <Reveal>
            <img src={tokenImg} alt="HTGC" style={{ width: 88, height: 88, objectFit: "contain", marginBottom: 28, filter: "drop-shadow(0 8px 24px rgba(0,32,159,0.2))" }} />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-h2" style={{ fontSize: 52, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -2.2, margin: "0 0 20px", lineHeight: 1.05 }}>
              One of the world's oldest<br />currencies, on the newest rails.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p style={{ fontSize: 18, color: C.sub, fontFamily: F2, margin: "0 0 44px", lineHeight: 1.75 }}>
              The Haitian gourde has survived 212 years of history. Now it goes global. Be first to send, hold, and build with HTGC.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://insfers.com" style={{ background: C.accent, color: "#fff", padding: "16px 38px", borderRadius: 13, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: F1, boxShadow: "0 8px 32px rgba(209,34,41,0.25)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 44px rgba(209,34,41,0.38)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(209,34,41,0.25)"; }}>
                Join Waitlist
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer style={{ background: "#F8F8FA", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "64px 48px 32px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, marginBottom: 52 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <img src={tokenImg} alt="HTGC" style={{ width: 36, height: 36, objectFit: "contain" }} />
                <span style={{ fontSize: 18, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -0.5 }}>HTGC</span>
              </div>
              <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.75, maxWidth: 290, fontFamily: F2, margin: "0 0 24px" }}>
                Issued by Insfers. A regulated payment stablecoin pegged 1:1 to the Haitian gourde, backed by Haiti's treasury bills and bonds.
              </p>
              {/* Chain badges */}
              <div style={{ display: "flex", gap: 8 }}>
                {["Solana", "Stellar", "Base"].map(chain => (
                  <div key={chain} style={{ fontSize: 11, fontWeight: 600, color: C.gray, fontFamily: F1, padding: "5px 12px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 20, letterSpacing: 0.5 }}>{chain}</div>
                ))}
              </div>
            </div>
            {[
                ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: C.gray, marginBottom: 16, fontFamily: F1, letterSpacing: 2.5, textTransform: "uppercase" }}>{col.t}</div>
                {col.l.map(link => (
                  <a key={link} href="#" style={{ display: "block", fontSize: 13.5, color: C.sub, textDecoration: "none", marginBottom: 10, fontFamily: F2, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.target.style.color = C.text)}
                    onMouseLeave={e => (e.target.style.color = C.sub)}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: C.gray, fontFamily: F2 }}>&copy; 2026 Insfers. All rights reserved.</span>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 12, color: C.gray, fontFamily: F2 }}>Est. 1813 &middot; Haitian Gourde Coin</span>
              <a href="https://x.com/HTGCOIN" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.gray, textDecoration: "none", fontFamily: F2, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = C.gray)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @HTGCOIN
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
