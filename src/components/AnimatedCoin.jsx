import { C } from "../constants/colors";
import tokenImg from "../assets/htgc-token.png";

export default function AnimatedCoin() {
  return (
    <div style={{ position: "relative", width: 380, height: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Outer soft glow */}
      <div style={{
        position: "absolute",
        width: 340, height: 340,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(0,32,159,0.1) 0%, rgba(209,34,41,0.06) 50%, transparent 75%)`,
        animation: "orbitPulse 4s ease-in-out infinite alternate",
      }} />

      {/* Spinning ring */}
      <div style={{
        position: "absolute",
        width: 300, height: 300,
        borderRadius: "50%",
        background: `conic-gradient(
          transparent 0deg,
          rgba(209,34,41,0.6) 60deg,
          transparent 120deg,
          rgba(0,32,159,0.6) 180deg,
          transparent 240deg,
          rgba(209,34,41,0.4) 300deg,
          transparent 360deg
        )`,
        animation: "coinSpin 8s linear infinite",
      }} />

      {/* Inner ring mask */}
      <div style={{
        position: "absolute",
        width: 272, height: 272,
        borderRadius: "50%",
        background: C.bg,
      }} />

      {/* Token image — floating */}
      <img
        src={tokenImg}
        alt="HTGC Token"
        style={{
          position: "relative",
          zIndex: 2,
          width: 260,
          height: 260,
          objectFit: "contain",
          animation: "tokenFloat 3.5s ease-in-out infinite",
          filter: "drop-shadow(0 20px 40px rgba(0,32,159,0.25)) drop-shadow(0 8px 16px rgba(209,34,41,0.15))",
        }}
      />

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 2 === 0 ? 8 : 5,
          height: i % 2 === 0 ? 8 : 5,
          borderRadius: "50%",
          background: i % 2 === 0 ? C.accent : C.teal,
          opacity: 0.65,
          top: 190 + Math.sin((deg * Math.PI) / 180) * 168,
          left: 190 + Math.cos((deg * Math.PI) / 180) * 168,
          animation: `floatDot ${1.8 + i * 0.35}s ease-in-out infinite alternate`,
        }} />
      ))}
    </div>
  );
}
