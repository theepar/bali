
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'DESTINASI', href: '#destinations' },
        { name: 'PENGALAMAN', href: '#experiences' },
        { name: 'BUDAYA', href: '#culture' },
        { name: 'KONTAK', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <motion.button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-white tracking-[0.3em] relative group"
                        >
                            <span className="text-sm">BALI</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-500" />
                        </motion.button>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-12">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white text-xs tracking-[0.2em] relative group"
                                >
                                    {item.name}
                                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-500" />
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-white text-2xl tracking-[0.3em]"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}
