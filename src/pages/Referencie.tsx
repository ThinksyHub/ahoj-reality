import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  source: string;
  text: string;
  rating: number;
}

const Referencie = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/review"); // endpoint to fetch reviews
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
                Recenzie od <span className="text-gradient-golden">klientov</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Prečítajte si skúsenosti našich klientov, ktorí nám dôverovali pri kúpe či predaji nehnuteľnosti
              </p>
            </div>

            {loading ? (
                <p className="text-center text-muted-foreground">Načítavam recenzie...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial) => (
                      <Card key={testimonial.id} className="relative overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                        <CardContent className="p-6">
                          <div className="absolute top-4 right-4 text-golden/20">
                            <Quote className="w-8 h-8" />
                          </div>

                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                            ))}
                          </div>

                          <p className="text-muted-foreground leading-relaxed font-light mb-6 text-sm">
                            "{testimonial.text}"
                          </p>

                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-golden/10 text-golden font-medium text-sm">
                                {getInitials(testimonial.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-heading text-sm font-semibold text-primary">{testimonial.name}</h4>
                              <p className="text-xs text-golden-luxury font-light">{testimonial.source}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
            )}

            <div className="text-center mt-16">
              <div className="bg-gradient-to-br from-golden/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-golden/10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Staňte sa naším ďalším spokojným klientom
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Pripojte sa k stovkám spokojných klientov, ktorí si vybrali našu realitku pre profesionálny a ľudský prístup.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-golden to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Referencie;