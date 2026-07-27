import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width: w, height: h };
    };

    let { width, height } = updateSize();

    const handleResize = () => {
      if (!canvas) return;
      const size = updateSize();
      width = size.width;
      height = size.height;
    };
    window.addEventListener('resize', handleResize);

    const drops = [];
    const numDrops = Math.floor(width / 15);
    for (let i = 0; i < numDrops; i++) {
      drops.push({
        x: i * 15 + Math.random() * 10,
        y: Math.random() * -height,
        speed: 3 + Math.random() * 5,
        length: 10 + Math.random() * 20,
        opacity: 0.1 + Math.random() * 0.3
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#E11D2E';
      ctx.lineWidth = 1;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.globalAlpha = d.opacity;
        ctx.stroke();

        d.y += d.speed;
        if (d.y > height) {
          d.y = -d.length;
          d.x = Math.random() * width;
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-1" 
    />
  );
}
