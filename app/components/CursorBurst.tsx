"use client";
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursorRing = cursorRingRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursorRing || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    const dotSpeed = 0.3;
    const ringSpeed = 0.12;

    const animate = () => {
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;

      cursorDot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
      cursorRing.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const updateCursorState = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [onclick]'
      );

      const handleElementHover = () => setIsPointer(true);
      const handleElementLeave = () => setIsPointer(false);

      document.querySelectorAll('[data-cursor-listener]').forEach(el => {
        el.removeAttribute('data-cursor-listener');
      });

      interactiveElements.forEach((el) => {
        el.setAttribute('data-cursor-listener', 'true');
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
    };

    updateCursorState();
    const observer = new MutationObserver(updateCursorState);
    observer.observe(document.body, { childList: true, subtree: true });

    animate();

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile('ontouchstart' in window || window.navigator.maxTouchPoints > 0);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        html, body, * {
          cursor: none !important;
        }
      `}</style>

      {/* Leading DOT - white dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[99999] transition-all duration-150 ease-out ${
          isHidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${isPointer ? 'scale-150' : ''} ${isClicking ? 'scale-200' : ''}`}
        style={{
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          mixBlendMode: 'difference',
          willChange: 'transform, opacity',
          boxShadow: isPointer ? '0 0 12px rgba(59, 130, 246, 0.8)' : 'none',
        }}
      />

      {/* Following RING - blue shade */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99998] transition-all duration-200 ease-out ${
          isHidden ? 'opacity-0 scale-0' : 'opacity-70 scale-100'
        } ${isPointer ? 'scale-150 opacity-90' : ''} ${
          isClicking ? 'scale-75' : ''
        }`}
        style={{
          willChange: 'transform, opacity',
        }}
      >
        <div 
          className="w-full h-full rounded-full transition-all duration-200 ease-out"
          style={{
            border: `1.5px solid ${isPointer ? '#60a5fa' : '#3b82f6'}`, // Blue shades
            background: isPointer 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))' 
              : 'rgba(59, 130, 246, 0.08)',
            boxShadow: isPointer 
              ? '0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(96, 165, 250, 0.2)' 
              : '0 0 10px rgba(59, 130, 246, 0.15)',
          }}
        />
      </div>
    </>
  );
}
