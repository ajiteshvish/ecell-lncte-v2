import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Award, Briefcase } from 'lucide-react';
import { createImageProps } from '../utils/imageUtils';

export const ParticipantsSection = () => {
  // Placeholder participants data - you can replace with actual data
  const participants = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Founder & CEO",
      company: "TechVenture Solutions",
      year: "2019-2020",
      image: "/placeholder.svg",
      achievement: "Raised ₹2M in Series A",
      tags: ["Tech", "AI/ML", "SaaS"]
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Co-Founder",
      company: "EcoGreen Innovations",
      year: "2020-2021",
      image: "/placeholder.svg",
      achievement: "50k+ customers across India",
      tags: ["Sustainability", "B2C", "E-commerce"]
    },
    {
      id: 3,
      name: "Rohit Gupta",
      role: "Product Manager",
      company: "Google",
      year: "2018-2019",
      image: "/placeholder.svg",
      achievement: "Led product team of 50+",
      tags: ["Product", "BigTech", "Management"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Investment Analyst",
      company: "Sequoia Capital",
      year: "2021-2022",
      image: "/placeholder.svg",
      achievement: "Invested in 15+ startups",
      tags: ["VC", "Investment", "Fintech"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Founder",
      company: "HealthTech Plus",
      year: "2019-2020",
      image: "/placeholder.svg",
      achievement: "Impacted 1M+ lives",
      tags: ["HealthTech", "B2B", "Impact"]
    },
    {
      id: 6,
      name: "Ananya Joshi",
      role: "Lead Designer",
      company: "Figma",
      year: "2020-2021",
      image: "/placeholder.svg",
      achievement: "Design System architect",
      tags: ["Design", "UX", "Product"]
    }
  ];

  return (
    <section id="alumni" className="py-20 px-6 bg-muted/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our amazing alumni who have gone on to build successful startups, 
            lead major companies, and create meaningful impact across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {participants.map((participant, index) => (
            <Card 
              key={participant.id}
              className="card-float bg-card backdrop-blur-sm border border-white/10 overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  {...createImageProps(participant.image, participant.name, '/placeholder.svg')}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{participant.year}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{participant.name}</h3>
                <div className="flex items-center mb-3 text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="text-sm">{participant.role}</span>
                </div>
                <div className="flex items-center mb-3">
                  <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-semibold text-primary">{participant.company}</span>
                </div>
                
                <div className="flex items-center mb-4 text-green-400">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm">{participant.achievement}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {participant.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/20 text-primary border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Want to be featured here?</h3>
              <p className="text-muted-foreground mb-4">
                Join E-CELL LNCTE and start your entrepreneurial journey today!
              </p>
              <button className="btn-startup">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};