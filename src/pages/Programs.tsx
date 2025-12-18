import { Link } from "react-router-dom";
import { GraduationCap, Plane, Heart, Stethoscope, ArrowRight, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const programs = [
  {
    slug: "management-bba",
    icon: Plane,
    title: "BBA + Aviation & Hospitality",
    duration: "3 Years",
    fee: "₹85,000/year",
    description: "Business administration with aviation and hospitality specialization.",
    color: "from-amber-500/20 to-amber-600/20",
    accent: "text-amber-600",
  },
  {
    slug: "management-bca",
    icon: GraduationCap,
    title: "BCA + Data Science & AI",
    duration: "3 Years",
    fee: "₹75,000/year",
    description: "Computer applications with Data Science and AI specialization.",
    color: "from-blue-500/20 to-blue-600/20",
    accent: "text-blue-600",
  },
  {
    slug: "management-bcom",
    icon: GraduationCap,
    title: "B.Com + Finance & Banking",
    duration: "3 Years",
    fee: "₹65,000/year",
    description: "Commerce degree with finance and banking specialization.",
    color: "from-green-500/20 to-green-600/20",
    accent: "text-green-600",
  },
  {
    slug: "nursing-bsc",
    icon: Heart,
    title: "BSc Nursing",
    duration: "4 Years",
    fee: "₹1,20,000/year",
    description: "Comprehensive nursing program approved by Indian Nursing Council.",
    color: "from-rose-500/20 to-rose-600/20",
    accent: "text-rose-600",
  },
  {
    slug: "nursing-gnm",
    icon: Heart,
    title: "GNM Nursing",
    duration: "3.5 Years",
    fee: "₹80,000/year",
    description: "General Nursing & Midwifery diploma program.",
    color: "from-pink-500/20 to-pink-600/20",
    accent: "text-pink-600",
  },
  {
    slug: "paramedical",
    icon: Stethoscope,
    title: "Paramedical Sciences",
    duration: "2-3 Years",
    fee: "₹55,000/year",
    description: "Allied health programs in lab technology, radiology & more.",
    color: "from-emerald-500/20 to-emerald-600/20",
    accent: "text-emerald-600",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-DEFAULT mb-4">
            Our <span className="text-gold">Programs</span>
          </h1>
          <p className="text-cream-DEFAULT/70 text-lg max-w-2xl mx-auto">
            Industry-aligned degree programs designed for career success with 100% placement support.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.slug}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${program.color} p-6`}>
                  <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-4">
                    <program.icon className={`w-7 h-7 ${program.accent}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {program.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-gold" />
                      <span className="text-foreground">{program.fee}</span>
                    </div>
                  </div>

                  <Link to={`/programs/${program.slug}`}>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-foreground">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our counselors are here to help you choose the best program based on your interests and career goals.
          </p>
          <Link to="/admission">
            <Button variant="gold" size="lg">Request Career Counseling</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
