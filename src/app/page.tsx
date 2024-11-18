
import Herosection from "@/pages/Herosection";
import Navbar from "@/pages/Navbar";
import Profilecard from "@/pages/Profilecard";
export default function Home() {
  return (
    <div>
       <Navbar/>
       <div className="flex flex-col lg:flex-row lg:relative  mt-10 ml-16  xl:ml-44 mr-16 xl:mr-44">
  <div className="w-full  lg:w-1/3 lg:overflow-y-auto lg:sticky flex justify-center mt-4  mr-8  md:mt-0">
    <Profilecard />
  </div>
  <div className="w-full h-auto lg:w-2/3 flex justify-center ml-auto mt-4 mr-8 md:mt-0">
    <Herosection />
  </div>
</div>
    </div>
  );
}
