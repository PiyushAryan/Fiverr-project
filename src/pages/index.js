import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";
import { GlobeDemo } from "@/components/GlobeDemo";
import { Button } from "@/components/ui/button";



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
