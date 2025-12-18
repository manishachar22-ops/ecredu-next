const partners = [
  "Qatar Airways",
  "Air India",
  "SpiceJet",
  "IndiGo",
  "Vistara",
  "Singapore Airlines",
  "Emirates",
  "Taj Hotels",
  "Marriott",
  "ITC Hotels",
  "Oberoi Group",
  "Hyatt",
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Our Recruiters
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Trusted by Leading Companies
          </h3>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative">
        <div className="flex animate-ticker">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card rounded-xl border border-border shadow-sm"
            >
              <span className="text-foreground font-semibold whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
