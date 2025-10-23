"use client";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    delay?: number;
    reverse?: boolean;
}

export default function DestinationCard({
    title,
    subtitle,
    description,
    imageUrl,
    delay = 0,
    reverse = false,
}: DestinationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay, duration: 1, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen ${reverse ? 'lg:grid-flow-dense' : ''}`}
        >
            {/* Image */}
            <div className={`relative overflow-hidden ${reverse ? 'lg:col-start-2' : ''}`}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover min-h-[60vh] lg:min-h-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
            </div>

            {/* Content */}
            <div className={`bg-[#0a0a0a] flex items-center justify-center p-8 lg:p-16 xl:p-24 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="max-w-xl">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60px" }}
                        viewport={{ once: true }}
                        transition={{ delay: delay + 0.3, duration: 0.8 }}
                        className="h-px bg-[#d4af37] mb-8"
                    />

                    <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-4">
                        {subtitle.toUpperCase()}
                    </p>

                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                        {title}
                    </h2>

                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        {description}
                    </p>

                    <button className="group flex items-center gap-3 text-white text-sm tracking-[0.2em] hover:text-[#d4af37] transition-colors duration-300">
                        PELAJARI LEBIH
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
