import { useState } from "react";
import { C, F1, F2 } from "../constants/colors";

export default function Calculator() {
  const [amount, setAmount] = useState(200);
  const tradCost = amount * 0.065;
  const htgcCost = amount * 0.018;
  const saved = tradCost - htgcCost;

  return (
    <div style={{ background: "#fff", borderRadius: 24, border: "1px solid rgba(0,0,0,0.08)", padding: "36px 32px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}>
      <div style={{ fontSize: 11, fontFamily: F1, fontWeight: 700, color: C.teal, letterSpacing: 2.5, marginBottom: 20, textTransform: "uppercase" }}>
        Savings Calculator
      </div>

      {/* Amount input */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontSize: 13, color: C.gray, fontFamily: F2, display: "block", marginBottom: 8 }}>You send (USD)</label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 20, color: C.accent, fontWeight: 700, fontFamily: F1 }}>$</span>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(Math.max(1, Number(e.target.value)))}
            style={{ width: "100%", padding: "14px 16px 14px 36px", fontSize: 22, fontWeight: 700, fontFamily: F1, background: "#F8F8FA", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 12, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
            onFocus={e => (e.target.style.borderColor = C.accent)}
            onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
          />
        </div>
      </div>

      {/* Fee comparison */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        <div style={{ background: "rgba(209,34,41,0.06)", borderRadius: 14, padding: "16px 14px", textAlign: "center", border: "1px solid rgba(209,34,41,0.12)" }}>
          <div style={{ fontSize: 10, color: C.accent, fontFamily: F1, fontWeight: 700, letterSpacing: 1.5, marginBottom: 6 }}>TRADITIONAL</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: C.accent, fontFamily: F1 }}>${tradCost.toFixed(2)}</div>
          <div style={{ fontSize: 11, color: C.gray, fontFamily: F2, marginTop: 2 }}>in fees (6.5%)</div>
        </div>
        <div style={{ background: "rgba(0,32,159,0.06)", borderRadius: 14, padding: "16px 14px", textAlign: "center", border: "1px solid rgba(0,32,159,0.12)" }}>
          <div style={{ fontSize: 10, color: C.teal, fontFamily: F1, fontWeight: 700, letterSpacing: 1.5, marginBottom: 6 }}>WITH HTGC</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: C.teal, fontFamily: F1 }}>${htgcCost.toFixed(2)}</div>
          <div style={{ fontSize: 11, color: C.gray, fontFamily: F2, marginTop: 2 }}>in fees (1.8%)</div>
        </div>
      </div>

      {/* Savings result */}
      <div style={{ background: "linear-gradient(135deg, rgba(209,34,41,0.08), rgba(0,32,159,0.06))", borderRadius: 16, padding: "22px 20px", textAlign: "center", border: "1px solid rgba(209,34,41,0.12)" }}>
        <div style={{ fontSize: 11, color: C.accent, fontFamily: F1, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>YOUR FAMILY KEEPS</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.text, fontFamily: F1, lineHeight: 1 }}>
          ${saved.toFixed(2)} <span style={{ fontSize: 18, color: C.accent, fontWeight: 700 }}>more</span>
        </div>
        <div style={{ fontSize: 13, color: C.gray, fontFamily: F2, marginTop: 8 }}>
          They receive <strong style={{ color: C.text }}>{Math.round(amount * 131).toLocaleString()} HTG</strong>
        </div>
      </div>
    </div>
  );
}
