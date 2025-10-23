"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface HeroProps {
    imageUrl: string;
}

export default function Hero({ imageUrl }: HeroProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 will-change-transform"
            >
                <div
                    className="w-full h-[120vh] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                    <div className="mb-8">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-px bg-[#d4af37] mx-auto mb-8"
                        />
                        <p className="text-white/80 text-sm tracking-[0.3em] mb-4">
                            PULAU DEWATA
                        </p>
                    </div>

                    <h1 className="text-white text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
                        BALI
                    </h1>

                    <p className="text-white/70 text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-12">
                        Temukan Keindahan yang Tak Terlupakan
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const element = document.querySelector('#destinations');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-12 py-4 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white" />
                        <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 text-black text-xs tracking-[0.3em] group-hover:text-black transition-colors">
                            JELAJAHI
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
