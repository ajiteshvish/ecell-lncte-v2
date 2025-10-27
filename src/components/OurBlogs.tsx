import { Card } from './ui/card';
import { Calendar, User, ArrowRight, Eye, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const OurBlogs = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "From Spark to Startup: How Great Ideas Are Born",
      author: "E-CELL Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "1.2k",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      excerpt: "Exploring how great ideas are born and transformed into successful startups. Discover the journey from spark to startup.",
      category: "Ideas",
      featured: true,
      link: "https://medium.com/@ecell_lncte/from-spark-to-startup-how-great-ideas-are-born-64b956d5896d"
    },
    {
      id: 2,
      title: "Building the Blueprint: Turning Ideas into Actionable Plans",
      author: "E-CELL Team",
      date: "March 10, 2024",
      readTime: "7 min read",
      views: "890",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      excerpt: "Learn how to turn your ideas into actionable plans with a clear blueprint for success. Strategic planning for entrepreneurs.",
      category: "Planning",
      featured: false,
      link: "https://medium.com/@ecell_lncte/building-the-blueprint-turning-ideas-into-actionable-plans-19b63186fe9e"
    },
    {
      id: 3,
      title: "Funding the Dream: Navigating Investors and Bootstrapping",
      author: "E-CELL Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      views: "2.1k",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      excerpt: "A comprehensive guide to funding your startup, from bootstrapping to investors. Navigate the funding landscape successfully.",
      category: "Finance",
      featured: true,
      link: "https://medium.com/@ecell_lncte/funding-the-dream-navigating-the-world-of-investors-and-bootstrapping-3be067f2cff6"
    },
    {
      id: 4,
      title: "Scaling Smart: Growing Without Losing Its Soul",
      author: "E-CELL Team",
      date: "February 28, 2024",
      readTime: "6 min read",
      views: "750",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      excerpt: "Learn how to scale your startup smartly while maintaining your core values and mission. Sustainable growth strategies.",
      category: "Growth",
      featured: false,
      link: "https://medium.com/@ecell_lncte/scaling-smart-growing-a-startup-without-losing-its-soul-b9bb1f5f23a8"
    },
    {
      id: 5,
      title: "Leaving a Legacy: Creating Impact Beyond Profit",
      author: "E-CELL Team",
      date: "February 20, 2024",
      readTime: "8 min read",
      views: "1.5k",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      excerpt: "How entrepreneurs are creating lasting impact beyond profit. Building legacy and meaningful businesses.",
      category: "Impact",
      featured: true,
      link: "https://medium.com/@ecell_lncte/leaving-a-legacy-creating-impact-beyond-profit-2b67c6fb102b"
    }
  ];

  return (
    <section className="responsive-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="responsive-container relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              OUR BLOGS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Insights, trends, and stories from the entrepreneurship world
          </p>
        </div>

        {/* Mobile-Optimized Horizontal Scrollable Layout */}
        <div className="scroll-container relative">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex overflow-x-auto scrollbar-hide horizontal-scroll responsive-gap pb-4 snap-x snap-mandatory"
          >
            {blogs.map((blog) => (
              <div key={blog.id} className="horizontal-card w-72 sm:w-80 md:w-96 flex-shrink-0">
                <Card 
                  className="group bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full cursor-pointer"
                  onClick={() => window.open(blog.link, '_blank', 'noopener,noreferrer')}
                >
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load blog image: ${blog.image}`);
                        (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Category and Featured Badges */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
                      <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {blog.category}
                      </span>
                      {blog.featured && (
                        <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full animate-pulse">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Blog Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section - Minimal */}
                  <div className="p-3">
                    {/* Author and Date - Compact */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-primary flex-shrink-0" />
                        <span className="truncate">{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-primary flex-shrink-0" />
                        <span className="truncate">{blog.date}</span>
                      </div>
                    </div>

                    {/* Excerpt - Single line */}
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Stats and Read More - Compact */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-primary flex-shrink-0" />
                          <span className="truncate">{blog.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1 text-primary flex-shrink-0" />
                          <span className="truncate">{blog.views}</span>
                        </div>
                      </div>
                      
                      <button 
                        className="btn-glass group/btn flex items-center space-x-1 px-2 py-1 text-xs font-semibold"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(blog.link, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile-friendly scroll indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {blogs.map((_, index) => (
              <div key={index} className="scroll-indicator w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/30 rounded-full"></div>
            ))}
          </div>
          
          {/* Mobile scroll hint */}
          <div className="text-center mt-3 sm:hidden">
            <p className="mobile-scroll-hint">← Swipe to explore more blogs →</p>
          </div>
        </div>
      </div>
    </section>
  );
};