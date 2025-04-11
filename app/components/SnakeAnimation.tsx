'use client';

import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
}

const SnakeAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match parent container
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Snake properties
        const snakeLength = 20;
        const points: Point[] = [];
        let target: Point = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        let angle = 0;
        let speed = 3;

        // Initialize snake points
        for (let i = 0; i < snakeLength; i++) {
            points.push({ x: canvas.width / 2, y: canvas.height / 2 });
        }

        // Animation function
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update target position occasionally
            if (Math.random() < 0.02) {
                target = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
            }

            // Calculate direction to target
            const dx = target.x - points[0].x;
            const dy = target.y - points[0].y;
            const targetAngle = Math.atan2(dy, dx);

            // Smooth rotation
            let angleDiff = targetAngle - angle;
            if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            angle += angleDiff * 0.1;

            // Move head
            const newHead = {
                x: points[0].x + Math.cos(angle) * speed,
                y: points[0].y + Math.sin(angle) * speed
            };

            // Wrap around screen
            if (newHead.x < 0) newHead.x = canvas.width;
            if (newHead.x > canvas.width) newHead.x = 0;
            if (newHead.y < 0) newHead.y = canvas.height;
            if (newHead.y > canvas.height) newHead.y = 0;

            points.unshift(newHead);
            points.pop();

            // Draw snake
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                const point = points[i];
                ctx.lineTo(point.x, point.y);
            }

            // Create gradient for snake
            const gradient = ctx.createLinearGradient(
                points[0].x, points[0].y,
                points[points.length - 1].x, points[points.length - 1].y
            );
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.8)');    // Indigo
            gradient.addColorStop(1, 'rgba(167, 139, 250, 0.3)');   // Purple

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default SnakeAnimation; 