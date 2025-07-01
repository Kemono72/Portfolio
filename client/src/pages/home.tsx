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
import CircularGallery from "@/components/CircularGallery";
import GlareHover from "@/components/GlareHover";

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
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const projectsData = [
    { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'E-Commerce Platform' },
    { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'React Dashboard' },
    { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Mobile App UI' },
    { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Portfolio Website' },
    { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Chat Application' },
    { image: `https://picsum.photos/seed/6/800/600?grayscale`, text: 'Task Manager' },
    { image: `https://picsum.photos/seed/7/800/600?grayscale`, text: 'Social Media App' },
    { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Weather App' },
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
              handle="Kemono_7214"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://i.imgur.com/rm023nz.jpeg"
              miniAvatarUrl="https://i.imgur.com/rm023nz.jpeg"
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

        {/* Bottom Section - Projects Gallery */}
        <div className="mt-32 max-w-6xl mx-auto">
          
          {/* Projects Gallery */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h3>
            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery 
                items={projectsData}
                bend={3} 
                textColor="#ffffff" 
                borderRadius={0.05} 
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h3>
            <div className="flex justify-center items-start gap-12">
              {/* Hackathon Badge - Left */}
              <div className="flex-shrink-0" style={{ marginTop: '100px' }}>
                <GlareHover
                  width="200px"
                  height="200px"
                  background="transparent"
                  borderRadius="15px"
                  borderColor="#333"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <a 
                    href="https://badges.ecampusontario.ca/app/badge/info/93007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://badges.ecampusontario.ca/file/b/d/3/a/bd3af1b9be7d25a62aa60f8c31b2dce5b14dbe57a5ca0124afe6a95af1301697.png"
                      alt="2024 Housing Hackathon - Finalist"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </a>
                </GlareHover>
              </div>

              {/* Skills Carousel - Center */}
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

              {/* Integrity Badge - Right */}
              <div className="flex-shrink-0" style={{ marginTop: '100px' }}>
                <GlareHover
                  width="200px"
                  height="200px"
                  background="transparent"
                  borderRadius="15px"
                  borderColor="#333"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <a 
                    href="https://badges.ecampusontario.ca/app/badge/info/93009" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://badges.ecampusontario.ca/file/c/5/6/a/c56a342665bec15e497471d7a020cf64d377bff1b04ef90136d4a437d3bc7043.svg"
                      alt="Integrity in Action"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </a>
                </GlareHover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
