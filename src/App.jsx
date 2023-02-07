import './App.css'
import React, { useRef, useState } from "react";

const DrawingTool = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setIsDrawing(true);
    setLastX(event.clientX);
    setLastY(event.clientY);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    setLastX(event.clientX);
    setLastY(event.clientY);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    />
  );
};

export default DrawingTool;
