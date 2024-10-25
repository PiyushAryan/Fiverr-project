import Image from "next/image";
import localFont from "next/font/local";
import { StarsBackground } from "@/components/ui/stars-background";
import { GlobeDemo } from "@/components/GlobeDemo";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <div className="h-screen rounded-md bg-[#120C18] flex flex-col items-center justify-center relative w-screen">
      <StarsBackground />
      <Button className="bg-transparent bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent" variant="outline">Login</Button>
      <Button className="bg-transparent bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent" variant="outline">Get Demo</Button>
</div>
    <GlobeDemo />
    
    </>
  );
}
