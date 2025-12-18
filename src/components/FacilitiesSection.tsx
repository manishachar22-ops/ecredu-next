import { BookOpen, Wifi, Dumbbell, Home, Bus, Shield } from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Digital Library",
    description: "Extensive collection of books, journals, and e-resources",
  },
  {
    icon: Wifi,
    title: "Smart Classrooms",
    description: "Wi-Fi enabled campus with modern teaching aids",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities with professional coaching",
  },
  {
    icon: Home,
    title: "Hostels",
    description: "Separate hostels for boys and girls with modern amenities",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Fleet of buses covering major routes in the region",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV surveillance and round-the-clock security personnel",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Campus Life
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            World-Class <span className="text-gold">Facilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our 40-acre campus is equipped with state-of-the-art infrastructure
            designed to provide the best learning environment.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-elegant transition-all duration-300 hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <facility.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-muted-foreground">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
