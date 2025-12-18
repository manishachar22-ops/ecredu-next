import { CheckCircle2 } from "lucide-react";

const highlights = [
  "ISO 9001:2008 Certified Institution",
  "Affiliated to Mangalore University",
  "NAAC Accredited A-Grade Recognition",
  "40+ Acre State-of-the-Art Campus",
  "100% Campus Placement Assistance",
  "Industry-Integrated Curriculum",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              About ECR
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Education{" "}
              <span className="text-gold">Since 1999</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              ECR Group of Institutions, under the ECR Trust, stands out with its innovative 
              approach to education. Spread across approximately 40 acres, our campus is 
              equipped with state-of-the-art facilities and offers a variety of degree courses 
              approved by AICTE, Indian Nursing Council, and leading universities.
            </p>
            <p className="text-muted-foreground mb-8">
              Unlike conventional degree courses, ECR goes a step further by emphasizing 
              job-oriented programs like Artificial Intelligence, Data Science, Digital Marketing, 
              and Cyber Security in collaboration with industry partners. Students earn through 
              part-time jobs on campus while transitioning from candidates to professionals.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gold mx-auto flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-navy text-3xl">25+</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream-DEFAULT mb-2">
                    Years of Excellence
                  </h3>
                  <p className="text-cream-DEFAULT/70">
                    Shaping Future Leaders
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
