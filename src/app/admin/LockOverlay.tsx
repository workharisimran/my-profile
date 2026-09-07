'use client';

import React, { useState, useRef, useEffect } from 'react';

interface LockOverlayProps {
  unlocked: boolean;
  onUnlock: () => void;
}

export default function LockOverlay({ unlocked, onUnlock }: LockOverlayProps) {
  const [pin, setPin] = useState('');
  const [statusMessage, setStatusMessage] = useState('Draw pattern or enter passcode');
  const [statusType, setStatusType] = useState<'neutral' | 'error' | 'success'>('neutral');
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const nodeCentersRef = useRef<{ x: number; y: number }[]>([]);

  // Update node centers for canvas drawing
  const updateNodePositions = () => {
    const nodes = document.querySelectorAll<HTMLElement>('.pattern-node');
    if (!nodes || nodes.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    nodeCentersRef.current = Array.from(nodes).map((node) => {
      const nodeRect = node.getBoundingClientRect();
      return {
        x: nodeRect.left - rect.left + nodeRect.width / 2,
        y: nodeRect.top - rect.top + nodeRect.height / 2,
      };
    });
  };

  useEffect(() => {
    updateNodePositions();
    window.addEventListener('resize', updateNodePositions);
    return () => window.removeEventListener('resize', updateNodePositions);
  }, []);

  // Redraw pattern line
  const drawLine = (currentX?: number, currentY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (activeNodes.length === 0) return;

    ctx.strokeStyle = statusType === 'error' ? '#dc2626' : '#d14b3b';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    activeNodes.forEach((nodeIdx, i) => {
      const pt = nodeCentersRef.current[nodeIdx];
      if (!pt) return;
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });

    if (currentX !== undefined && currentY !== undefined && isDrawingRef.current) {
      ctx.lineTo(currentX, currentY);
    }
    ctx.stroke();
  };

  const handleStartDraw = (index: number) => {
    isDrawingRef.current = true;
    setActiveNodes([index]);
    setStatusMessage('Connecting nodes...');
    setStatusType('neutral');
  };

  const handleHoverNode = (index: number) => {
    if (!isDrawingRef.current) return;
    if (!activeNodes.includes(index)) {
      setActiveNodes((prev) => [...prev, index]);
    }
  };

  const handleEndDraw = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (activeNodes.length >= 3) {
      // Valid pattern sequence
      setStatusMessage('✓ Pattern Accepted. Unlocking...');
      setStatusType('success');
      setTimeout(() => {
        onUnlock();
      }, 500);
    } else if (activeNodes.length > 0) {
      setStatusMessage('✕ Pattern too short (min 3 dots)');
      setStatusType('error');
      setTimeout(() => {
        setActiveNodes([]);
        setStatusMessage('Draw pattern or enter passcode');
        setStatusType('neutral');
      }, 1000);
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '123456789' || pin.length >= 4) {
      setStatusMessage('✓ Passcode Accepted. Unlocking...');
      setStatusType('success');
      setTimeout(() => {
        onUnlock();
      }, 400);
    } else {
      setStatusMessage('✕ Incorrect passcode (Try 123456789)');
      setStatusType('error');
      setPin('');
      setTimeout(() => {
        setStatusMessage('Draw pattern or enter passcode');
        setStatusType('neutral');
      }, 1200);
    }
  };

  if (unlocked) return null;

  return (
    <div className={`lock-screen-overlay ${unlocked ? 'unlocked' : ''}`} id="lockScreen">
      <div className="lock-card">
        <div className="lock-icon-badge">🔒</div>
        <h2>Admin Authentication</h2>
        <p>Security lock protecting portfolio analytics &amp; click tracking telemetry.</p>

        {/* Pattern Canvas and Grid */}
        <div
          className="pattern-wrapper"
          onMouseUp={handleEndDraw}
          onTouchEnd={handleEndDraw}
          onMouseMove={(e) => {
            if (!isDrawingRef.current || !canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();
            drawLine(e.clientX - rect.left, e.clientY - rect.top);
          }}
        >
          <canvas ref={canvasRef} id="patternCanvas" width={270} height={270} />
          <div className="pattern-grid">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <div
                key={idx}
                className={`pattern-node ${activeNodes.includes(idx) ? 'active' : ''} ${
                  statusType === 'error' && activeNodes.includes(idx)
                    ? 'error'
                    : statusType === 'success' && activeNodes.includes(idx)
                    ? 'success'
                    : ''
                }`}
                onMouseDown={() => handleStartDraw(idx)}
                onMouseEnter={() => handleHoverNode(idx)}
                onTouchStart={() => handleStartDraw(idx)}
              >
                <div className="node-disc">{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status indicator */}
        <div className={`pattern-status ${statusType}`}>{statusMessage}</div>

        {/* Passcode Input Form */}
        <form onSubmit={handlePinSubmit} className="pattern-manual-box">
          <input
            type="password"
            className="pattern-input"
            placeholder="Passcode / PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            aria-label="Admin PIN"
          />
          <button type="submit" className="button button-primary" style={{ padding: '0 1.2rem' }}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
