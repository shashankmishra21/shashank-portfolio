"use client";
import { useEffect } from 'react';

export default function CursorBurst() {
  useEffect(() => {
    const colors = [
      '#3b82f6', // blue
      '#8b5cf6', // violet  
      '#06b6d4', // cyan
      '#10b981', // emerald
      '#f59e0b', // amber
      '#ef4444', // red
      '#ec4899', // pink
    ];

    const createBurst = (x: number, y: number) => {
      const burst = document.createElement('div');
      burst.className = 'cursor-burst burst-animation';
      burst.style.left = `${x}px`;
      burst.style.top = `${y}px`;
      burst.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(burst);
      
      setTimeout(() => {
        if (document.body.contains(burst)) {
          document.body.removeChild(burst);
        }
      }, 600);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create burst on random chance to avoid too many effects
      if (Math.random() < 0.1) {
        createBurst(e.clientX, e.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      createBurst(touch.clientX, touch.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
