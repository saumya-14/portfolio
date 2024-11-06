import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
});

const Profilecard = () => {
  return (
    <div className={`${poppins.className} bg-white text-center rounded-2xl p-6  w-auto shadow-lg transform transition duration-300 hover:scale-105`}>
      {/* Profile Image */}
      <div className="relative mt-1 z-0">
        <Image
          src="/image2.jpg" // Replace with your image path
          alt="Profile Image"
          width={250}
          height={250}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-bold text-black mt-4">SAUMYA SHRIVASTAVA</h2>

      {/* Role Description */}
      <div className="flex flex-col items-center justify-center mt-4 space-y-4">
        <span className="text-gray-600 text-center text-lg">
          A passionate web developer and competitive programming enthusiast, currently in my 3rd year at IIIT Ranchi. Driven by a love for code and a commitment to innovation.
        </span>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-4 text-orange-500">
        <Image src='/instagram.svg' alt='Instagram' width={24} height={24} />
        <Image src='/twiiter.svg' alt='Twitter' width={24} height={24} />
        <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} />
      </div>
    </div>
  );
};

export default Profilecard;
