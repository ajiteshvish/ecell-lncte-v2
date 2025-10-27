import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "E-Summit '25",
      description: "India's most prestigious entrepreneurship summit featuring distinguished speakers, competitions, and networking opportunities.",
      date: "14-15 November 2025",
      location: "LNCTE Campus",
      participants: "5000+",
      icon: <Star className="h-6 w-6" />,
      type: "Summit",
      status: "Featured Event",
      isFeatured: true,
      redirectTo: "/e-summit"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured Event': return 'bg-gradient-to-r from-accent/30 to-primary/30 text-accent border-accent/50 animate-pulse';
      case 'Upcoming': return 'bg-primary/20 text-primary border-primary/30';
      case 'Registration Open': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Coming Soon': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Ongoing': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-secondary/20 text-secondary border-secondary/30';
    }
  };

  const handleEventClick = (event: { redirectTo?: string }) => {
    if (event.redirectTo) {
      navigate(event.redirectTo);
    }
  };

  return (
    <section id="events" className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
              Upcoming Events
            </h2>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            🚀 Join our <span className="text-primary font-semibold">exclusive events</span> designed to foster innovation, 
            build powerful networks, and accelerate your entrepreneurial journey to success!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {events.map((event, index) => (
              <Card key={event.id} className={`card-float ${event.isFeatured ? 'bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 border-accent/30' : 'bg-gradient-to-br from-card/60 via-card/40 to-card/60 border-white/20'} backdrop-blur-xl p-4 sm:p-6 group hover:scale-105 transition-all duration-500 hover:shadow-2xl ${event.isFeatured ? 'hover:shadow-accent/30' : 'hover:shadow-primary/20'} h-full cursor-pointer animate-popOut hover:animate-pulseGlow`}
                onClick={() => handleEventClick(event)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="relative">
                      <div className={`absolute inset-0 ${event.isFeatured ? 'bg-gradient-to-r from-accent to-primary' : 'bg-gradient-to-r from-primary to-secondary'} rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className={`relative p-2 sm:p-3 rounded-full ${event.isFeatured ? 'bg-gradient-to-r from-accent/30 to-primary/30 text-accent group-hover:from-accent group-hover:to-primary' : 'bg-gradient-to-r from-primary/30 to-secondary/30 text-primary group-hover:from-primary group-hover:to-secondary'} group-hover:text-white transition-all duration-300`}>
                        <div className="w-4 h-4 sm:w-6 sm:h-6">{event.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${event.isFeatured ? 'text-accent group-hover:text-accent' : 'text-foreground group-hover:text-primary'} transition-colors duration-300 line-clamp-2`}>
                        {event.title}
                      </h3>
                      <Badge variant="outline" className={`mt-1 sm:mt-2 text-xs sm:text-sm px-2 sm:px-3 py-1 ${event.isFeatured ? 'bg-accent/10 text-accent border-accent/30' : 'bg-primary/10 text-primary border-primary/30'}`}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(event.status)} text-xs sm:text-sm px-2 sm:px-3 py-1 font-semibold self-start sm:self-auto`}>
                    {event.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 sm:space-y-3 bg-gradient-to-r from-background/50 to-background/30 p-3 sm:p-4 rounded-lg border border-white/10 mb-4 sm:mb-6">
                  <div className="flex items-center text-sm sm:text-base text-foreground">
                    <Calendar className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 ${event.isFeatured ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                    <span className="font-medium truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-foreground">
                    <MapPin className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 ${event.isFeatured ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                    <span className="font-medium truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-foreground">
                    <Users className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 ${event.isFeatured ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                    <span className="font-medium truncate">{event.participants} Expected</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 sm:pt-4 border-t border-gradient-to-r from-primary/20 to-secondary/20">
                  {event.isFeatured ? (
                    <Button className="btn-hero w-full text-sm sm:text-base py-2.5 sm:py-3 font-bold group">
                      Explore E-Summit '25
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <button className="btn-3d w-full text-sm sm:text-base py-2.5 sm:py-3 font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300">
                      {event.status === 'Registration Open' ? '🎯 Register' : 
                       event.status === 'Ongoing' ? '📚 Learn More' : '🔔 Get Notified'}
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};