import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORBIT — Real-world assets. A brighter tomorrow.",
  description: "Trusted digital infrastructure for real-world assets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
