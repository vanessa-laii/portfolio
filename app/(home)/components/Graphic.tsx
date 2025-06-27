import Image from 'next/image'
 
function Home() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Center the green circle behind the image */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 opacity-20 blur-[100px] z-[-1]"></div>
      <Image
        src="/heroGraphic.png"
        alt="Landscape picture"
        height={500}
        width={500}
      />
    </div>
  )
}
 
export default Home
