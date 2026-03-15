import type { Metadata } from "next";
import "./globals.css";
import { Poppins, JetBrains_Mono } from "next/font/google";
import AnimatedCursor from "@/components/AnimatedCursor";
import SmoothScroll from "@/components/SmoothScroll";
import CurtainWrapper from "@/components/CurtainWrapper";
import ResumeButton from "@/components/ResumeButton";

const mainFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-main",
});

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "S. Developer | Portfolio",
  description:
    "Portfolio of Sunil Sarvaiya, a Frontend Developer specializing in Next.js, React and modern UI animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.variable} ${codeFont.variable} antialiased bg-black text-white`}
      >
        {/* Smooth scroll */}
        <SmoothScroll />

        {/* Cursor */}
        <AnimatedCursor />

        {/* Page content */}
        <CurtainWrapper>{children}</CurtainWrapper>
        <ResumeButton />
      </body>
    </html>
  );
}
