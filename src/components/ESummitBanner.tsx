import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export const ESummitBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30 bg-primary"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30 bg-secondary"></div>

          {/* Background banner image for small screens */}
          <div className="absolute inset-0 opacity-25 sm:opacity-30 lg:opacity-0 pointer-events-none">
            <img
              src="/e-summit_banner.png"
              alt="E-Summit '25 Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contrast overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/20 lg:from-transparent lg:via-transparent lg:to-transparent"></div>

          {/* Content layout */}
          <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-5">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold">E-Summit '25</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text-hero mb-3">
                  Be Part of E‑Summit '25
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-8">
                  Network with leaders, compete in flagship events, and ignite your entrepreneurial journey.
                </p>

                <Button
                  className="btn-hero text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-[0_20px_60px_hsl(262_83%_58%_/_0.45)] hover:shadow-[0_28px_90px_hsl(262_83%_58%_/_0.6)] group"
                  onClick={() => navigate('/e-summit')}
                >
                  <span className="pr-2">✨ Get Your Fest Pass</span>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
                </Button>
              </div>

              {/* Image on large screens for perfect fit */}
              <div className="hidden lg:flex w-full h-full items-center justify-center p-6">
                <img
                  src="/e-summit_banner.png"
                  alt="E-Summit '25"
                  className="max-h-80 w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


