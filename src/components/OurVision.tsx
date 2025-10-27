import { Target, Lightbulb, Globe } from 'lucide-react';
export const OurVision = () => {
  return <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-white/10 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-hero">
            Our Vision
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            E-Cell dreams of a future where every student is a confident thinker, innovator, and leader. We work to turn ideas into actions and students into changemakers by encouraging entrepreneurship, teamwork, and learning to create a better future for business, technology, and society.
          </p>
        </div>
      </div>
    </section>;
};