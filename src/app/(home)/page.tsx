"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Action from "@/components/action";
import { images } from "@/public/images";
import { routers } from "@/constants/routers.constant";

export default function Home() {
    return (
        <main>
            <motion.section
                id="Landing"
                className="relative flex min-h-screen items-center overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <div className="text-center">
                        <div className="text-9xl font-bold text-gray-300 dark:text-white/10">HYDRA</div>
                        <div className="text-6xl font-bold text-gray-300 dark:text-white/10">CARDANO</div>
                        <div className="text-4xl font-bold text-gray-300 dark:text-white/10">DAPP DEVELOPMENT</div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="relative">
                        <div className="grid items-center gap-8 lg:grid-cols-2">
                            <motion.section
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                                className="relative"
                            >
                                <h1 className="mb-10 text-5xl font-bold lg:text-8xl">
                                    <span className="block tracking-tight text-gray-900 dark:text-white">
                                        Learn Hydra
                                    </span>
                                    {/* <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text tracking-tight text-gray-900 dark:text-transparent drop-shadow-lg">
                                        DApp Development
                                    </span> */}
                                    <span className="mt-4 block text-2xl font-normal text-gray-600 dark:text-gray-300 lg:text-4xl">
                                        Powered by Cardano2vn
                                    </span>
                                </h1>
                                <div className="relative mb-12 border-l-2 border-gray-300 dark:border-white/20 pl-6">
                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 50 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: "easeOut",
                                                },
                                            },
                                        }}
                                        className="mb-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300"
                                    >
                                        <strong className="text-gray-900 dark:text-white">
                                            Master Cardano’s Layer-2 Hydra
                                        </strong>{" "}
                                        with our comprehensive course, guiding you from setup to deploying scalable
                                        DApps with real-world examples.
                                    </motion.p>
                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 50 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: "easeOut",
                                                },
                                            },
                                        }}
                                        className="text-lg text-gray-500 dark:text-gray-400"
                                    >
                                        Open-source. Community-driven. Global impact.
                                    </motion.p>
                                </div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    className="flex flex-col gap-6 sm:flex-row"
                                >
                                    <Link
                                        href="https://lms.cardano2vn.io"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-success text-xl bg-blue-600 dark:bg-white px-8 py-4 font-semibold text-white dark:text-blue-900 shadow-xl hover:bg-blue-700 dark:hover:bg-gray-100"
                                        aria-label="Enroll in Hydra DApp Course"
                                    >
                                        Enroll Now
                                    </Link>
                                    <Link
                                        href={routers.document}
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-white/50 px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                                        aria-label="Learn More about Hydra Course"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                            </motion.section>
                            <motion.section
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative">
                                    <div className="relative h-[55vh] w-full">
                                        <motion.div
                                            className="absolute left-12 top-0 z-10 h-48 w-56 -rotate-2 transform overflow-hidden border-8 border-gray-200 dark:border-white shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${images.logo.src})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"></div>
                                            <div className="relative flex h-full flex-col justify-end p-4">
                                                <div className="mb-3 h-8 w-full bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 w-2/3 bg-gray-300 dark:bg-white/20"></div>
                                                    <div className="h-1.5 w-1/2 bg-gray-200 dark:bg-white/10"></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="absolute right-8 top-8 z-20 h-64 w-64 rotate-1 transform overflow-hidden border-8 border-gray-200 dark:border-white shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${images.logo.src})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-800/40 to-transparent"></div>
                                            <div className="relative flex h-full flex-col justify-end p-4">
                                                <div className="mb-3 h-12 w-full bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                                                <div className="space-y-2">
                                                    <div className="h-1.5 w-2/3 bg-gray-300 dark:bg-white/20"></div>
                                                    <div className="h-1.5 w-3/4 bg-gray-200 dark:bg-white/10"></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="absolute bottom-24 left-4 z-30 h-60 w-72 -rotate-1 transform overflow-hidden border-8 border-gray-200 dark:border-white shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${images.logo.src})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent"></div>
                                            <div className="relative flex h-full flex-col justify-end p-4">
                                                <div className="mb-3 h-12 w-full bg-gradient-to-r from-purple-500/20 to-transparent"></div>
                                                <div className="space-y-2">
                                                    <div className="h-1.5 w-1/2 bg-gray-300 dark:bg-white/20"></div>
                                                    <div className="h-1.5 w-2/3 bg-gray-200 dark:bg-white/10"></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="absolute bottom-12 right-12 z-40 h-52 w-52 rotate-3 transform overflow-hidden border-8 border-gray-200 dark:border-white shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${images.logo.src})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent"></div>
                                            <div className="relative flex h-full flex-col justify-end p-4">
                                                <div className="mb-3 h-10 w-full bg-gradient-to-r from-green-500/20 to-transparent"></div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 w-3/5 bg-gray-300 dark:bg-white/20"></div>
                                                    <div className="h-1.5 w-4/5 bg-gray-200 dark:bg-white/10"></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </div>
                <Action title="Next" href="#trust" />
            </motion.section>

            <motion.section
                id="trust"
                className="relative flex min-h-screen items-center overflow-hidden border-t border-gray-200 dark:border-white/10 py-20 bg-white dark:bg-gray-900"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
                    <div className="relative">
                        <motion.header
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                            className="mb-8"
                        >
                            <div className="mb-4 flex items-center gap-4">
                                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                                    Why Learn Hydra with C2VN?
                                </h2>
                            </div>
                            <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                                Our comprehensive course empowers developers to build scalable DApps on Cardano’s Hydra
                                Layer-2, fostering innovation and community growth.
                            </p>
                        </motion.header>

                        <div className="relative">
                            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 transform bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>
                            <div className="space-y-8 lg:space-y-12">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    className="relative"
                                >
                                    <div className="flex flex-col items-center justify-between lg:flex-row">
                                        <div className="w-full pr-0 lg:w-5/12 lg:pr-8">
                                            <div className="group relative">
                                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400/20 dark:from-purple-500/30 to-purple-500/20 dark:to-purple-600/30 opacity-50 blur-xl transition duration-500 group-hover:opacity-75"></div>
                                                <div className="relative rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-800/60 p-6 shadow-2xl backdrop-blur-sm">
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-purple-400 dark:from-purple-500 to-purple-500 dark:to-purple-600 text-2xl font-bold text-white shadow-xl shadow-purple-400/25 dark:shadow-purple-500/25">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-book-open h-8 w-8"
                                                            >
                                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                                                                Accessibility
                                                            </h3>
                                                            <div className="h-0.5 w-16 bg-purple-400 dark:bg-purple-500"></div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-3 text-base font-semibold text-purple-500 dark:text-purple-400">
                                                        Is learning Hydra accessible to all?
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                                        Our course offers{" "}
                                                        <strong className="text-gray-900 dark:text-white">
                                                            free, open-source resources
                                                        </strong>{" "}
                                                        on YouTube and GitHub, ensuring global access for developers and
                                                        students.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative z-10 hidden lg:block">
                                            <div className="h-8 w-8 rounded-full border-4 border-gray-100 dark:border-gray-950 bg-purple-400 dark:bg-purple-500 shadow-lg shadow-purple-400/50 dark:shadow-purple-500/50"></div>
                                            <div className="absolute -inset-2 animate-pulse rounded-full bg-purple-400/20 dark:bg-purple-500/20"></div>
                                        </div>
                                        <div className="hidden w-5/12 pl-8 lg:block">
                                            <div className="text-right opacity-40">
                                                <div className="text-6xl font-bold text-purple-400/30 dark:text-purple-500/30">
                                                    01
                                                </div>
                                                <div className="mt-2 text-purple-300/50">Open Access</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    className="relative"
                                >
                                    <div className="flex flex-col items-center justify-between lg:flex-row">
                                        <div className="hidden w-5/12 pr-8 lg:block">
                                            <div className="text-left opacity-40">
                                                <div className="text-6xl font-bold text-blue-400/30 dark:text-blue-500/30">
                                                    02
                                                </div>
                                                <div className="mt-2 text-blue-300/50">Practicality</div>
                                            </div>
                                        </div>
                                        <div className="relative z-10 hidden lg:block">
                                            <div className="h-8 w-8 rounded-full border-4 border-gray-100 dark:border-gray-950 bg-blue-400 dark:bg-blue-500 shadow-lg shadow-blue-400/50 dark:shadow-blue-500/50"></div>
                                            <div className="absolute -inset-2 animate-pulse rounded-full bg-blue-400/20 dark:bg-blue-500/20"></div>
                                        </div>
                                        <div className="w-full pl-0 lg:w-5/12 lg:pl-8">
                                            <div className="group relative">
                                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/20 dark:from-blue-500/30 to-blue-500/20 dark:to-blue-600/30 opacity-50 blur-xl transition duration-500 group-hover:opacity-75"></div>
                                                <div className="relative rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-800/60 p-6 shadow-2xl backdrop-blur-sm">
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-blue-400 dark:from-blue-500 to-blue-500 dark:to-blue-600 text-2xl font-bold text-white shadow-xl shadow-blue-400/25 dark:shadow-blue-500/25">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-code h-8 w-8"
                                                            >
                                                                <polyline points="16 18 22 12 16 6"></polyline>
                                                                <polyline points="8 6 2 12 8 18"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                                                                Practicality
                                                            </h3>
                                                            <div className="h-0.5 w-16 bg-blue-400 dark:bg-blue-500"></div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-3 text-base font-semibold text-blue-500 dark:text-blue-400">
                                                        Can you build real DApps?
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                                        Hands-on tutorials guide you to{" "}
                                                        <strong className="text-gray-900 dark:text-white">
                                                            deploy complete Hydra DApps
                                                        </strong>
                                                        , from setup to testnet, with real-world examples.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    className="relative"
                                >
                                    <div className="flex flex-col items-center justify-between lg:flex-row">
                                        <div className="w-full pr-0 lg:w-5/12 lg:pr-8">
                                            <div className="group relative">
                                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400/20 dark:from-green-500/30 to-green-500/20 dark:to-green-600/30 opacity-50 blur-xl transition duration-500 group-hover:opacity-75"></div>
                                                <div className="relative rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-800/60 p-6 shadow-2xl backdrop-blur-sm">
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-green-400 dark:from-green-500 to-green-500 dark:to-green-600 text-2xl font-bold text-white shadow-xl shadow-green-400/25 dark:shadow-green-500/25">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-users h-8 w-8"
                                                            >
                                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="9" cy="7" r="4"></circle>
                                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                                                                Community Building
                                                            </h3>
                                                            <div className="h-0.5 w-16 bg-green-400 dark:bg-green-500"></div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-3 text-base font-semibold text-green-500 dark:text-green-400">
                                                        Can we grow the Cardano ecosystem?
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                                        Join a vibrant community to{" "}
                                                        <strong className="text-gray-900 dark:text-white">
                                                            collaborate and innovate
                                                        </strong>
                                                        , contributing to Cardano’s growth through open-source projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative z-10 hidden lg:block">
                                            <div className="h-8 w-8 rounded-full border-4 border-gray-100 dark:border-gray-950 bg-green-400 dark:bg-green-500 shadow-lg shadow-green-400/50 dark:shadow-green-500/50"></div>
                                            <div className="absolute -inset-2 animate-pulse rounded-full bg-green-400/20 dark:bg-green-500/20"></div>
                                        </div>
                                        <div className="hidden w-5/12 pl-8 lg:block">
                                            <div className="text-right opacity-40">
                                                <div className="text-6xl font-bold text-green-400/30 dark:text-green-500/30">
                                                    03
                                                </div>
                                                <div className="mt-2 text-green-300/50">Collaboration</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <Action title="Scroll" href="#learn" />
            </motion.section>

            <motion.section
                id="learn"
                className="relative flex min-h-screen flex-col items-center overflow-hidden border-t border-gray-200 dark:border-white/10 py-20 bg-white dark:bg-gray-900"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        Master Hydra DApp Development
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        Join our free, open-source course to learn how to build scalable, high-performance DApps on
                        Cardano’s Hydra Layer-2 solution.
                    </motion.p>
                </div>
                <aside className="mx-auto my-0 flex w-full max-w-[1200px] flex-col gap-2 px-4">
                    <div className="flex w-full gap-7 max-sm:flex-col">
                        {/* Video */}
                        <motion.div
                            className="relative aspect-video w-[60%] rounded-3xl overflow-hidden shadow-lg max-sm:w-full"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-900/80 to-transparent shadow-xl"></div>
                            <iframe
                                className="absolute inset-0 z-10 block h-full w-full rounded-xl"
                                src="https://www.youtube.com/embed/Hf8YVPpIxPI"
                                title="C2VN: Hydra on Cardano – Complete Step-by-Step DApp Guide"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                aria-label="C2VN Hydra Course promotional video"
                            ></iframe>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="z-10 flex w-[40%] flex-col items-start gap-4 max-md:gap-3 max-sm:w-full"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <h2 className="text-left text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                C2VN Hydra Course
                            </h2>
                            <p className="mb-1 text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300">
                                Learn to build DApps with Hydra, Cardano’s Layer-2 solution for fast, low-cost
                                transactions.
                            </p>
                            <span className="text-left leading-relaxed text-gray-500 dark:text-gray-400 max-md:text-base">
                                Our course offers hands-on tutorials, open-source code, and community support to help
                                you deploy DApps on Cardano’s testnet and beyond.
                            </span>
                            <span className="text-left leading-relaxed text-gray-500 dark:text-gray-400 max-md:text-base">
                                Funded by Project Catalyst, this initiative empowers developers in Vietnam and globally.
                            </span>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                            >
                                <Link
                                    href="https://projectcatalyst.io/funds/14/cardano-open-ecosystem/c2vn-hydra-on-cardano-complete-step-by-step-dapp-guide"
                                    target="_blank"
                                    className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 bg-blue-600 dark:bg-white px-8 py-3 font-semibold text-white dark:text-blue-900 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-105"
                                    aria-label="Explore the C2VN Hydra Course Proposal"
                                >
                                    Explore the Proposal
                                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </aside>
            </motion.section>
        </main>
    );
}
