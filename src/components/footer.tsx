"use client";

import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routers } from "@/constants/routers.constant";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/public/images";
import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    if (pathname.startsWith(routers.document)) {
        return null;
    }

    return (
        <footer className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl pt-16 pb-8 border-t border-gray-200/50 dark:border-slate-700/50">
            <div className="max-w-[1200px] mx-auto px-12 sm:px-0">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
                    <div className="lg:col-span-2">
                        <motion.section
                            className="flex items-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Link
                                href={routers.home}
                                className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
                            >
                                <motion.div
                                    className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-purple-500/20"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image className="h-10 w-auto" priority src={images.logo} alt="Tipjar Hydra Logo" />
                                </motion.div>
                                <motion.h3
                                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-stretch-50% sm:block"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Hydra Tutorial
                                </motion.h3>
                            </Link>
                        </motion.section>

                        <p className="text-gray-700 mt-2 dark:text-gray-300 mb-6 max-w-xs">
                            Provides a step-by-step, hands-on course on how to build a Hydra DApp on Cardano, with
                            real-world examples and accessible resources to accelerate learning and deployment.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { href: "https://facebook.com/hydrapact", icon: Facebook, label: "Facebook" },
                                { href: "https://twitter.com/hydrapact", icon: Twitter, label: "Twitter" },
                                { href: "https://instagram.com/hydrapact", icon: Instagram, label: "Instagram" },
                                { href: "https://linkedin.com/company/hydrapact", icon: Linkedin, label: "LinkedIn" },
                                { href: "https://github.com/hydrapact", icon: Github, label: "GitHub" },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <social.icon className="h-5 w-5" />
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Products</h3>
                        <ul className="space-y-2">
                            {["Exchange", "Wallet", "API", "Institutional Services", "DeFi Platform"].map(
                                (item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item === "API" ? "https://x.ai/api" : "#!"}
                                            className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        >
                                            <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                                {item}
                                            </motion.span>
                                            <motion.div
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            />
                                        </Link>
                                    </motion.li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {["Blog", "Tutorials", "Market Data", "Documentation", "Help Center"].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href="#!"
                                        className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                            {item}
                                        </motion.span>
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Company</h3>
                        <ul className="space-y-2">
                            {["About", "Careers", "Press", "Legal & Privacy", "Contact Us"].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href="#!"
                                        className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                            {item}
                                        </motion.span>
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200/50 dark:border-slate-700/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 md:mb-0">
                            &copy; {currentYear} Hydra Pact. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <ThemeToggle />
                            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href="#!"
                                        className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors"
                                    >
                                        <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                            {item}
                                        </motion.span>
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
