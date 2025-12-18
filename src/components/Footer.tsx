import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  { label: "BBA + Aviation", href: "#programs" },
  { label: "BCA + Data Science", href: "#programs" },
  { label: "B.Com + Finance", href: "#programs" },
  { label: "BSc Nursing", href: "#programs" },
  { label: "Paramedical", href: "#programs" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-cream-DEFAULT">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-navy text-xl">ECR</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">ECR Group</h3>
                <p className="text-cream-DEFAULT/60 text-sm">of Institutions</p>
              </div>
            </div>
            <p className="text-cream-DEFAULT/70 mb-6">
              Reformation through education and charity. Shaping future leaders
              since 1999 with innovative, job-oriented education.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-cream-DEFAULT/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-DEFAULT/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-DEFAULT/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-cream-DEFAULT/70">
              <p>
                ECR Group of Institutions<br />
                Udupi, Karnataka<br />
                India - 576101
              </p>
              <p>
                <a href="tel:+918277755777" className="hover:text-gold transition-colors">
                  +91 82777 55777
                </a>
              </p>
              <p>
                <a href="mailto:admission@ecredu.com" className="hover:text-gold transition-colors">
                  admission@ecredu.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-DEFAULT/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-DEFAULT/60 text-sm text-center md:text-left">
            © 2024 ECR Group of Institutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
