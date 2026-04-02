import { useState, useEffect } from "react";
import { C, F1, F2 } from "../constants/colors";

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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 32px",
        background: scrolled ? "rgba(4,8,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.accent}, ${C.teal})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 800,
              color: C.bg,
              fontFamily: F1,
            }}
          >
            G
          </div>
          <span style={{ fontSize: 19, fontWeight: 800, color: C.white, fontFamily: F1, letterSpacing: -0.5 }}>HTGC</span>
          <span style={{ fontSize: 11, color: C.gray, fontWeight: 500, fontFamily: F2, opacity: 0.7 }}>by Insfers</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Send", "Reserves", "Networks", "Developers"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13.5, fontWeight: 500, fontFamily: F2, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = C.white)}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
            >
              {item}
            </a>
          ))}
          <a
            href="#cta"
            style={{
              background: C.accent,
              color: C.bg,
              padding: "9px 22px",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: F1,
            }}
          >
            Get HTGC
          </a>
        </div>
      </div>
    </nav>
  );
}
