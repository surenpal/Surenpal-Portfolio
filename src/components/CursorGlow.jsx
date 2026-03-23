import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none fixed z-50
        w-40 h-40 rounded-full
        bg-purple-500/20 dark:bg-purple-400/20
        blur-3xl
        transition-transform duration-100
      "
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
      }}
    />
  );
}