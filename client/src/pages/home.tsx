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
  ];

  const projectsData = [
    { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'PetsPros: Retail DB' },
    { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'RC Car: Arduino Build' },
    { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Clinic Console App' },
    { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'LLM Rater: Outlier' },
    { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Kyoku Discord Bot' },
    { image: `https://picsum.photos/seed/6/800/600?grayscale`, text: 'iOS WeatherCast' },
    { image: `https://picsum.photos/seed/7/800/600?grayscale`, text: 'Ethical Valorant TriggerBot' },
    { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'LEGO Manager' },
    { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'StudentConnect' },
    { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Truck Route AI' },
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
           <br></br> 
            <p className={`text-xl lg:text-1xl text-gray-300 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              I build fast, think deep and bring digital quests to my life.<br></br> When I’m not coding I’m raging at games or flipping manga pages.<br></br> Music? I'm bad and I won’t recognize your playlist but I’ll still sing like I’m on tour. 
             </p>
              <br></br>
              <h3 className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="gradient-text">Quote:</span>
            </h3>

             <p className={`text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <b><i> "The difference between a novice and a master is that a master has failed more times than a novice had tried."</i></b><br></br><b>-Kurosenai</b>
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
        <div className="mt-28 w-full px-0">
          
          {/* Projects Gallery */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h3>
             <div style={{ height: '700px', width: '100%' }}>
             <CircularGallery 
             items={projectsData}
             bend={0.5} 
             textColor="#ffffff" 
             borderRadius={0.075} 
             />
            </div>

          </div>

         <div className="mt-8 w-full px-0">

          {/* Skills Section */}
           <div className="text-center mb-4">
            <h2 className="text-3x1 font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                <b><i>Skills & Technologies</i></b>
              </span>
            </h2>

          </div>
            <div className="flex justify-center items-start gap-12">
              {/* Hackathon Badge  */}
              <div className="flex-shrink-0" style={{ marginTop: '25px' }}>
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
                  transitionDuration={1250}
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
              <div style={{ height: '500px', position: 'relative' }}>
                <Carousel
                  items={skillsData}
                  baseWidth={1000}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>

              {/* Integrity Badge  */}
              <div className="flex-shrink-0" style={{ marginTop: '25px' }}>
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
                  transitionDuration={1250}
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

<footer className="bg-black text-white py-10 mt-16 border-t border-gray-800">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto px-4">

    {/* Left Socials */}
    <div className="flex gap-8 text-center">
      {/* Gmail */}
      <div>
        <a href="mailto:aryanrajjoshi72@gmail.com" className="neon-icon-muted">
          <i className="fas fa-envelope text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">Gmail</p>
      </div>
      {/* Instagram */}
      <div>
        <a href="https://instagram.com/kemono_7214/" target="_blank" rel="noopener noreferrer" className="neon-icon-muted">
          <i className="fab fa-instagram text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">Instagram</p>
      </div>
      {/* Discord */}
      <div>
        <a href="https://discord.com/users/kemono_72" target="_blank" rel="noopener noreferrer" className="neon-icon-muted">
          <i className="fab fa-discord text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">Discord</p>
      </div>
    </div>

    {/* Center Section */}
    <div className="text-center">
      <p className="text-sm text-blue-400 shimmer">
        © 2025 Aryan Raj Joshi
      </p>
      <p className="text-sm text-blue-400 shimmer">
        Built in VSCode • Deployed on dreams ✨
      </p>
      <p className="text-xs text-gray-500 mt-1 tracking-wide">
        PORTFOLIO LEVEL: MAX AURA
      </p>
    </div>

    {/* Right Socials */}
    <div className="flex gap-8 text-center">
      {/* GitHub */}
      <div>
        <a href="https://github.com/Kemono72" target="_blank" rel="noopener noreferrer" className="neon-icon-muted">
          <i className="fab fa-github text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">GitHub</p>
      </div>
      {/* LinkedIn */}
      <div>
        <a href="https://linkedin.com/in/kemono" target="_blank" rel="noopener noreferrer" className="neon-icon-muted">
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">LinkedIn</p>
      </div>
      {/* Outlook */}
      <div>
        <a href="mailto:onomekkemono@gmail.com" className="neon-icon-muted">
          <i className="fas fa-envelope-open-text text-3xl"></i>
        </a>
        <p className="text-xs mt-2 text-gray-400">Outlook</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
