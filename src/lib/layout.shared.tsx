import { routers } from "@/constants/routers.constant";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Link from "next/link";
import { images } from "public/images";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: (
                <div className="flex flex-col items-start gap-3">
                    <Link href={routers.home} className="flex items-center gap-3">
                        <Image
                            className="h-12 w-auto animate-pulse"
                            loading="lazy"
                            src={images.logo}
                            alt="Cardano2vn"
                        />
                        <h3 className="text-2xl font-bold text-gray-950 dark:text-gray-300 font-stretch-50%">
                            Hydra Tutorial
                        </h3>
                    </Link>
                </div>
            ),
        },
        // see https://fumadocs.dev/docs/ui/navigation/links
        links: [],
    };
}
