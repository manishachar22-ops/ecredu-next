import { GraduationCap, Plane, Heart, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Management Studies",
    subtitle: "BBA • BCA • B.Com",
    description: "Comprehensive business education with specializations in AI, Cyber Security, Digital Marketing & more.",
    courses: ["BBA + Aviation Management", "BCA + Data Science", "B.Com + Finance"],
    color: "from-blue-500/20 to-blue-600/20",
    accent: "text-blue-600",
  },
  {
    icon: Plane,
    title: "Aviation & Hospitality",
    subtitle: "Add-on Certification",
    description: "International standard training for careers in airlines, airports, and luxury hospitality.",
    courses: ["Airport Management", "Cabin Crew Training", "Ground Staff Operations"],
    color: "from-amber-500/20 to-amber-600/20",
    accent: "text-amber-600",
  },
  {
    icon: Heart,
    title: "Nursing Programs",
    subtitle: "BSc • GNM",
    description: "State-of-the-art nursing education approved by Indian Nursing Council.",
    courses: ["BSc Nursing", "GNM Nursing", "Post Basic BSc"],
    color: "from-rose-500/20 to-rose-600/20",
    accent: "text-rose-600",
  },
  {
    icon: Stethoscope,
    title: "Paramedical Sciences",
    subtitle: "Allied Health Programs",
    description: "Practical healthcare training with hospital internship opportunities.",
    courses: ["Medical Lab Technology", "Radiology", "Operation Theatre Tech"],
    color: "from-emerald-500/20 to-emerald-600/20",
    accent: "text-emerald-600",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Academic Excellence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Programs Designed for Your{" "}
            <span className="text-gold">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our diverse range of industry-aligned programs that combine 
            academic rigor with practical skills for guaranteed career success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${program.color} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:opacity-70 transition-opacity`} />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                <program.icon className={`w-8 h-8 ${program.accent}`} />
              </div>

              {/* Content */}
              <div className="relative">
                <span className={`text-sm font-medium ${program.accent}`}>{program.subtitle}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                {/* Courses List */}
                <ul className="space-y-2 mb-6">
                  {program.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gold`} />
                      {course}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-foreground">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            Download Complete Syllabus
          </Button>
        </div>
      </div>
    </section>
  );
}
