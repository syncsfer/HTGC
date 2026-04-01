import { useVis } from "../hooks/useVis";

export default function Reveal({ children, delay = 0, y = 40, style = {} }) {
  const [r, v] = useVis();
  return (
    <div
      ref={r}
      style={{
        ...style,
        opacity: v ? 1 : 0,
        transform: v ? "none" : `translateY(${y}px)`,
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
