import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  User
} from "lucide-react";
import { SiJavascript, SiPython, SiReact, SiGooglechrome } from "react-icons/si";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigation = (section: string) => {
    console.log("Navigate to:", section);
  };

  return (
    <div className="min-h-screen bg-portfolio text-white">
      {/* Navigation */}
      <nav className="flex justify-center py-8">
        <div className="flex space-x-8 text-lg">
          <button onClick={() => handleNavigation('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => handleNavigation('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
          <button onClick={() => handleNavigation('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
          <button onClick={() => handleNavigation('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - ID Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Badge Lanyard - Extended */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                {/* Lanyard Clip */}
                <div className="lanyard-clip w-12 h-8 rounded-t-xl mb-2 flex items-center justify-center">
                  <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                </div>
                {/* Lanyard Strap */}
                <div className="lanyard w-3 h-16 rounded-full"></div>
              </div>
              
              {/* ID Badge */}
              <div className="id-badge relative max-w-xs mx-auto">
                {/* Profile Image */}
                <div className="w-36 h-36 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-white/30 bg-gray-700">
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-20 h-20 text-gray-300" />
                  </div>
                </div>
                
                {/* Name on Badge */}
                <h3 className="text-white text-xl font-bold text-center">Aryan Raj Joshi</h3>
              </div>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-5xl lg:text-7xl font-bold mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="gradient-text">Aryan Raj Joshi</span>
            </h1>
            
            <p className={`text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              I build fast, think deep, and bring digital quests to life.
            </p>
            
            <Button 
              onClick={() => handleNavigation('projects')}
              className={`btn-gradient text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              size="lg"
            >
              View My Projects
            </Button>
          </div>
        </div>

        {/* Bottom Section - Icon Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          
          {/* Skills */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto skill-icon rounded-full flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <SiJavascript className="w-5 h-5 text-black" />
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <SiPython className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <SiGooglechrome className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Skills</h3>
          </div>

          {/* Projects */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto project-window flex items-center justify-center p-6">
                <div className="w-full h-full bg-blue-600/50 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                    <div className="h-2 bg-blue-300 rounded w-1/2"></div>
                    <div className="h-8 bg-blue-500 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Projects</h3>
          </div>

          {/* Folder */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto folder-icon flex items-center justify-center">
                <FolderOpen className="w-16 h-16 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Folder</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
