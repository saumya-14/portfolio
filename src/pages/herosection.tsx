import Image from "next/image";

const Herosection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:items-start justify-center lg:justify-start  mt-8 text-white px-4 sm:px-8 lg:px-0">
  {/* Title Section */}
  <div className="text-center lg:text-start mb-8">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white">SOFTWARE</h1>
    <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#333235]">ENGINEER</h2>
    <p className="text-[#6e6c6f] mt-4 text-base sm:text-lg md:text-xl sm:max-w-xs md:max-w-md">
      Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
    </p>
  </div>

  {/* Statistics Section */}
  <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
    <div className="text-center md:text-start w-full sm:w-auto">
      <p className="text-5xl md:text-7xl font-bold text-white">+1</p>
      <p className="text-[#6e6c6f] mt-2">YEARS OF</p>
      <p className="text-[#6e6c6f]">EXPERIENCE</p>
    </div>
    <div className="text-center md:text-start w-full sm:w-auto sm:mt-0">
      <p className="text-5xl md:text-7xl font-bold text-white">+10</p>
      <p className="text-[#6e6c6f] mt-2">PROJECTS</p>
      <p className="text-[#6e6c6f]">COMPLETED</p>
    </div>
    <div className="text-center md:text-start w-full sm:w-auto sm:mt-0">
      <p className="text-5xl md:text-7xl font-bold text-white">+20</p>
      <p className="text-[#6e6c6f] mt-2">WORLDWIDE</p>
      <p className="text-[#6e6c6f]">CLIENTS</p>
    </div>
  </div>

  <div className="text-center lg:text-start mt-14">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white">TECHSTACK</h1>
    <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#333235]">TOOLS</h2>
    <div className="flex flex-wrap sm:items-center lg:mt-9 mt-9 w-full  text-white p-6">
  {/* Next.js */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/nextjs.svg" alt="Next.js" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">Next.js</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">React Framework</p>
    </div>
  </div>

  {/* MongoDB */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/mongodb.svg" alt="MongoDB" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">MongoDB</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">Database</p>
    </div>
  </div>

  {/* Express */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/express.svg" alt="Express" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">Express</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">Backend</p>
    </div>
  </div>

  {/* Node.js */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/node.svg" alt="Node.js" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">Node.js</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">Backend</p>
    </div>
  </div>

  {/* ChatGPT */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/chatgpt.svg" alt="ChatGPT" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">ChatGPT</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">Helping Tool</p>
    </div>
  </div>

  {/* Tailwind CSS */}
  <div className="flex flex-row items-center w-full sm:w-1/2 lg:w-1/2 p-4">
    <div className="bg-white rounded-xl flex items-center justify-center w-28 h-24">
      <Image src="/tailwind.svg" alt="Tailwind CSS" height={100} width={100} className="m-2" />
    </div>
    <div className="flex flex-col text-start ml-6">
      <p className="text-2xl font-poppins font-bold">Tailwind</p>
      <p className="text-[#6e6c6f] mt-1 font-poppins">Styling</p>
    </div>
  </div>
</div>

  </div>
  <div className="text-center w-full lg:text-start mt-14">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white">ABOUT</h1>
    <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#333235]">ME</h2>
    <div className="flex flex-col mt-4 ">
      <div className=" hover:bg-[#221e1d]  rounded-xl h-auto mt-2 ">
        {/* left */}
         <div className="font-poppins text-start text-white text-3xl font-semibold m-4">
         My Journey from School to IIIT Ranchi
         </div>
         <div className="text-[#a2a2a7] text-lg mt-2 font-poppins text-start m-4">
         My passion for technology began in school, where I discovered coding and problem-solving. Now, as a 3rd-year student at IIIT Ranchi, I’m honing my skills in web development, competitive programming, and emerging technologies.
         </div>
         {/* right */}
         <div>
         
         </div>
      </div>
      <div className="hover:bg-[#221e1d] rounded-xl  h-auto mt-5">
        {/* left */}
         <div className="font-poppins text-white text-3xl m-4 font-semibold text-start">
         Hackathons and Innovation
         </div>
         <div className="text-[#a2a2a7] text-lg m-4 font-poppins text-start">
  <p>
  I embrace challenges that push creativity and technology.
  </p>
  <ul className="list-disc pl-5 m-4">
    <li>
      <strong>Walmart Sparkathon:</strong>  Built an immersive virtual store with Next.js and Three.js.
    </li>
    <li className="m-4">
      <strong>Gen AI Google Hackathon:</strong>Innovated solutions blending AI with practical use cases.
    </li>
  </ul>
  <p className="m-4">
  These experiences enhanced my technical skills, teamwork, and problem-solving abilities.
  </p>
</div>

         {/* right */}
         <div>
         
         </div>
      </div>
      <div className="hover:bg-[#221e1d] rounded-xl  h-auto mt-6">
        {/* left */}
         <div className="font-poppins text-white text-3xl font-semibold text-start m-4">
         My Web Development Journey
         </div>
         <div className="text-[#a2a2a7] text-lg mt-2 font-poppins text-start m-4">
         My journey as a web developer has been a blend of learning and building impactful projects. From designing user-centric interfaces to implementing robust backend systems, I have developed a strong command over technologies like Next.js, Tailwind CSS, and Node.js.
         </div>
         {/* right */}
         <div>
         
         </div>
      </div>

      <div className="hover:bg-[#221e1d]  h-auto mt-6 rounded-xl">
        {/* left */}
         <div className="font-poppins text-white text-3xl font-semibold text-start m-4">
         Looking Ahead
         </div>
         <div className="text-[#a2a2a7] text-lg mt-2 font-poppins text-start m-4">
         As I continue to grow, I aim to further expand my expertise in full-stack development, embrace cutting-edge technologies, and contribute to projects that make a difference. My goal is to build a career where I can merge innovation with purpose, solving real-world problems through technology.
         </div>
         {/* right */}
         <div>
         
         </div>
      </div>
    </div>
    </div>
</div>
  );
};

export default Herosection;
