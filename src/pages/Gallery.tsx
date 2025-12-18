import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import gallery images
import heroCampus from "@/assets/hero-campus.jpg";
import computerLab from "@/assets/gallery/computer-lab.jpg";
import library from "@/assets/gallery/library.jpg";
import sports from "@/assets/gallery/sports.jpg";
import hostel from "@/assets/gallery/hostel.jpg";
import graduation from "@/assets/gallery/graduation.jpg";
import nursingLab from "@/assets/gallery/nursing-lab.jpg";

const galleryImages = [
  { src: heroCampus, title: "Campus Overview", category: "campus" },
  { src: computerLab, title: "Computer Lab", category: "facilities" },
  { src: library, title: "Central Library", category: "facilities" },
  { src: sports, title: "Sports Complex", category: "campus" },
  { src: hostel, title: "Student Hostels", category: "campus" },
  { src: graduation, title: "Graduation Ceremony", category: "events" },
  { src: nursingLab, title: "Nursing Simulation Lab", category: "facilities" },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "campus", label: "Campus" },
  { id: "facilities", label: "Facilities" },
  { id: "events", label: "Events" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-DEFAULT mb-4">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-cream-DEFAULT/70 text-lg max-w-2xl mx-auto">
            Explore our campus, facilities, and memorable moments through our photo gallery.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-gold text-navy"
                  : "bg-muted text-foreground hover:bg-gold/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-cream-DEFAULT font-display font-semibold text-lg">
                      {image.title}
                    </h3>
                    <span className="text-gold text-sm capitalize">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-cream-DEFAULT hover:text-gold transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 text-cream-DEFAULT hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 md:right-8 text-cream-DEFAULT hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-cream-DEFAULT font-display font-semibold text-xl">
                  {filteredImages[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
