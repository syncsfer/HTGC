import { useState } from "react";
import { C, F1, F2 } from "../constants/colors";

export default function Calculator() {
  const [amount, setAmount] = useState(200);
  const tradCost = amount * 0.065;
  const htgcCost = amount * 0.018;
  const saved = tradCost - htgcCost;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: 24,
        border: `1px solid ${C.border}`,
        padding: "36px 32px",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ fontSize: 13, fontFamily: F1, fontWeight: 600, color: C.teal, letterSpacing: 2, marginBottom: 16 }}>
        SAVINGS CALCULATOR
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ fontSize: 14, color: C.gray, fontFamily: F2, display: "block", marginBottom: 8 }}>
          You send (USD)
        </label>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 20,
              color: C.accent,
              fontWeight: 700,
              fontFamily: F1,
            }}
          >
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
            style={{
              width: "100%",
              padding: "14px 16px 14px 36px",
              fontSize: 20,
              fontWeight: 700,
              fontFamily: F1,
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(255,255,255,0.1)`,
              borderRadius: 12,
              color: C.white,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <div style={{ background: "rgba(255,80,80,0.08)", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#D12229", fontFamily: F1, fontWeight: 600, letterSpacing: 1, marginBottom: 4 }}>TRADITIONAL</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#D12229", fontFamily: F1 }}>${tradCost.toFixed(2)}</div>
          <div style={{ fontSize: 11, color: C.gray, fontFamily: F2 }}>in fees (6.5%)</div>
        </div>
        <div style={{ background: "rgba(0,32,159,0.08)", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: C.teal, fontFamily: F1, fontWeight: 600, letterSpacing: 1, marginBottom: 4 }}>WITH HTGC</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.teal, fontFamily: F1 }}>${htgcCost.toFixed(2)}</div>
          <div style={{ fontSize: 11, color: C.gray, fontFamily: F2 }}>in fees (1.8%)</div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, rgba(209,34,41,0.12), rgba(0,32,159,0.08))`,
          borderRadius: 14,
          padding: 20,
          textAlign: "center",
          border: `1px solid rgba(209,34,41,0.15)`,
        }}
      >
        <div style={{ fontSize: 12, color: C.accent, fontFamily: F1, fontWeight: 600, letterSpacing: 1.5, marginBottom: 4 }}>YOUR FAMILY KEEPS</div>
        <div style={{ fontSize: 32, fontWeight: 800, color: C.white, fontFamily: F1 }}>
          ${saved.toFixed(2)} <span style={{ fontSize: 16, color: C.accent }}>more</span>
        </div>
        <div style={{ fontSize: 13, color: C.gray, fontFamily: F2, marginTop: 4 }}>
          They receive {Math.round(amount * 131).toLocaleString()} HTG
        </div>
      </div>
    </div>
  );
}
