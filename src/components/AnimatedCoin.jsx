import { C, F1, F2 } from "../constants/colors";

export default function AnimatedCoin() {
  return (
    <div style={{ position: "relative", width: 340, height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Outer glow rings */}
      {[300, 330].map((s, i) => (
        <div key={i} style={{
          position: "absolute",
          width: s, height: s,
          borderRadius: "50%",
          border: `1px solid rgba(209,34,41,${0.12 - i * 0.04})`,
          animation: `orbitPulse ${3 + i}s ease-in-out infinite alternate`,
        }} />
      ))}

      {/* Spinning accent ring */}
      <div style={{
        position: "absolute",
        width: 264, height: 264,
        borderRadius: "50%",
        background: `conic-gradient(
          ${C.accent} 0deg,
          ${C.teal} 90deg,
          ${C.accent} 180deg,
          ${C.teal} 270deg,
          ${C.accent} 360deg
        )`,
        animation: "coinSpin 10s linear infinite",
        boxShadow: `0 0 60px rgba(209,34,41,0.25), 0 0 120px rgba(0,32,159,0.1)`,
      }} />

      {/* Token body */}
      <div style={{
        position: "absolute",
        width: 248, height: 248,
        borderRadius: "50%",
        background: `linear-gradient(145deg, #1a1a2e 0%, #0d0d1a 60%, #1a0a0f 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        boxShadow: "inset 0 2px 8px rgba(255,255,255,0.06), inset 0 -2px 8px rgba(0,0,0,0.4)",
      }}>

        {/* Inner sheen ring */}
        <div style={{
          position: "absolute",
          inset: 8,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />

        {/* Network badge */}
        <div style={{
          position: "absolute",
          top: 42,
          display: "flex",
          gap: 6,
          alignItems: "center",
        }}>
          <span style={{ fontSize: 9, fontFamily: F1, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 2.5 }}>
            SOL · XLM
          </span>
        </div>

        {/* Gourde symbol SVG */}
        <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: 8 }}>
          {/* Outer ring of symbol */}
          <circle cx="40" cy="40" r="36" stroke={C.accent} strokeWidth="3" fill="none" opacity="0.2" />
          {/* G letterform */}
          <path
            d="M58 26C53 17 47 12 40 12C26.7 12 16 22.7 16 36C16 49.3 26.7 60 40 60C49.6 60 57.8 54.4 61.6 46.4H44V38H66V36C66 32 64.4 28.2 62 26Z"
            fill={C.accent}
          />
          {/* Two horizontal bars through the stem */}
          <rect x="33" y="26" width="18" height="4.5" rx="2.25" fill="#0d0d1a" />
          <rect x="33" y="36" width="18" height="4.5" rx="2.25" fill="#0d0d1a" />
        </svg>

        {/* Ticker */}
        <div style={{
          fontSize: 22,
          fontFamily: F1,
          fontWeight: 800,
          color: "#FFFFFF",
          letterSpacing: 2,
          marginTop: 6,
          lineHeight: 1,
        }}>HTGC</div>

        {/* Full name */}
        <div style={{
          fontSize: 9,
          fontFamily: F2,
          fontWeight: 500,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: 2,
          marginTop: 5,
        }}>HAITIAN GOURDE COIN</div>

        {/* Peg badge */}
        <div style={{
          position: "absolute",
          bottom: 42,
          background: "rgba(209,34,41,0.15)",
          border: "1px solid rgba(209,34,41,0.3)",
          borderRadius: 20,
          padding: "3px 10px",
          fontSize: 9,
          fontFamily: F1,
          fontWeight: 700,
          color: C.accent,
          letterSpacing: 1.5,
        }}>1 HTGC = 1 HTG</div>

      </div>

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div key={`d${i}`} style={{
          position: "absolute",
          width: i % 2 === 0 ? 7 : 5,
          height: i % 2 === 0 ? 7 : 5,
          borderRadius: "50%",
          background: i % 2 === 0 ? C.accent : C.teal,
          opacity: 0.7,
          top: 170 + Math.sin((deg * Math.PI) / 180) * 155,
          left: 170 + Math.cos((deg * Math.PI) / 180) * 155,
          animation: `floatDot ${1.8 + i * 0.4}s ease-in-out infinite alternate`,
        }} />
      ))}
    </div>
  );
}
