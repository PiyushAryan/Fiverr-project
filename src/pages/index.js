import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";
import { GlobeDemo } from "@/components/GlobeDemo";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <>

    <div className="h-screen rounded-md bg-[#120C18] flex flex-col items-center justify-center relative w-screen">
    
      <StarsBackground />

</div>
    <GlobeDemo />
    </>
  )
}
