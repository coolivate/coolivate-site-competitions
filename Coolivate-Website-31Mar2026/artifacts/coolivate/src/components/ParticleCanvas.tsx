import React, { useEffect, useRef } from 'react';

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // 1. Slightly fewer particles (divisor 25) makes larger particles look more premium
      const particleCount = Math.floor(window.innerWidth / 25); 

      for (let i = 0; i < particleCount; i++) {
        const isCyan = Math.random() > 0.4;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * -1.2 - 0.3, // Slightly slower climb for bigger particles
          // 2. BIGGER: Increased from (2-7px) to (4-12px)
          radius: Math.random() * 8 + 4, 
          color: isCyan ? '29, 189, 215' : '13, 6, 48' 
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // 1. Movement
        p.x += p.vx;
        p.y += p.vy;

        // 2. Evaporation Calculation
        // 'life' is 1 at the bottom and 0 at the top
        const life = Math.max(0, p.y / canvas.height);

        // Shrink the radius as it goes up
        const currentRadius = p.radius * life;
        // Fade the opacity as it goes up
        const currentOpacity = (p.color === '29, 189, 215' ? 0.3 : 0.15) * life;

        // 3. Reset logic (Re-spawn at the bottom)
        if (p.y < -10 || life <= 0.05) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        // Side-to-side wrapping
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // 4. Drawing with Softness
        ctx.beginPath();
        ctx.shadowBlur = 30 * life; // Glow fades as it evaporates
        ctx.shadowColor = `rgba(${p.color}, ${currentOpacity})`;

        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentOpacity})`;
        ctx.fill();

        ctx.shadowBlur = 0; 
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
}
