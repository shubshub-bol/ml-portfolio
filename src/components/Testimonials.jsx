import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    // Configuration
    const layers = [5, 7, 7, 4]; // Node counts
    const width = 800; // SVG viewBox width
    const height = 500; // SVG viewBox height
    const layerGap = width / (layers.length + 1);

    // State for active pulses
    const [pulses, setPulses] = useState([]);

    // Generate static nodes calculation
    const getNodes = useCallback(() => {
        const nodes = [];
        layers.forEach((count, layerIndex) => {
            const x = layerGap * (layerIndex + 1);
            const yGap = height / (count + 1);
            for (let i = 0; i < count; i++) {
                nodes.push({
                    id: `${layerIndex}-${i}`,
                    layer: layerIndex,
                    index: i,
                    x,
                    y: yGap * (i + 1)
                });
            }
        });
        return nodes;
    }, [layerGap]);

    const nodeList = getNodes();

    // Trigger a pulse cascade from a specific node
    const triggerCascade = (startNodeId) => {
        const startNode = nodeList.find(n => n.id === startNodeId);
        if (!startNode || startNode.layer >= layers.length - 1) return;

        // Find connected nodes in next layer (fully connected)
        const nextLayerNodes = nodeList.filter(n => n.layer === startNode.layer + 1);

        // Randomly select a subset to fire to (Sparse activation for cleaner look)
        const targets = nextLayerNodes.filter(() => Math.random() > 0.3);

        const newPulses = targets.map(target => ({
            id: Math.random().toString(36),
            start: { x: startNode.x, y: startNode.y },
            end: { x: target.x, y: target.y },
            targetNodeId: target.id,
            layer: startNode.layer
        }));

        setPulses(prev => [...prev, ...newPulses]);
    };

    // Auto-fire random inputs occasionally
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) return; // 30% chance per interval
            const inputs = nodeList.filter(n => n.layer === 0);
            const randomInput = inputs[Math.floor(Math.random() * inputs.length)];
            triggerCascade(randomInput.id);
        }, 1000);
        return () => clearInterval(interval);
    }, [nodeList]);

    return (
        <section className="py-20 px-4 border-t border-white/5 bg-black relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan/5 via-black to-black pointer-events-none"></div>

            {/* Header */}
            <div className="text-center mb-12 relative z-10">
                <span className="font-mono text-cyan text-xs tracking-[0.2em] border border-cyan/30 px-3 py-1 rounded-full mb-4 inline-block">
                    // SYSTEM_ARCHITECTURE_V2.0
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2">NEURAL ENGINE</h2>
                <p className="text-grey text-sm font-mono">Vector-Optimized • Interactive • Real-time</p>
            </div>

            {/* Visualizer Container */}
            <div className="relative w-full max-w-5xl aspect-[16/9] border border-white/10 rounded-3xl bg-[#050505] shadow-2xl shadow-cyan/5 overflow-hidden">

                {/* SVG Layer */}
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">

                    {/* Connections (Static Lines) */}
                    {nodeList.map(node => {
                        const nextLayerNodes = nodeList.filter(n => n.layer === node.layer + 1);
                        return nextLayerNodes.map(target => (
                            <line
                                key={`conn-${node.id}-${target.id}`}
                                x1={node.x} y1={node.y}
                                x2={target.x} y2={target.y}
                                stroke="rgba(0, 240, 255, 0.05)"
                                strokeWidth="1"
                            />
                        ));
                    })}

                    {/* Active Pulses (Traveling Data) */}
                    <AnimatePresence>
                        {pulses.map(pulse => (
                            <Packet
                                key={pulse.id}
                                pulse={pulse}
                                onComplete={() => {
                                    setPulses(prev => prev.filter(p => p.id !== pulse.id));
                                    triggerCascade(pulse.targetNodeId); // Chain reaction
                                }}
                            />
                        ))}
                    </AnimatePresence>

                    {/* Nodes */}
                    {nodeList.map(node => (
                        <Node
                            key={node.id}
                            node={node}
                            isInput={node.layer === 0}
                            onHover={() => node.layer === 0 && triggerCascade(node.id)}
                            isActive={pulses.some(p => p.targetNodeId === node.id || (p.layer === node.layer && Math.abs(p.start.x - node.x) < 1))}
                        />
                    ))}

                </svg>

                {/* Labels */}
                <div className="absolute bottom-4 left-6 text-xs font-mono text-cyan/40">INPUT_VECTOR</div>
                <div className="absolute bottom-4 right-6 text-xs font-mono text-cyan/40">PREDICTIVE_OUTPUT</div>
            </div>
        </section>
    );
};

// Sub-components for cleaner render cycle
const Node = ({ node, isInput, onHover, isActive }) => {
    return (
        <motion.circle
            cx={node.x}
            cy={node.y}
            r={isInput ? 8 : 5}
            fill="#000"
            stroke={isActive ? "#00f0ff" : "rgba(255,255,255,0.2)"}
            strokeWidth={isActive ? 2 : 1}
            onMouseEnter={onHover}
            className={`cursor-pointer transition-colors duration-200 ${isInput ? 'hover:stroke-cyan' : ''}`}
            animate={{
                scale: isActive ? 1.5 : 1,
                fill: isActive ? "rgba(0, 240, 255, 0.5)" : "#000",
                stroke: isActive ? "#ffffff" : isInput ? "rgba(0, 240, 255, 0.5)" : "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.3 }}
        />
    );
};

const Packet = ({ pulse, onComplete }) => {
    return (
        <motion.circle
            r={3}
            fill="#fff"
            initial={{ cx: pulse.start.x, cy: pulse.start.y, opacity: 0 }}
            animate={{
                cx: pulse.end.x,
                cy: pulse.end.y,
                opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 0.8, ease: "linear" }}
            onAnimationComplete={onComplete}
        />
    );
};

export default Testimonials;
