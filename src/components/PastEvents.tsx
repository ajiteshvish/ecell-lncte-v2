import { Card } from './ui/card';
import { Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const PastEvents = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isScrollingRef = useRef(false);

  const pastEvents = [
    {
      id: 1,
      title: "Women",
      date: "March 2023",
      participants: "500+",
      image: "/past_events_img/FullSizeRender (2) (1).jpeg",
      description: "Our flagship annual event featuring keynote speakers, panel discussions, startup exhibitions, and networking sessions. Industry leaders shared insights on emerging trends and future opportunities."
    },
    {
      id: 2,
      title: "Tech Innovation",
      date: "September 2023",
      participants: "250+",
      image: "/past_events_img/IMG_0473 (1).jpeg",
      description: "A 48-hour hackathon focused on developing technological solutions for social impact. Teams worked on projects addressing healthcare, education, and sustainability challenges."
    },
    {
      id: 3,
      title: "Engendea",
      date: "August 2023",
      participants: "300+",
      image: "/past_events_img/IMG_0518 (2) (1).jpeg",
      description: "Empowering women entrepreneurs through mentorship sessions, success stories, and networking opportunities. Featured successful women business leaders sharing their entrepreneurial journeys."
    },
    {
      id: 4,
      title: "Industry Connect 2024",
      date: "June 2023",
      participants: "180+",
      image: "/past_events_img/IMG_20241019_102854851.jpg",
      description: "Intensive 3-day bootcamp covering all aspects of startup development from ideation to scaling. Participants received hands-on training and direct feedback from industry experts."
    },
    {
      id: 5,
      title: "Industry Connect 2023",
      date: "April 2023",
      participants: "400+",
      image: "/past_events_img/IMG_20241019_113341 (1).jpg",
      description: "Bridge building event connecting students with industry professionals, creating opportunities for internships, collaborations, and career guidance in the entrepreneurship ecosystem."
    },
    {
      id: 6,
      title: "Bootcamp",
      date: "November 2023",
      participants: "150+",
      image: "/past_events_img/IMG_20250723_140419.jpg",
      description: "Hands-on workshop focusing on innovative thinking and problem-solving methodologies. Participants learned cutting-edge techniques for developing breakthrough solutions."
    },
    {
      id: 7,
      title: "Workshop",
      date: "December 2023",
      participants: "350+",
      image: "/past_events_img/IMG_20250723_140515.jpg",
      description: "Exploring the future of digital transformation in business. Industry experts discussed AI, automation, and digital strategies reshaping the entrepreneurial landscape."
    },
    {
      id: 8,
      title: "Camp",
      date: "January 2024",
      participants: "200+",
      image: "/past_events_img/IMG-20251026-WA0072 (1).jpg",
      description: "Conference dedicated to nurturing the next generation of business leaders. Focused on leadership development, strategic thinking, and building sustainable enterprises."
    }
  ];

  // Create circular scroll by duplicating events at start and end
  const circularEvents = [...pastEvents, ...pastEvents, ...pastEvents];

  const checkScrollButtons = () => {
    // Always enable both scroll buttons for infinite scroll
    setCanScrollLeft(true);
    setCanScrollRight(true);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrollingRef.current) return;
    
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth } = container;
    const itemWidth = 320;
    const gap = 16;
    const totalItemWidth = itemWidth + gap;
    const sectionWidth = totalItemWidth * pastEvents.length;
    
    // Circular linked list behavior: seamless loop without visible jumps
    // Structure: [copy1] [original] [copy2]
    
    // When reaching the end of copy2, seamlessly continue to copy1
    if (scrollLeft >= sectionWidth * 2.8) {
      isScrollingRef.current = true;
      const offset = scrollLeft - sectionWidth * 2;
      container.scrollLeft = offset;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 16);
    }
    // When reaching the beginning of copy1, seamlessly continue to copy2
    else if (scrollLeft <= sectionWidth * 0.2) {
      isScrollingRef.current = true;
      const offset = scrollLeft + sectionWidth * 2;
      container.scrollLeft = offset;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 16);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(320, scrollContainerRef.current.clientWidth * 0.8);
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(320, scrollContainerRef.current.clientWidth * 0.8);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize scroll position to the middle section (original content)
    if (scrollContainerRef.current) {
      // Add a small delay to ensure layout is complete
      setTimeout(() => {
        const itemWidth = 320;
        const gap = 16;
        const totalItemWidth = itemWidth + gap;
        const sectionWidth = totalItemWidth * pastEvents.length;
        // Start in the middle section (original items) for seamless scroll in both directions
        isScrollingRef.current = true;
        scrollContainerRef.current!.scrollLeft = sectionWidth;
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }, 100);
    }
    
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="responsive-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="responsive-container relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              PAST EVENTS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Celebrating our successful events and the impact we've created in the entrepreneurship community
          </p>
        </div>

        {/* Enhanced Horizontal Scrollable Layout */}
        <div className="scroll-container relative group">
          {/* Enhanced Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-white/95 to-white/90 hover:from-white hover:to-white border border-gray-200/50 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-100 hover:scale-110 hover:border-primary/30 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 hover:text-primary transition-colors duration-200" />
          </button>

          {/* Enhanced Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-white/95 to-white/90 hover:from-white hover:to-white border border-gray-200/50 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-100 hover:scale-110 hover:border-primary/30 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 hover:text-primary transition-colors duration-200" />
          </button>

          {/* Gradient Overlays for Better Visual Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide horizontal-scroll responsive-gap pb-4 snap-x snap-mandatory"
          >
            {circularEvents.map((event, index) => (
              <div key={`${event.id}-${index}`} className="horizontal-card w-72 sm:w-80 md:w-96 flex-shrink-0 snap-start group/card">
                <Card className="group bg-card/95 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] h-full flex flex-col hover:border-primary/30 hover:bg-card/100">
                  {/* Enhanced Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        console.error(`Failed to load event image: ${event.image}`);
                        (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                    
                    {/* Enhanced Top badges overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 bg-black/70 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/10 group-hover:bg-black/80 transition-all duration-300">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-black/70 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/10 group-hover:bg-black/80 transition-all duration-300">
                        <Users className="h-3.5 w-3.5" />
                        {event.participants}
                      </span>
                    </div>

                    {/* Enhanced Event Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-white/95 transition-colors duration-300 drop-shadow-lg">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Enhanced scroll indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {pastEvents.map((_, index) => (
              <div key={index} className="scroll-indicator w-2 h-2 sm:w-3 sm:h-3 bg-primary/20 hover:bg-primary/40 rounded-full transition-all duration-300 cursor-pointer hover:scale-125"></div>
            ))}
          </div>
          
          {/* Enhanced mobile scroll hint */}
          <div className="text-center mt-4 sm:hidden">
            <p className="mobile-scroll-hint text-sm text-muted-foreground/80 bg-muted/30 backdrop-blur-sm px-4 py-2 rounded-full inline-block border border-border/20">
              ← Swipe to explore more events →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};