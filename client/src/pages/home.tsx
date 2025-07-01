import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  Monitor
} from "lucide-react";
import { SiJavascript, SiPython, SiReact, SiGooglechrome, SiNodedotjs, SiTypescript } from "react-icons/si";
import ProfileCard from "@/components/ProfileCard";
import SplashCursor from "@/components/SplashCursor";
import Carousel from "@/components/Carousel";
import GooeyNav from "@/components/GooeyNav";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigation = (section: string) => {
    console.log("Navigate to:", section);
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const skillsData = [
    {
      title: "JavaScript",
      description: "Modern JS, ES6+, async programming",
      id: 1,
      icon: <SiJavascript className="carousel-icon" style={{ color: "#F7DF1E" }} />,
    },
    {
      title: "React",
      description: "React, Next.js, hooks, state management",
      id: 2,
      icon: <SiReact className="carousel-icon" style={{ color: "#61DAFB" }} />,
    },
    {
      title: "TypeScript",
      description: "Type-safe development, advanced patterns",
      id: 3,
      icon: <SiTypescript className="carousel-icon" style={{ color: "#3178C6" }} />,
    },
    {
      title: "Node.js",
      description: "Backend development, APIs, databases",
      id: 4,
      icon: <SiNodedotjs className="carousel-icon" style={{ color: "#339933" }} />,
    },
    {
      title: "Python",
      description: "Web development, automation, AI/ML",
      id: 5,
      icon: <SiPython className="carousel-icon" style={{ color: "#3776AB" }} />,
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio text-white">
      <SplashCursor />
      {/* Gooey Navigation */}
      <div className="flex justify-center py-8">
        <GooeyNav
          items={navigationItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - ProfileCard */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard
              name="Aryan Raj Joshi"
              title="Software Engineer"
              handle="aryanjoshi"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://via.placeholder.com/400x600/1a1a2e/fff?text=AR"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
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

        {/* Bottom Section - Skills Carousel & Other Icons */}
        <div className="mt-32 max-w-6xl mx-auto">
          
          {/* Skills Carousel */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 text-white">My Skills</h3>
            <div className="flex justify-center">
              <div style={{ height: '400px', position: 'relative' }}>
                <Carousel
                  items={skillsData}
                  baseWidth={350}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>
          </div>

          {/* Projects & Folder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            
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
    </div>
  );
}
