import React from 'react'
import { Inter as Font } from "next/font/google";
import Navbar from './Navbar';

const inter = Font({ subsets: ["latin"], weight: ["400"], display: "swap" });

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={`bg-zinc-100 ${inter.className}`}>
      <Navbar />
      <div className="px-5 mt-5 min-h-screen">{children}</div>
    </div>
  );
}

export default Layout
