import React, { useEffect, useRef, useState } from 'react';

export default function CyberRainCanvas({ currentView = 'games' }) {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // Track mouse coordinates globally
    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };
    let lastMouseX = -1000;
    let lastMouseY = -1000;

    const handleMouseMove = (e) => {
      mouse.vx = e.clientX - lastMouseX;
      mouse.vy = e.clientY - lastMouseY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create Rain Drops Pool (Shorter, crisp droplets with brighter base red glow)
    const dropCount = Math.min(Math.floor((width * height) / 10000), 160);
    const drops = [];

    for (let i = 0; i < dropCount; i++) {
      const z = Math.random() * 2 + 1; // Depth layer: 1 (far) to 3 (near)
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        z: z,
        speedY: (Math.random() * 7 + 13) * (z / 2),
        speedX: (Math.random() * 2 - 3) * (z / 2), // Slanted wind
        length: (Math.random() * 8 + 10) * z, // Shorter, crisper droplet length (~18px to 54px)
        thickness: Math.max(0.6, z * 0.55),
        alpha: (z / 3) * 0.40 + 0.20, // Bright, clearly visible red base opacity (28% to 60%)
      });
    }

    // Micro-splash particles pool when rain hits cursor or ground
    const splashes = [];
    const createSplash = (x, y, count = 3, color = '255, 60, 80') => {
      for (let i = 0; i < count; i++) {
        splashes.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 7 + mouse.vx * 0.25,
          vy: -(Math.random() * 5 + 1) + mouse.vy * 0.25,
          radius: Math.random() * 2.2 + 0.6,
          alpha: 0.9,
          color: color,
        });
      }
    };

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Increased magnetic pull radius around cursor
      const magnetRadius = 115;

      // Update & Draw Rain Drops
      for (let i = 0; i < drops.length; i++) {
        const p = drops[i];

        // Normal physics
        p.x += p.speedX;
        p.y += p.speedY;

        // Calculate distance from cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = magnetRadius * magnetRadius;

        let insideRadius = false;
        let glowRatio = 0;

        // If within magnetic pull radius around cursor, pull strongly and increase brightness!
        if (distSq < radiusSq && mouse.x !== -1000) {
          insideRadius = true;
          const dist = Math.sqrt(distSq);
          glowRatio = (magnetRadius - dist) / magnetRadius; // 0 at edge, 1 at exact cursor center
          
          const pullFactor = Math.pow(glowRatio, 1.2); // Powerful exponential suction

          // Draw the raindrop aggressively towards the cursor
          const targetAngle = Math.atan2(dy, dx);
          const pullForce = pullFactor * (p.speedY * 3.2 + 8);

          p.x += Math.cos(targetAngle) * pullForce;
          p.y += Math.sin(targetAngle) * pullForce * 0.9;

          // If drop gets super close (~20px to cursor), explode in glowing energy splash and respawn
          if (dist < 20) {
            createSplash(p.x, p.y, 5, '255, 30, 60'); // Bright neon red energy splash on cursor hit!
            p.y = -p.length - Math.random() * 100;
            p.x = Math.random() * width + 100;
          }
        }

        // Reset when drop hits bottom or goes off-screen
        if (p.y > height + p.length || p.x < -100 || p.x > width + 100) {
          // Occasional ground splash at bottom of screen
          if (p.y > height && Math.random() < 0.25 && p.z > 2) {
            createSplash(p.x, height - 2, 2, '238, 40, 60');
          }
          p.y = -p.length - Math.random() * 50;
          p.x = Math.random() * (width + 200) - 100;
        }

        // Draw Rain Streak with dynamic brightness boost
        ctx.beginPath();
        if (insideRadius) {
          // Increase brightness, thickness, and add neon crimson glow when inside pull radius!
          const boostedAlpha = Math.min(1.0, p.alpha + glowRatio * 0.80);
          const boostedThickness = p.thickness + glowRatio * 2.6;
          ctx.shadowColor = 'rgba(255, 20, 50, 0.95)';
          ctx.shadowBlur = 15 * glowRatio;
          ctx.strokeStyle = `rgba(255, ${Math.floor(40 + glowRatio * 180)}, ${Math.floor(60 + glowRatio * 180)}, ${boostedAlpha})`;
          ctx.lineWidth = boostedThickness;
        } else {
          // Standard vibrant red cyberpunk rain
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(238, 40, 60, ${p.alpha})`;
          ctx.lineWidth = p.thickness;
        }

        ctx.lineCap = 'round';
        ctx.moveTo(p.x, p.y);
        
        // Calculate streak tail (if pulled by cursor, curve tail inward toward cursor)
        let tailX = p.x - p.speedX * (p.length / p.speedY);
        let tailY = p.y - p.length;
        if (insideRadius && mouse.x !== -1000) {
          tailX -= (dx / Math.sqrt(distSq)) * glowRatio * 14;
        }

        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      // Update & Draw Splashes
      ctx.shadowBlur = 0; // Reset shadow blur for splashes
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.28; // Gravity on splash particles
        s.alpha -= 0.038;

        if (s.alpha <= 0) {
          splashes.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color}, ${Math.max(0, s.alpha)})`;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw subtle glowing energy aura circle around cursor when moving near rain
      if (mouse.x !== -1000) {
        ctx.beginPath();
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 2, mouse.x, mouse.y, magnetRadius);
        grad.addColorStop(0, 'rgba(255, 30, 60, 0.16)');
        grad.addColorStop(0.5, 'rgba(238, 40, 60, 0.05)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.arc(mouse.x, mouse.y, magnetRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // When on Home page ('games') and near the top (scrollY < 450), rain falls ON TOP of the content (z-[30]).
  // When scrolled down or on any other page, rain falls BEHIND the content (z-[1]).
  const isHomeTop = currentView === 'games' && scrollY < 450;
  const zClass = isHomeTop ? 'z-[30]' : 'z-[1]';

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none transition-all duration-500 ${zClass}`}
      style={{ opacity: 0.95 }}
    />
  );
}
