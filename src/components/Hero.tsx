import { Scene3D } from './3d/Scene3D';
import { Sparkles } from 'lucide-react';
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center particles-bg overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D className="opacity-10 sm:opacity-20 md:opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
            <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent mr-1.5 sm:mr-2 lg:mr-3 animate-pulse" />
            <span className="text-xs sm:text-sm lg:text-lg font-semibold text-accent">Entrepreneurship Cell</span>
            <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent ml-1.5 sm:ml-2 lg:ml-3 animate-pulse" />
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 lg:mb-6 gradient-text-hero animate-bounce-in animate-letter-glow leading-tight">
            <div className="block sm:inline">
              <span className="inline-block" style={{
              animationDelay: '0.1s'
            }}>E</span>
              <span className="inline-block" style={{
              animationDelay: '0.2s'
            }}>-C</span>
              <span className="inline-block" style={{
              animationDelay: '0.3s'
            }}>E</span>
              <span className="inline-block" style={{
              animationDelay: '0.4s'
            }}>L</span>
              <span className="inline-block" style={{
              animationDelay: '0.5s'
            }}>L</span>
            </div>
            <span className="hidden sm:inline-block mx-1 sm:mx-2 lg:mx-4"></span>
            <div className="block sm:inline mt-1 sm:mt-2 lg:mt-0">
              <span className="inline-block" style={{
              animationDelay: '0.6s'
            }}>L</span>
              <span className="inline-block" style={{
              animationDelay: '0.7s'
            }}>N</span>
              <span className="inline-block" style={{
              animationDelay: '0.8s'
            }}>C</span>
              <span className="inline-block" style={{
              animationDelay: '0.9s'
            }}>T</span>
              <span className="inline-block" style={{
              animationDelay: '1.0s'
            }}>E</span>
            </div>
          </h1>
          
          
          
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 text-foreground/90 max-w-2xl mx-auto px-2 leading-relaxed font-semibold">
            Fueling Entrepreneurial Excellence
          </p>
        </div>
        

      </div>
      
      {/* Floating elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
      </div>
      <div className="hidden sm:block absolute bottom-20 right-10 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="w-6 h-6 bg-accent rounded-full animate-pulse-glow"></div>
      </div>
      <div className="hidden sm:block absolute top-1/2 left-5 animate-float" style={{
      animationDelay: '4s'
    }}>
        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
      </div>
    </section>;
};