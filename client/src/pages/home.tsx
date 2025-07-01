import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Rocket, 
  FolderOpen, 
  Mail, 
  ArrowRight,
  Circle
} from "lucide-react";

interface NavigationCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  route: string;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigationItems: NavigationCard[] = [
    {
      title: "Skills",
      description: "Technologies & expertise",
      icon: <Code className="w-8 h-8" />,
      color: "text-blue-400",
      route: "/skills"
    },
    {
      title: "Projects",
      description: "Featured work & demos",
      icon: <Rocket className="w-8 h-8" />,
      color: "text-green-400",
      route: "/projects"
    },
    {
      title: "Folder",
      description: "All my work & files",
      icon: <FolderOpen className="w-8 h-8" />,
      color: "text-yellow-400",
      route: "/portfolio"
    },
    {
      title: "Contact",
      description: "Let's connect & chat",
      icon: <Mail className="w-8 h-8" />,
      color: "text-purple-400",
      route: "/contact"
    }
  ];

  const handleViewProjects = () => {
    // TODO: Navigate to projects section or page
    console.log("View Projects clicked");
  };

  const handleNavigation = (route: string) => {
    // TODO: Implement actual navigation
    console.log("Navigate to:", route);
  };

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Profile Card */}
        <div className="lg:w-80 lg:min-h-screen bg-dark-secondary border-r border-dark-tertiary p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            {/* Profile Image */}
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl lg:text-5xl font-bold text-white">
              AR
            </div>
            
            {/* Name */}
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Aryan Raj Joshi</h2>
            
            {/* Status Badge */}
            <Badge variant="outline" className="bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30">
              <Circle className="w-2 h-2 fill-current animate-pulse-dot mr-2" />
              Available for work
            </Badge>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-16">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto w-full">
            
            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="gradient-text">Aryan Raj Joshi</span>
            </h1>
            
            {/* Subtext */}
            <p className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              I build fast, think deep, and bring digital quests to life.
            </p>
            
            {/* CTA Button */}
            <Button 
              onClick={handleViewProjects}
              className={`btn-gradient text-white font-semibold py-4 px-8 rounded-lg shadow-lg mb-16 text-lg transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              size="lg"
            >
              <span>View My Projects</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
          </div>
          
          {/* Navigation Grid */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationItems.map((item, index) => (
                <Card 
                  key={item.title}
                  onClick={() => handleNavigation(item.route)}
                  className={`bg-dark-secondary border-dark-tertiary p-6 text-center card-hover cursor-pointer transition-all duration-700 hover:border-blue-500/30 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    transitionDelay: `${500 + index * 100}ms` 
                  }}
                >
                  <div className={`mb-4 ${item.color} flex justify-center`}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
