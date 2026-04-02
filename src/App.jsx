import { C, F1, F2 } from "./constants/colors";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import AnimatedCoin from "./components/AnimatedCoin";
import Calculator from "./components/Calculator";

const steps = [
  { n: "01", t: "Deposit", d: "Send gourde to the partner bank or convert USD through the Insfers app.", icon: "↓" },
  { n: "02", t: "Mint", d: "Insfers mints HTGC 1:1 on Solana or Stellar. Gourde goes into bons BRH.", icon: "◆" },
  { n: "03", t: "Transfer", d: "Send HTGC anywhere in the world instantly. Fractions of a cent per transaction.", icon: "→" },
  { n: "04", t: "Redeem", d: "Burn HTGC, get gourde back. Bank, MonCash, Natcash, or cash. Always 1:1.", icon: "↑" },
];

const reserveBars = [
  { pct: 65, label: "Bons BRH (91-day)", yield: "~17%", color: C.accent },
  { pct: 20, label: "Treasury Bonds", yield: "~16-19%", color: C.teal },
  { pct: 10, label: "BRH Deposits", yield: "~16%", color: "#7C8CF8" },
  { pct: 5, label: "Operating Cash", yield: "~4%", color: C.gray },
];

const networks = [
  {
    name: "Solana",
    sub: "SPL Token-2022",
    speed: "400ms",
    cost: "$0.00025",
    color: "#9945FF",
    grad: "linear-gradient(135deg, #9945FF, #14F195)",
    desc: "High throughput for DeFi, DEX trading, and developer integrations. Compliance-ready with freeze authority and transfer hooks.",
    features: ["Jupiter & Raydium DEX listing", "Token-2022 compliance hooks", "Fee sponsorship via relayer"],
  },
  {
    name: "Stellar",
    sub: "Stellar Asset + SEP",
    speed: "3-5s",
    cost: "$0.00001",
    color: "#3E5EB8",
    grad: "linear-gradient(135deg, #1A1F3A, #5A8FE8)",
    desc: "Purpose-built for remittances. SEP-24/31 standards for regulated cross-border corridors.",
    features: ["SEP-24/31 remittance rails", "Native SDEX trading", "USDC bridge via Stellar"],
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
  { l: "100% TREASURY BACKED", c: C.accent },
  { l: "BRH PARTNERSHIP", c: C.teal },
  { l: "17% RESERVE YIELD", c: C.accent },
  { l: "$4.1B REMITTANCE MARKET", c: C.teal },
  { l: "SOLANA & STELLAR", c: C.accent },
  { l: "GENIUS ACT COMPLIANT", c: C.teal },
  { l: "MiCA AUTHORIZED", c: C.accent },
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
      <section
        style={{
          background: C.bg,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "100px 32px 60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 80% 60% at 20% 40%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,212,170,0.04) 0%, transparent 60%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 64,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div>
            <Reveal>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(0,212,170,0.08)",
                  border: "1px solid rgba(0,212,170,0.15)",
                  borderRadius: 100,
                  padding: "5px 14px 5px 8px",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(0,212,170,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, animation: "pulse2 2s infinite" }} />
                </div>
                <span style={{ fontSize: 12, color: C.teal, fontWeight: 600, fontFamily: F1, letterSpacing: 1.5 }}>
                  EST. 1813 · ONE OF THE WORLD'S OLDEST CURRENCIES ON CHAIN
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  color: C.white,
                  lineHeight: 1.02,
                  margin: "0 0 24px",
                  fontFamily: F1,
                  letterSpacing: -2.5,
                }}
              >
                212 years of history.<br />Now on blockchain.<br />
                <span style={{ color: C.accent }}>The Haitian gourde, digital.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.75, maxWidth: 480, margin: "0 0 36px", fontFamily: F2 }}>
                The Haitian gourde has been sovereign currency since 1813 — making HTGC one of the world's oldest national currencies
                ever tokenized. Pegged 1:1, backed by Haiti's treasury. Issued by{" "}
                <strong style={{ color: C.white }}>Insfers</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 14 }}>
                <a
                  href="#cta"
                  style={{
                    background: `linear-gradient(135deg, ${C.accent}, ${C.gold})`,
                    color: C.bg,
                    padding: "15px 32px",
                    borderRadius: 14,
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: F1,
                    boxShadow: "0 8px 32px rgba(201,162,39,0.25)",
                  }}
                >
                  Join Waitlist
                </a>
                <a
                  href="#how"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: C.white,
                    padding: "15px 28px",
                    borderRadius: 14,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: F2,
                    border: `1px solid rgba(255,255,255,0.08)`,
                  }}
                >
                  How It Works
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} style={{ display: "flex", justifyContent: "center" }}>
            <AnimatedCoin />
          </Reveal>
        </div>
      </section>

      {/* ══════ TICKER ══════ */}
      <div
        style={{
          background: C.bg,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          overflow: "hidden",
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", animation: "marquee 30s linear infinite", width: "max-content" }}>
          {[...Array(2)].flatMap((_, rep) =>
            tickerItems.map((item, i) => (
              <div
                key={`${rep}-${i}`}
                style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 48, whiteSpace: "nowrap" }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.c }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: item.c, fontFamily: F1, letterSpacing: 2 }}>{item.l}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ══════ CALCULATOR ══════ */}
      <section id="send" style={{ background: C.bg, padding: "120px 32px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 50% 40% at 70% 50%, rgba(0,212,170,0.04), transparent)`,
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 80,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <Reveal>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: 3, fontFamily: F1, marginBottom: 16 }}>
                REMITTANCES
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: C.white,
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  fontFamily: F1,
                  letterSpacing: -1.5,
                }}
              >
                $164-328M in fees.<br />
                <span style={{ color: C.gray }}>Every year. From Haiti's poorest families.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: C.sub, lineHeight: 1.8, margin: "0 0 32px", fontFamily: F2 }}>
                Haiti received $4.1 billion in remittances in 2024. Traditional services charge 4-8% in fees. HTGC cuts that to
                under 2%. Try the calculator.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 32 }}>
                {[{ n: "<2%", l: "Transfer fee" }, { n: "~5 min", l: "Settlement" }, { n: "24/7", l: "Availability" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: C.teal, fontFamily: F1 }}>{s.n}</div>
                    <div style={{ fontSize: 13, color: C.gray, fontFamily: F2, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Calculator />
          </Reveal>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section id="how" style={{ background: `linear-gradient(180deg, ${C.bg}, ${C.navy})`, padding: "120px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.teal, letterSpacing: 3, fontFamily: F1, marginBottom: 12 }}>
                MINT & BURN
              </div>
              <h2 style={{ fontSize: 44, fontWeight: 800, color: C.white, fontFamily: F1, letterSpacing: -1.5, margin: 0 }}>
                How HTGC works
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: C.card,
                    borderRadius: 20,
                    padding: "32px 24px",
                    border: `1px solid ${C.border}`,
                    textAlign: "center",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
                >
                  <div style={{ fontSize: 32, marginBottom: 16, color: C.accent, opacity: 0.6 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.teal, fontFamily: F1, letterSpacing: 2, marginBottom: 8 }}>
                    STEP {s.n}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.white, margin: "0 0 10px", fontFamily: F1 }}>{s.t}</h3>
                  <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.65, margin: 0, fontFamily: F2 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RESERVES ══════ */}
      <section id="reserves" style={{ background: C.off, padding: "120px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: 3, fontFamily: F1, marginBottom: 12 }}>
                TRANSPARENCY
              </div>
              <h2
                style={{ fontSize: 44, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.5, margin: "0 0 16px" }}
              >
                Backed by Haiti's treasury. Always.
              </h2>
              <p style={{ fontSize: 17, color: C.sub, fontFamily: F2, maxWidth: 520, margin: "0 auto" }}>
                100% reserves in Haitian sovereign instruments. Audited quarterly. No corporate debt. No crypto collateral.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 40,
                boxShadow: "0 2px 40px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", height: 20, borderRadius: 10, overflow: "hidden", marginBottom: 32, gap: 2 }}>
                {reserveBars.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${b.pct}%`,
                      background: b.color,
                      borderRadius:
                        i === 0 ? "10px 0 0 10px" : i === reserveBars.length - 1 ? "0 10px 10px 0" : 0,
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {reserveBars.map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{ width: 10, height: 10, borderRadius: 3, background: b.color, marginTop: 4, flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 800, color: C.text, fontFamily: F1 }}>{b.pct}%</div>
                      <div style={{ fontSize: 13, color: C.sub, fontFamily: F2, lineHeight: 1.4 }}>{b.label}</div>
                      <div style={{ fontSize: 12, color: C.accent, fontWeight: 600, fontFamily: F1, marginTop: 2 }}>
                        Yield: {b.yield}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, fontFamily: F1 }}>
                    Blended Reserve Yield: ~16.2%
                  </div>
                  <div style={{ fontSize: 13, color: C.sub, fontFamily: F2 }}>
                    Self-sustaining. Low fees for users. Income from sovereignty.
                  </div>
                </div>
                <a
                  href="#"
                  style={{
                    background: C.text,
                    color: C.white,
                    padding: "10px 20px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: F1,
                    whiteSpace: "nowrap",
                  }}
                >
                  View Attestation →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════ NETWORKS ══════ */}
      <section id="networks" style={{ background: C.bg, padding: "120px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: C.white,
                fontFamily: F1,
                letterSpacing: -1.5,
                textAlign: "center",
                margin: "0 0 16px",
              }}
            >
              Two chains. One gourde.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              style={{
                fontSize: 17,
                color: C.gray,
                fontFamily: F2,
                textAlign: "center",
                maxWidth: 500,
                margin: "0 auto 56px",
              }}
            >
              Natively issued on Solana and Stellar. Same reserves. Different superpowers.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {networks.map((n, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  style={{
                    background: C.card,
                    borderRadius: 24,
                    padding: 36,
                    border: `1px solid ${C.border}`,
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${n.color}33`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: n.grad,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        fontWeight: 800,
                        color: C.white,
                        fontFamily: F1,
                      }}
                    >
                      {n.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: C.white, fontFamily: F1 }}>{n.name}</div>
                      <div style={{ fontSize: 12, color: C.gray, fontFamily: F2 }}>{n.sub}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14.5, color: C.sub, lineHeight: 1.7, margin: "0 0 20px", fontFamily: F2 }}>{n.desc}</p>
                  <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
                    {[{ l: "Finality", v: n.speed }, { l: "Cost/tx", v: n.cost }].map((m, j) => (
                      <div key={j}>
                        <div style={{ fontSize: 11, color: C.gray, fontFamily: F2, marginBottom: 2 }}>{m.l}</div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: n.color, fontFamily: F1 }}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                  {n.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: n.color, opacity: 0.6 }} />
                      <span style={{ fontSize: 13, color: C.gray, fontFamily: F2 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ IMPACT GRID ══════ */}
      <section
        style={{
          background: `linear-gradient(165deg, ${C.navy}, #0B2F5A)`,
          padding: "120px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: C.white,
                fontFamily: F1,
                letterSpacing: -1.5,
                textAlign: "center",
                margin: "0 0 56px",
              }}
            >
              Built for Haiti. Available everywhere.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {impactStats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 16,
                    padding: 28,
                    border: `1px solid rgba(255,255,255,0.06)`,
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, fontFamily: F1, color: C.accent }}>{s.s}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.white, margin: "6px 0 4px", fontFamily: F1 }}>{s.l}</div>
                  <div style={{ fontSize: 13, color: C.gray, fontFamily: F2 }}>{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ REGULATED ══════ */}
      <section style={{ background: C.off, padding: "120px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2
                style={{ fontSize: 44, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -1.5, margin: "0 0 16px" }}
              >
                Regulated everywhere it matters.
              </h2>
              <p style={{ fontSize: 17, color: C.sub, fontFamily: F2, maxWidth: 520, margin: "0 auto" }}>
                Compliance-first. Every jurisdiction. Every transaction. No shortcuts.
              </p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {regulations.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: 24,
                    border: "1px solid rgba(0,0,0,0.04)",
                    textAlign: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{r.flag}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: F1, marginBottom: 4 }}>{r.j}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: C.accent, fontFamily: F1, marginBottom: 4 }}>{r.r}</div>
                  <div style={{ fontSize: 12, color: C.sub, fontFamily: F2 }}>{r.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section id="cta" style={{ background: C.bg, padding: "120px 32px", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.08), transparent)`,
          }}
        />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: C.white,
                fontFamily: F1,
                letterSpacing: -2,
                margin: "0 0 20px",
                lineHeight: 1.1,
              }}
            >
              One of the world's oldest currencies.<br />On the newest rails.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, color: C.gray, fontFamily: F2, margin: "0 0 40px", lineHeight: 1.7 }}>
              The Haitian gourde has survived 212 years of history. Now it goes global.
              Be first to send, hold, and build with the digital gourde.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <a
                href="https://insfers.com"
                style={{
                  background: `linear-gradient(135deg, ${C.accent}, ${C.gold})`,
                  color: C.bg,
                  padding: "16px 36px",
                  borderRadius: 14,
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: F1,
                  boxShadow: "0 8px 40px rgba(201,162,39,0.3)",
                }}
              >
                Join Waitlist
              </a>
              <a
                href="#"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: C.white,
                  padding: "16px 32px",
                  borderRadius: 14,
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: F2,
                  border: `1px solid ${C.border}`,
                }}
              >
                Read the Whitepaper
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "56px 32px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.accent}, ${C.teal})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 800,
                    color: C.bg,
                    fontFamily: F1,
                  }}
                >
                  G
                </div>
                <span style={{ fontSize: 16, fontWeight: 800, color: C.white, fontFamily: F1 }}>HTGC</span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.7,
                  maxWidth: 300,
                  fontFamily: F2,
                  margin: 0,
                }}
              >
                Issued by Insfers. A regulated payment stablecoin pegged 1:1 to the Haitian gourde, backed by Haiti's
                treasury bills and bonds. Not legal tender.
              </p>
            </div>
            {[
              { t: "Product", l: ["How It Works", "Reserves", "Networks", "API & SDKs", "Whitepaper"] },
              { t: "Company", l: ["About Insfers", "Careers", "Blog", "Press", "Contact"] },
              { t: "Legal", l: ["Terms", "Privacy", "Compliance", "Risk Disclosures", "Licenses"] },
            ].map((col, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.gray,
                    marginBottom: 14,
                    fontFamily: F1,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {col.t}
                </div>
                {col.l.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block",
                      fontSize: 13.5,
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      marginBottom: 9,
                      fontFamily: F2,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.white)}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: `1px solid ${C.border}`,
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: F2 }}>
              &copy; 2026 Insfers. All rights reserved.
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: F2 }}>Solana &middot; Stellar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
