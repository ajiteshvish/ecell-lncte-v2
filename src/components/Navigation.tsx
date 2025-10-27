import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blogs', href: '#blogs' },
    { name: "E-Summit '25", href: '/e-summit' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const external = href.startsWith('http');
    if (external) {
      // Open external link in same tab
      window.location.href = href;
    } else if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="responsive-container">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <img 
              src="/main_site_logo.png" 
              alt="E-CELL LNCTE Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 object-contain"
            />
            <span className="text-sm sm:text-lg lg:text-2xl font-bold text-shimmer">E-CELL LNCTE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-1"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border/50 mt-2 sm:mt-4 glass-effect rounded-b-2xl mx-2 sm:mx-0">
            <div className="flex flex-col space-y-1 sm:space-y-2 pt-3 sm:pt-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl hover:bg-primary/10 active:bg-primary/20 w-full hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};