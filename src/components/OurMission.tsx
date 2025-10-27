import { Target } from 'lucide-react';

export const OurMission = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-white/10 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-hero">
            Our Mission
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our mission is to create a culture where ideas turn into actions. We aim to turn curiosity into innovation and ambition into impact by guiding students through real-world learning, encouraging bold experiments, and building a community where future leaders grow and succeed.
          </p>
        </div>
      </div>
    </section>
  );
};


