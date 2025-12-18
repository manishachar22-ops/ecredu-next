import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA Content */}
          <div>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Start Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-DEFAULT mb-6">
              Ready to Shape Your{" "}
              <span className="text-gold">Future?</span>
            </h2>
            <p className="text-cream-DEFAULT/70 text-lg mb-8 max-w-lg">
              Join thousands of successful alumni who started their journey at ECR.
              Admissions are now open for the 2024-25 academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Request Callback
              </Button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-cream-DEFAULT/5 backdrop-blur-sm border border-cream-DEFAULT/10 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-cream-DEFAULT mb-6">
              Contact Us
            </h3>
            <div className="space-y-6">
              <a
                href="tel:+918277755777"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream-DEFAULT/60 text-sm">Call Us</p>
                  <p className="text-cream-DEFAULT font-semibold text-lg">
                    +91 82777 55777
                  </p>
                </div>
              </a>

              <a
                href="mailto:admission@ecredu.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream-DEFAULT/60 text-sm">Email Us</p>
                  <p className="text-cream-DEFAULT font-semibold text-lg">
                    admission@ecredu.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream-DEFAULT/60 text-sm">Visit Us</p>
                  <p className="text-cream-DEFAULT font-semibold">
                    ECR Group of Institutions
                  </p>
                  <p className="text-cream-DEFAULT/70 text-sm">
                    Udupi, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
