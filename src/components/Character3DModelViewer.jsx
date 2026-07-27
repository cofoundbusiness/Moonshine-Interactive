import React, { useEffect, useRef, useState } from 'react';
import { cyberAudio } from '../utils/audioEngine';

export default function Character3DModelViewer({ imageSrc, characterName, clearance }) {
  const canvasRef = useRef(null);
  const [renderMode, setRenderMode] = useState('voxels'); // 'voxels', 'particles', 'wireframe', 'raw'
  const [autoRotate, setAutoRotate] = useState(true);
  const [vertexCount, setVertexCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, rotX: 0.15, rotY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let vertices = [];

    // Extract 3D Model Vertices from 2D Image by sampling luminance and edge extrusion
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      const sampleSize = renderMode === 'wireframe' ? 65 : 85; // Grid resolution
      offCanvas.width = sampleSize;
      offCanvas.height = sampleSize;
      const offCtx = offCanvas.getContext('2d');
      offCtx.drawImage(img, 0, 0, sampleSize, sampleSize);

      const imgData = offCtx.getImageData(0, 0, sampleSize, sampleSize).data;
      const extracted = [];

      for (let y = 0; y < sampleSize; y += 1) {
        for (let x = 0; x < sampleSize; x += 1) {
          const idx = (y * sampleSize + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];

          if (a < 20) continue;

          // Calculate normalized luminance for Z depth
          const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

          // Skip near-pitch-black background pixels so only character/foreground is extruded into 3D
          if (lum < 0.09 && renderMode !== 'raw') continue;

          // Center coordinates and calculate 3D extrusion depth
          const vx = (x - sampleSize / 2) * 2.8;
          const vy = (y - sampleSize / 2) * 2.8;
          
          // Extrude Z depth based on luminance curve and center prominence
          const distFromCenter = Math.sqrt((x - sampleSize / 2) ** 2 + (y - sampleSize / 2) ** 2);
          const centerBoost = Math.max(0, 1 - distFromCenter / (sampleSize * 0.7)) * 18;
          const vz = Math.pow(lum, 1.3) * 60 - 25 + centerBoost;

          extracted.push({
            x: vx,
            y: vy,
            z: vz,
            r,
            g,
            b,
            lum,
            size: Math.max(1.5, lum * 3.8 + 1)
          });

          // For thick character volume, add a secondary shadow back-shell layer for dense voxels
          if (lum > 0.35 && renderMode === 'voxels') {
            extracted.push({
              x: vx,
              y: vy,
              z: vz - 12 - lum * 10,
              r: Math.floor(r * 0.4),
              g: Math.floor(g * 0.4),
              b: Math.floor(b * 0.4),
              lum: lum * 0.4,
              size: Math.max(1.5, lum * 3.2)
            });
          }
        }
      }

      vertices = extracted;
      setVertexCount(vertices.length);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background grid / radar lines
      const centerX = width / 2;
      const centerY = height / 2;

      // Update rotation
      if (autoRotate && !isDragging) {
        dragRef.current.rotY += 0.012;
        dragRef.current.rotX = 0.18 + Math.sin(dragRef.current.rotY * 0.5) * 0.08;
      }

      const rotX = dragRef.current.rotX;
      const rotY = dragRef.current.rotY;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Draw 3D Base Pedestal Grid
      ctx.strokeStyle = 'rgba(238, 40, 60, 0.15)';
      ctx.lineWidth = 1;
      for (let r = -80; r <= 80; r += 20) {
        ctx.beginPath();
        for (let c = -80; c <= 80; c += 20) {
          const px = c * cosY + r * sinY;
          const pz1 = -c * sinY + r * cosY;
          const py = 110 * cosX - pz1 * sinX;
          const pz = 110 * sinX + pz1 * cosX;
          const scale = 380 / (380 + pz + 200);
          const sx = centerX + px * scale;
          const sy = centerY + py * scale;
          if (c === -80) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      if (vertices.length === 0) {
        // Loading / Extracting state
        ctx.fillStyle = 'rgba(238, 40, 60, 0.8)';
        ctx.font = '12px monospace';
        ctx.fillText('// EXTRUDING 3D MESH FROM 2D CAPTURE DATA...', 20, 40);
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Project all 3D vertices
      const projected = [];
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];

        // Rotate Y
        const rx = v.x * cosY + v.z * sinY;
        const rz1 = -v.x * sinY + v.z * cosY;

        // Rotate X
        const ry = v.y * cosX - rz1 * sinX;
        const rz = v.y * sinX + rz1 * cosX;

        // Perspective Projection
        const fov = 420;
        const scale = fov / (fov + rz + 240);
        const sx = centerX + rx * scale;
        const sy = centerY + ry * scale;

        projected.push({
          sx,
          sy,
          sz: rz,
          scale,
          r: v.r,
          g: v.g,
          b: v.b,
          lum: v.lum,
          size: v.size * scale,
          origX: v.x,
          origY: v.y
        });
      }

      // Depth Sort (Painter's Algorithm: Back to Front)
      projected.sort((a, b) => b.sz - a.sz);

      // Render based on selected 3D Mode
      if (renderMode === 'voxels') {
        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          const cubeSize = Math.max(1.2, p.size * 1.1);

          // Color shading based on depth and luminance
          const depthGlow = Math.min(1, Math.max(0.2, (150 - p.sz) / 250));
          ctx.fillStyle = `rgba(${Math.floor(p.r * depthGlow)}, ${Math.floor(p.g * depthGlow)}, ${Math.floor(p.b * depthGlow)}, ${Math.min(1, p.lum + 0.3)})`;
          
          ctx.fillRect(p.sx - cubeSize / 2, p.sy - cubeSize / 2, cubeSize, cubeSize);

          // Add subtle neon crimson rim highlight on frontmost voxels
          if (p.sz < -20 && p.lum > 0.5) {
            ctx.strokeStyle = 'rgba(255, 60, 80, 0.45)';
            ctx.lineWidth = 0.8;
            ctx.strokeRect(p.sx - cubeSize / 2, p.sy - cubeSize / 2, cubeSize, cubeSize);
          }
        }
      } else if (renderMode === 'particles') {
        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, Math.max(0.8, p.size * 0.7), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${Math.min(1, p.lum * 1.2 + 0.2)})`;
          ctx.fill();
        }
      } else if (renderMode === 'wireframe') {
        ctx.lineWidth = 0.8;
        for (let i = 0; i < projected.length; i += 2) {
          const p = projected[i];
          // Connect nearby horizontal/vertical neighbor vertices
          if (i + 1 < projected.length && Math.abs(projected[i + 1].sz - p.sz) < 25) {
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(projected[i + 1].sx, projected[i + 1].sy);
            const alpha = Math.min(0.8, (140 - p.sz) / 220);
            ctx.strokeStyle = `rgba(238, 40, 60, ${alpha})`;
            ctx.stroke();
          }
          // Draw vertex node
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fillRect(p.sx - 1, p.sy - 1, 2, 2);
        }
      }

      // Laser Scanner Sweep Line
      const scanY = centerY + Math.sin(Date.now() * 0.003) * (height * 0.38);
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.strokeStyle = 'rgba(238, 40, 60, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(238, 40, 60, 0.9)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc, renderMode, autoRotate]);

  // Mouse Orbital Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    dragRef.current.rotY += dx * 0.009;
    dragRef.current.rotX = Math.max(-0.6, Math.min(0.6, dragRef.current.rotX + dy * 0.009));
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-black/90 border border-white/20 cyber-card relative overflow-hidden group">
      {/* Top Telemetry HUD Bar */}
      <div className="flex items-center justify-between p-3.5 bg-surface/90 border-b border-white/10 text-xs font-label-sm">
        <div className="flex items-center gap-2.5 text-signal font-bold uppercase tracking-widest">
          <span className="w-2 h-2 bg-signal animate-ping inline-block rounded-full"></span>
          <span>3D HOLOGRAPHIC EXTRUSION // {characterName}</span>
        </div>
        <div className="text-steel hidden sm:block">
          VERTICES: <span className="text-pure font-bold">{vertexCount.toLocaleString()}</span> // ORBIT: {autoRotate ? 'AUTO' : 'MANUAL'}
        </div>
      </div>

      {/* Interactive 3D Canvas Viewport */}
      <div 
        className="relative flex-grow min-h-[320px] sm:min-h-[420px] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Orbit Helper Instruction */}
        <div className="absolute bottom-4 left-4 pointer-events-none px-3 py-1.5 bg-black/80 border border-white/15 font-label-sm text-[11px] text-steel uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-signal">360</span>
          <span>Click & Drag to Orbit 3D Model</span>
        </div>

        {/* Clearance Tag */}
        <div className="absolute top-4 right-4 pointer-events-none px-3 py-1 bg-signal/20 border border-signal font-label-sm text-xs text-signal uppercase font-bold tracking-widest">
          {clearance}
        </div>
      </div>

      {/* Bottom 3D Mode & Rotation Toolbar */}
      <div className="p-3 bg-surface border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          {[
            { id: 'voxels', label: '3D Voxels' },
            { id: 'particles', label: 'Point Cloud' },
            { id: 'wireframe', label: 'Wireframe' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => { cyberAudio.playClick(); setRenderMode(mode.id); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-3 py-1.5 font-label-sm text-xs uppercase tracking-wider border transition-all ${
                renderMode === mode.id
                  ? 'bg-signal text-white border-signal font-bold shadow-md'
                  : 'bg-black/60 text-steel border-white/15 hover:border-white/40 hover:text-pure'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => { cyberAudio.playClick(); setAutoRotate(!autoRotate); }}
          onMouseEnter={() => cyberAudio.playHover()}
          className={`px-3 py-1.5 font-label-sm text-xs uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
            autoRotate
              ? 'bg-signal/20 text-signal border-signal font-bold'
              : 'bg-black text-steel border-white/20 hover:text-pure'
          }`}
        >
          <span className="material-symbols-outlined text-sm">{autoRotate ? 'sync' : 'sync_disabled'}</span>
          <span>Auto-Orbit: {autoRotate ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </div>
  );
}
