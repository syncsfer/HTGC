import { useState, useEffect } from "react";
import { C, F1, F2 } from "../constants/colors";
import tokenImg from "../assets/htgc-token.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Networks", "Developers"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 24px",
        background: scrolled || menuOpen ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.35s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src={tokenImg} alt="HTGC" style={{ width: 32, height: 32, objectFit: "contain" }} />
            <span style={{ fontSize: 17, fontWeight: 800, color: C.text, fontFamily: F1, letterSpacing: -0.5 }}>HTGC</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="nav-desktop">
            {links.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ color: "rgba(0,0,0,0.45)", textDecoration: "none", fontSize: 13.5, fontWeight: 500, fontFamily: F2, transition: "color 0.2s" }}
                onMouseEnter={e => (e.target.style.color = C.text)}
                onMouseLeave={e => (e.target.style.color = "rgba(0,0,0,0.45)")}>
                {item}
              </a>
            ))}
            <a href="#cta" style={{ background: C.accent, color: "#fff", padding: "9px 20px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, textDecoration: "none", fontFamily: F1, boxShadow: "0 4px 14px rgba(209,34,41,0.25)" }}>
              Get HTGC
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="nav-hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", width: 22, height: 2, background: C.text, borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: C.text, borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: C.text, borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "16px 0 20px" }} className="nav-mobile-menu">
            {links.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 4px", color: C.sub, textDecoration: "none", fontSize: 16, fontWeight: 500, fontFamily: F2, borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                {item}
              </a>
            ))}
            <a href="#cta" onClick={() => setMenuOpen(false)}
              style={{ display: "block", marginTop: 14, background: C.accent, color: "#fff", padding: "13px 0", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: F1, textAlign: "center" }}>
              Get HTGC
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
