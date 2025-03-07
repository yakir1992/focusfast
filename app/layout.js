import { Playfair_Display } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import logo from "@/app/icon.png"

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
});

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// Updated metadata with versioned favicon to break cache
export const metadata = {
  title: "FocusFast | Achieve Deep Focus in minutes, not hours",
  description: "Drop into flow state on demand with FocusFast. No more wasted hours trying to concentrate.",
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' }, // Added version parameter
      { url: '/icon.png?v=2', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png?v=2', type: 'image/png' }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        {config.domainName && (
          <PlausibleProvider domain={config.domainName} />
        )}
        {/* Remove manual favicon links - let metadata handle it */}
      </head>
      <body className="bg-neutral-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}