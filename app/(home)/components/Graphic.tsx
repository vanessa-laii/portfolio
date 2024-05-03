import Image from 'next/image'
 
function Home() {
  return (
    <Image
      src="/heroGraphic.png"
      alt="Landscape picture"
      width={700}
      height={300}
    />
  )
}
 
export default Home