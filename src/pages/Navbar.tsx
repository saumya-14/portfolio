import Image from "next/image";


const Navbar = () => {


  return (
    <div  className="bg-[#1d1a19] p-3 rounded-xl flex justify-around items-center max-w-xs mx-auto shadow-lg mt-7">
<Image src="/home.svg" alt="Home Icon" width={24} height={24} />
<Image src="/project.svg" alt="Home Icon" width={24} height={24} />

<Image src="/experiencs.svg" alt="Home Icon" width={24} height={24} />
<Image src="/tools.svg" alt="Home Icon" width={24} height={24} />



        
        

    </div>
  )
}

export default Navbar;