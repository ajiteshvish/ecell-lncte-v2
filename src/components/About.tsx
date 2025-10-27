export const About = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative heading-gradient">
              E-CELL LNCTE
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            An E-Cell (Entrepreneurship Cell) is a student-run organization that promotes innovation, creativity, and entrepreneurship among students. It acts as a platform to nurture ideas, provide guidance, and build an entrepreneurial mindset through events, workshops, competitions, and networking opportunities. The goal of an E-Cell is to inspire students to become job creators rather than job seekers by supporting startups, leadership, and skill development.
          </p>
        </div>

        <div className="card-glass p-8 md:p-12 text-center">
          <h3 className="subheading-gradient mb-6">
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