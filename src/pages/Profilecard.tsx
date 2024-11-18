import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

const Profilecard = () => {
  return (
    <div
    className={`${poppins.className} bg-white  h-3/5  text-center rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 lg:max-w-[500px] p-6 sm:p-8 flex flex-col items-center`}
  >
    {/* Profile Image */}
    <div className="relative ">
      <Image
        src="/profile.jpg" 
        alt="Profile Image"
        width={300}
        height={300}
        className="rounded-lg mx-auto object-cover w-auto h-auto"
      />
    </div>
  
    {/* Name */}
    <h2 className="text-2xl lg:text-3xl font-bold text-black mt-4">
      SAUMYA SHRIVASTAVA
    </h2>
  
    {/* Role Description */}
    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 lg:mt-4 px-2 lg:px-6">
      A passionate web developer and competitive programming enthusiast. Driven
      by a love for code and a commitment to innovation.
    </p>
  
    {/* Social Media Icons */}
    <div className="flex justify-center mt-4 space-x-6 lg:space-x-8 text-orange-500">
      <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
      <Image src="/twiiter.svg" alt="Twitter" width={28} height={28} />
      <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
      <Image src="/github.svg" alt="GitHub" width={28} height={28} />
    </div>
  </div>
  );
};

export default Profilecard;
