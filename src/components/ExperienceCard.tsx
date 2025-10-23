"use client";
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    icon: LucideIcon;
    delay?: number;
}

export default function ExperienceCard({
    title,
    description,
    imageUrl,
    icon: Icon,
    delay = 0,
}: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            className="group relative overflow-hidden cursor-pointer"
        >
            <div className="relative h-[70vh] overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2, duration: 0.6 }}
                >
                    <div className="mb-4">
                        <Icon className="w-8 h-8 text-[#d4af37]" />
                    </div>

                    <h3 className="text-white text-3xl lg:text-4xl mb-3 tracking-tight">
                        {title}
                    </h3>

                    <p className="text-white/70 text-lg max-w-md">
                        {description}
                    </p>

                    <div className="mt-6 w-12 h-px bg-[#d4af37] group-hover:w-24 transition-all duration-500" />
                </motion.div>
            </div>
        </motion.div>
    );
}
