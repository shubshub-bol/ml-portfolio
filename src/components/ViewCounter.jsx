import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const ViewCounter = () => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        // Using countapi.js.org / counterapi.dev to track views
        // Namespace: shubham-portfolio-v2
        // Key: visits
        fetch('https://api.counterapi.dev/v1/shubham-portfolio-v2/visits/up')
            .then(res => res.json())
            .then(data => setViews(data.count))
            .catch(err => {
                console.error("Error fetching views:", err);
                setViews(1);
            });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed top-6 left-8 z-40 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md hover:bg-white/5 transition-colors cursor-default"
        >
            <Eye size={16} className="text-cyan-400" />
            <span className="text-xs font-medium text-white/70 tracking-wider font-mono">
                {views.toLocaleString()} VIEWS
            </span>
        </motion.div>
    );
};

export default ViewCounter;
