import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORBIT — Make real assets provable.",
  description: "ORBIT is building verifiable digital infrastructure for real-world assets.",
  icons: { icon: "/orbit-logo.svg" }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
