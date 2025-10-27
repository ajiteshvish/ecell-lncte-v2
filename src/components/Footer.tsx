import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/104391726/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Blrjv8BZBROGDSxNG2bZbIA%3D%3D", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ecell_lncte?igsh=ODh2NWFhY2Z5aXNq", name: "Instagram" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "https://whatsapp.com/channel/0029VbAtadcL7UVQCGyyIn1a", name: "WhatsApp" }
  ];



  return (
    <footer className="glass-effect border-t border-border/50 py-8 sm:py-12 lg:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img 
                src="/lovable-uploads/d8014c2c-0d0b-4866-974f-ace3b84333d0.png" 
                alt="E-CELL LNCTE Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-shimmer">E-CELL LNCTE</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0 px-2 lg:px-0">
              Fueling Entrepreneuiral Excellence at Lakshmi Narain College of Technology Excellence. Building next generation of entrepreneurs.
            </p>
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 sm:p-3 rounded-xl glass-effect text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-foreground">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">E-mail:- ecell_lncte@lnct.ac.in</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Phone:- Sarvesh Kumar: +91 76439 21187</span>
              </div>
              <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-center lg:text-left">
                  Lakshmi Narain College of Technology Excellence, Raisen Road<br />
                  Bhopal, Madhya Pradesh - 462022
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-xs sm:text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} E-CELL LNCTE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
