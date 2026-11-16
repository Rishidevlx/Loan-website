import React, { useEffect, useRef } from 'react';
export default function ClickSparkEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let bursts = []; // Active click bursts

    // Sync canvas resolution with viewport & device pixel ratio
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Burst Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const now = performance.now();
      bursts = bursts.filter((burst) => {
        const elapsed = now - burst.startTime;
        const progress = Math.min(elapsed / burst.duration, 1);

        // Smooth cubic ease-out curve
        const ease = 1 - Math.pow(1 - progress, 3);

        const currentDist = burst.startDist + (burst.maxDist - burst.startDist) * ease;
        const currentLength = burst.lineLength * (1 - progress * 0.4);
        const alpha = Math.max(0, 1 - progress);

        ctx.save();
        ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`; // Brand Blue (#2563EB)
        ctx.lineWidth = 2 * (1 - progress * 0.3);
        ctx.lineCap = 'round';

        // Draw each radiating line at specified angle
        for (let i = 0; i < burst.count; i++) {
          const angle = (i * 2 * Math.PI) / burst.count;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);

          const x1 = burst.x + cos * currentDist;
          const y1 = burst.y + sin * currentDist;
          const x2 = burst.x + cos * (currentDist + currentLength);
          const y2 = burst.y + sin * (currentDist + currentLength);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        ctx.restore();

        return progress < 1; // Keep if still animating
      });

      if (bursts.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null; // Sleep when idle
      }
    };

    // Global click trigger
    const handlePointerDown = (e) => {
      // Create new burst object
      bursts.push({
        x: e.clientX,
        y: e.clientY,
        count: 8, // 8 radiating lines
        startDist: 4, // Starts 4px from click point
        maxDist: 22, // Expands outward to 22px
        lineLength: 10, // Length of each line
        duration: 380, // Total burst duration in ms
        startTime: performance.now(),
      });

      // Wake up animation loop if not currently running
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointerdown', handlePointerDown);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999]"
      style={{
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
}
