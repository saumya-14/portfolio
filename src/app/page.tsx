
import Navbar from "@/pages/Navbar";
import Profilecard from "@/pages/Profilecard";
export default function Home() {
  return (
    <div>
       <Navbar/>
       <div className="min-h-screen flex items-center justify-center mt-10 ml-16 mr-16">
      <Profilecard />
    </div>
    </div>
  );
}
