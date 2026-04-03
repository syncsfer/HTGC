import { useState, useEffect } from "react";
import { C, F1, F2 } from "../constants/colors";
import tokenImg from "../assets/htgc-token.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "0 40px",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.35s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={tokenImg} alt="HTGC Token" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -0.5 }}>HTGC</span>
          <span style={{ fontSize: 10, color: C.gray, fontWeight: 500, fontFamily: F2, paddingLeft: 2, opacity: 0.7 }}>by Insfers</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Send", "Reserves", "Networks", "Developers"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: "rgba(0,0,0,0.45)", textDecoration: "none", fontSize: 13.5, fontWeight: 500, fontFamily: F2, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = "rgba(0,0,0,0.45)")}
            >
              {item}
            </a>
          ))}
          <a
            href="#cta"
            style={{
              background: C.accent,
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: F1,
              boxShadow: "0 4px 14px rgba(209,34,41,0.25)",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(209,34,41,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(209,34,41,0.25)"; e.currentTarget.style.transform = "none"; }}
          >
            Get HTGC
          </a>
        </div>
      </div>
    </nav>
  );
}
