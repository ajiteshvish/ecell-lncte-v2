import { useEffect, useState } from 'react';
import { Sparkles, Rocket, Lightbulb, Trophy } from 'lucide-react';

interface FallbackSceneProps {
  className?: string;
  showText?: boolean;
  text?: string;
}

export const FallbackScene = ({ className = "", showText = false, text = "E-CELL" }: FallbackSceneProps) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  
  const icons = [
    { icon: <Sparkles className="h-8 w-8" />, color: "text-primary" },
    { icon: <Rocket className="h-8 w-8" />, color: "text-secondary" },
    { icon: <Lightbulb className="h-8 w-8" />, color: "text-accent" },
    { icon: <Trophy className="h-8 w-8" />, color: "text-green-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className={`h-full w-full flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center">
        {showText && (
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text-hero mb-4">
              {text}
            </h2>
            <p className="text-muted-foreground">Entrepreneurship & Innovation</p>
          </div>
        )}
        
        {/* Animated icons */}
        <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`
                p-4 rounded-full bg-card/20 backdrop-blur-sm border border-white/10
                transform transition-all duration-500 hover:scale-110
                ${index === animationIndex ? 'animate-pulse-glow scale-110' : 'opacity-70'}
                ${item.color}
              `}
            >
              {item.icon}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground">
          Interactive experience optimized for your device
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};