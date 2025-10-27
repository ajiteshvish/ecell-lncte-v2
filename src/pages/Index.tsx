import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
// import { OurMission } from '../components/OurMission';
import { OurInitiatives } from '../components/OurInitiatives';
import { RecentEvents } from '../components/RecentEvents';
import { Events } from '../components/Events';
import { PastEvents } from '../components/PastEvents';
import { OurBlogs } from '../components/OurBlogs';
import { Footer } from '../components/Footer';
import { ESummitBanner } from '../components/ESummitBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-14 sm:pt-16 lg:pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        {/** ESummit '25 Banner */}
        <ESummitBanner />
        <section id="initiatives">
          <OurInitiatives />
        </section>
        <RecentEvents />
        <section id="events">
          <Events />
        </section>
        <PastEvents />
        <section id="blogs">
          <OurBlogs />
        </section>
        <section id="stay-updated" className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-6">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text-hero">
                    Stay Updated
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
                    Subscribe to our newsletter to get notified about upcoming events, 
                    workshops, and exciting opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    />
                    <button className="btn-3d whitespace-nowrap text-sm sm:text-base py-2.5 sm:py-3">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
