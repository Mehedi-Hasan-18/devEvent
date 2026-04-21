import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Inter } from "next/font/google";
import "../app/globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import Navber from "@/components/Navber";
import { PostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub For Every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" >
      <body
        className={`min-h-screen
        antialiased
        ${SchibstedGrotesk.variable}
        ${MartianMono.variable}`}
      >
        <Navber />
        <div className="absolute inset-0 top-0 z[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.15}
            distortion={0.05}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1.5}
            saturation={1.2}
          />
        </div>
        <PostHogProvider>
          <main className="relative z-10">{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
