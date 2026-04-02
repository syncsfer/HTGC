import { C, F1 } from "../constants/colors";

export default function AnimatedCoin() {
  return (
    <div style={{ position: "relative", width: 320, height: 320 }}>
      <div
        style={{
          width: 240,
          height: 240,
          borderRadius: "50%",
          position: "absolute",
          top: 40,
          left: 40,
          background: `conic-gradient(from 0deg, ${C.accent}, ${C.gold}, ${C.accent}, ${C.teal}, ${C.accent})`,
          animation: "coinSpin 8s linear infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 80px rgba(209,34,41,0.3), 0 0 160px rgba(209,34,41,0.1)`,
        }}
      >
        <div
          style={{
            width: 210,
            height: 210,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, #E8E8F0, ${C.bg})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: 14, fontFamily: F1, fontWeight: 600, color: C.gray, letterSpacing: 4, marginBottom: 2 }}>HAITIAN</span>
          <span style={{ fontSize: 52, fontFamily: F1, fontWeight: 800, color: C.accent, letterSpacing: -2 }}>G</span>
          <span style={{ fontSize: 11, fontFamily: F1, fontWeight: 600, color: C.gray, letterSpacing: 3, marginTop: 2 }}>GOURDE COIN</span>
        </div>
      </div>

      {[280, 310].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: s,
            height: s,
            borderRadius: "50%",
            border: `1px solid rgba(209,34,41,${0.08 - i * 0.03})`,
            top: (320 - s) / 2,
            left: (320 - s) / 2,
            animation: `orbitPulse ${3 + i}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={`d${i}`}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: i % 2 === 0 ? C.accent : C.teal,
            opacity: 0.6,
            top: 160 + Math.sin((deg * Math.PI) / 180) * 150,
            left: 160 + Math.cos((deg * Math.PI) / 180) * 150,
            animation: `floatDot ${2 + i * 0.3}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
