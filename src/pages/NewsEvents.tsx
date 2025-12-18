import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Bell, Newspaper, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface NewsEvent {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string;
  event_date: string | null;
  created_at: string;
}

const categoryIcons: Record<string, any> = {
  news: Newspaper,
  event: CalendarDays,
  announcement: Bell,
};

const categoryColors: Record<string, string> = {
  news: "bg-blue-500/10 text-blue-600",
  event: "bg-amber-500/10 text-amber-600",
  announcement: "bg-rose-500/10 text-rose-600",
};

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news_events")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setNewsEvents(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const filteredNews = filter === "all" 
    ? newsEvents 
    : newsEvents.filter(item => item.category === filter);

  const upcomingEvents = newsEvents
    .filter(item => item.category === "event" && item.event_date)
    .sort((a, b) => new Date(a.event_date!).getTime() - new Date(b.event_date!).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-DEFAULT mb-4">
            News & <span className="text-gold">Events</span>
          </h1>
          <p className="text-cream-DEFAULT/70 text-lg max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and news from ECR Group of Institutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["all", "news", "event", "announcement"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full font-medium capitalize transition-all ${
                    filter === cat
                      ? "bg-gold text-navy"
                      : "bg-muted text-foreground hover:bg-gold/20"
                  }`}
                >
                  {cat === "all" ? "All Updates" : cat + "s"}
                </button>
              ))}
            </div>

            {/* News List */}
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : filteredNews.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border border-border">
                <Newspaper className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No updates found.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredNews.map((item) => {
                  const Icon = categoryIcons[item.category] || Newspaper;
                  const colorClass = categoryColors[item.category] || categoryColors.news;

                  return (
                    <article
                      key={item.id}
                      className="bg-card rounded-xl border border-border p-6 hover:shadow-elegant transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${colorClass}`}>
                              {item.category}
                            </span>
                            <span className="text-muted-foreground text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {format(new Date(item.created_at), "MMM d, yyyy")}
                            </span>
                            {item.event_date && (
                              <span className="text-gold text-sm flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(item.event_date), "MMM d, yyyy")}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                          <Button variant="ghost" className="p-0 h-auto font-semibold text-foreground group">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-gold" />
                Upcoming Events
              </h3>
              {upcomingEvents.length === 0 ? (
                <p className="text-muted-foreground text-sm">No upcoming events.</p>
              ) : (
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-gold text-xs font-medium">
                          {format(new Date(event.event_date!), "MMM")}
                        </span>
                        <span className="text-foreground font-bold">
                          {format(new Date(event.event_date!), "d")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{event.title}</h4>
                        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{event.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="bg-navy rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-cream-DEFAULT mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link to="/admission" className="block text-cream-DEFAULT/80 hover:text-gold transition-colors">
                  → Apply for Admission
                </Link>
                <Link to="/programs" className="block text-cream-DEFAULT/80 hover:text-gold transition-colors">
                  → View Programs
                </Link>
                <Link to="/gallery" className="block text-cream-DEFAULT/80 hover:text-gold transition-colors">
                  → Photo Gallery
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Have Questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Contact our admissions team for assistance.
              </p>
              <a href="tel:+918277755777">
                <Button variant="gold" size="sm" className="w-full">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsEvents;
