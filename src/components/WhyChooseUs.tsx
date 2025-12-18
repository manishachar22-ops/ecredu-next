import { Award, Users, Briefcase, Building, Clock, Trophy } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: Award,
    title: "100% Placement",
    description: "Guaranteed campus placement with top recruiters",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Industry professionals with decades of experience",
  },
  {
    icon: Briefcase,
    title: "Internship Program",
    description: "Real-world experience with leading companies",
  },
  {
    icon: Building,
    title: "40 Acre Campus",
    description: "State-of-the-art facilities and infrastructure",
  },
  {
    icon: Clock,
    title: "Part-time Jobs",
    description: "Earn while you learn with on-campus opportunities",
  },
  {
    icon: Trophy,
    title: "NAAC Accredited",
    description: "Recognized for academic excellence",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gold">
      {count}{suffix}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-cream-DEFAULT/10">
          <div className="text-center">
            <AnimatedCounter target={25} suffix="+" />
            <p className="text-cream-DEFAULT/70 mt-2">Years of Excellence</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={4400} suffix="+" />
            <p className="text-cream-DEFAULT/70 mt-2">Students Enrolled</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={95} suffix="+" />
            <p className="text-cream-DEFAULT/70 mt-2">Expert Faculty</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={100} suffix="%" />
            <p className="text-cream-DEFAULT/70 mt-2">Placement Rate</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Why ECR
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-DEFAULT mb-6">
            The <span className="text-gold">ECR Advantage</span>
          </h2>
          <p className="text-cream-DEFAULT/70 text-lg">
            We don't just educate, we transform students into industry-ready professionals
            with real-world skills and guaranteed career opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-cream-DEFAULT/5 backdrop-blur-sm border border-cream-DEFAULT/10 rounded-2xl p-8 hover:bg-cream-DEFAULT/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-cream-DEFAULT mb-2">
                {feature.title}
              </h3>
              <p className="text-cream-DEFAULT/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
