const Herosection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:items-start justify-center lg:justify-start mt-8 text-white px-4 sm:px-8 lg:px-0">
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
</div>
  );
};

export default Herosection;
