import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const stats = [
  { value: "95+", label: "Expert Faculty" },
  { value: "12+", label: "Degree Programs" },
  { value: "4,400+", label: "Students" },
  { value: "100%", label: "Placement Record" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="ECR Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">NAAC Accredited A-Grade University</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream-DEFAULT leading-tight mb-6 animate-slide-up">
            Shape Your Future at{" "}
            <span className="text-gold">ECR Aviation</span>{" "}
            Academy
          </h1>

          {/* Subheading */}
          <p className="text-cream-DEFAULT/80 text-lg md:text-xl max-w-2xl mb-8 animate-fade-in opacity-0 delay-200" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            India's premier institution offering job-oriented degree programs in Aviation, 
            Hospitality, Management, and Healthcare with 100% campus placement support.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Virtual Campus Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-cream-DEFAULT/10 animate-fade-in opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-cream-DEFAULT/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
