import { useState, useRef, useCallback } from "react";
import { User, GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  className?: string;
}

const BeforeAfterSlider = ({ className = "" }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-col-resize overflow-hidden rounded-xl ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{ touchAction: "none" }}
    >
      {/* "After" side (full background) */}
      <div className="absolute inset-0 bg-[hsl(var(--muted))] flex items-center justify-center">
        <div className="text-center">
          <User size={28} className="mx-auto text-muted-foreground/30 mb-1" />
          <span className="mono-label">After</span>
        </div>
      </div>

      {/* "Before" side (clipped) */}
      <div
        className="absolute inset-0 bg-[hsl(var(--muted))] flex items-center justify-center"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          backgroundColor: "hsl(var(--accent))",
        }}
      >
        <div className="text-center">
          <User size={28} className="mx-auto text-muted-foreground/30 mb-1" />
          <span className="mono-label">Before</span>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full bg-foreground/40" />
        <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/90 text-background flex items-center justify-center shadow-lg">
          <GripVertical size={14} />
        </div>
      </div>

      {/* Spacer to maintain aspect ratio */}
      <div className="aspect-[4/3]" />
    </div>
  );
};

export default BeforeAfterSlider;
