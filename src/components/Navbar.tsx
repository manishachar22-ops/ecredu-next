import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  {
    label: "Programs",
    href: "#programs",
    submenu: [
      { label: "Management (BBA/BCA/B.Com)", href: "#programs" },
      { label: "Aviation & Hospitality", href: "#programs" },
      { label: "Paramedical", href: "#programs" },
      { label: "Nursing", href: "#programs" },
    ],
  },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-cream-DEFAULT/80 text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="font-medium">ISO 9001:2008 Certified • Affiliated to Mangalore University</p>
          <div className="flex items-center gap-6">
            <a href="tel:+918277755777" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +91 82777 55777
            </a>
            <a href="mailto:admission@ecredu.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              admission@ecredu.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-elegant py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-navy text-xl">ECR</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-display font-bold text-lg leading-tight ${isScrolled ? "text-foreground" : "text-foreground"}`}>
                  ECR Group
                </h1>
                <p className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-muted-foreground"}`}>
                  of Institutions
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                      isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Submenu */}
                  {link.submenu && openSubmenu === link.label && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-card rounded-xl shadow-elegant border border-border p-2 min-w-[220px]">
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.label}
                            href={sublink.href}
                            className="block px-4 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="navCta" size="lg">
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-elegant animate-fade-in">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-foreground font-medium border-b border-border last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" className="w-full mt-4">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
