/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: "/getting-started",
                destination: "/",
                permanent: true,
            },
            {
                source: "/installation",
                destination: "/installation/nextjs",
                permanent: true,
            },
            {
                source: "/theming",
                destination: "/theming/tailwind-css-plugin",
                permanent: true,
            },
            {
                source: "/components",
                destination: "/components/alert",
                permanent: true,
            },
            {
                source: "/docs/components",
                destination: "/components/alert",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
