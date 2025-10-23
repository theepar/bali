"use client";
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-white tracking-[0.3em] text-sm mb-6">BALI</h3>
                            <p className="text-white/50 text-lg leading-relaxed max-w-md">
                                Jelajahi keindahan Pulau Dewata dengan pengalaman wisata yang tak terlupakan.
                                Budaya, alam, dan spiritualitas berpadu sempurna.
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-white text-xs tracking-[0.3em] mb-6">KONTAK</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>Seminyak, Bali<br />Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span>+62 361 1234567</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <span>hello@bali.id</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-white text-xs tracking-[0.3em] mb-6">SOSIAL MEDIA</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Facebook, label: 'Facebook' },
                            ].map(({ icon: Icon, label }) => (
                                <motion.a
                                    key={label}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="#"
                                    aria-label={label}
                                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300"
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm tracking-wide">
                        © {currentYear} BALI TOURISM. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-white/80 text-sm tracking-wide transition-colors">
                            PRIVACY
                        </a>
                        <a href="#" className="text-white/40 hover:text-white/80 text-sm tracking-wide transition-colors">
                            TERMS
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
