import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ako správne oceniť svoju nehnuteľnosť pred predajom",
      excerpt: "Poznáte správnu hodnotu svojej nehnuteľnosti? Prinášame vám komplexný návod, ako určiť reálnu cenu bytu alebo domu pred uvedením na trh.",
      content: "Ocenenie nehnuteľnosti je kľúčovým krokom pred jej predajom. Správne stanovená cena môže urýchliť predaj a maximalizovať váš zisk...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      category: "Predaj",
      author: "Kristína Karaffová",
      date: "15. marec 2024",
      readTime: "5 min čítania",
      featured: true
    },
    {
      id: 2,
      title: "Top 5 trendov v realitných trhoch na rok 2024",
      excerpt: "Aké trendy ovplyvnia realitný trh v tomto roku? Pozrite si naše predpovede a pripravte sa na zmeny v oblasti nehnuteľností.",
      content: "Realitný trh sa neustále vyvíja a rok 2024 prináša nové výzvy aj príležitosti...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      category: "Trh",
      author: "Peter Novák",
      date: "8. marec 2024",
      readTime: "7 min čítania",
      featured: false
    },
    {
      id: 3,
      title: "Financovanie nehnuteľnosti: Hypotéka vs. hotovosť",
      excerpt: "Rozhodujete sa medzi hypotékou a platbou v hotovosti? Porovnáme výhody a nevýhody oboch možností financovania.",
      content: "Voľba spôsobu financovania je jedným z najdôležitejších rozhodnutí pri kúpe nehnuteľnosti...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      category: "Financovanie",
      author: "Jana Svobodová",
      date: "2. marec 2024",
      readTime: "6 min čítania",
      featured: false
    },
    {
      id: 4,
      title: "Právne nástrahy pri kúpe nehnuteľnosti",
      excerpt: "Na čo si dať pozor pri kúpe nehnuteľnosti z právneho hľadiska? Prehľad najčastejších problémov a ako sa im vyhnúť.",
      content: "Kúpa nehnuteľnosti je komplexný právny úkon, ktorý si vyžaduje pozornosť na detaily...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
      category: "Právo",
      author: "Michal Horák",
      date: "25. február 2024",
      readTime: "8 min čítania",
      featured: false
    },
    {
      id: 5,
      title: "Home staging: Ako pripraviť byt na predaj",
      excerpt: "Viete, že správne pripravený byt sa predá rýchlejšie a za vyššiu cenu? Prinášame tipy pre dokonalý home staging.",
      content: "Home staging je umenie prezentácie nehnuteľnosti tak, aby oslovila čo najviac potenciálnych kupujúcich...",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
      category: "Tipy",
      author: "Kristína Karaffová",
      date: "18. február 2024",
      readTime: "4 min čítania",
      featured: false
    },
    {
      id: 6,
      title: "Investície do nehnuteľností: Kam smerovať v roku 2024",
      excerpt: "Hľadáte výnosné investičné príležitosti? Pozrite si naše odporúčania pre investovanie do nehnuteľností.",
      content: "Investovanie do nehnuteľností zostává jednou z najstabilnejších foriem investovania...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      category: "Investície",
      author: "Peter Novák",
      date: "11. február 2024",
      readTime: "6 min čítania",
      featured: false
    }
  ];

  const categories = ["Všetko", "Predaj", "Trh", "Financovanie", "Právo", "Tipy", "Investície"];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Predaj": "bg-green-100 text-green-700 border-green-200",
      "Trh": "bg-blue-100 text-blue-700 border-blue-200",
      "Financovanie": "bg-purple-100 text-purple-700 border-purple-200",
      "Právo": "bg-red-100 text-red-700 border-red-200",
      "Tipy": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Investície": "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Blog Content */}
      <section className="pt-20 pb-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
              Najnovšie <span className="text-gradient-golden">články</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Sledujte naše najnovšie články a ostávajte v obraze o dianí na realitnom trhu
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-golden/10 hover:border-golden/30 transition-all duration-300"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <Card className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(featuredPost.category)} border`}>
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-golden/90 text-golden-foreground border-golden">
                        Odporúčané
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-golden" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-golden" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-golden" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center text-golden hover:text-golden-luxury font-semibold group transition-colors duration-300">
                      Čítať viac
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(post.category)} border`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-golden transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-golden" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 text-golden" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <button className="inline-flex items-center text-golden hover:text-golden-luxury font-semibold group/btn transition-colors duration-300 text-sm">
                      Čítať
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-golden to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Načítať viac článkov
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-golden/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-golden/10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Nezmeškajte žiadny článok
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Prihláste sa na odber našho newslettera a dostávajte najnovšie články priamo do emailu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-3 rounded-lg border border-golden/20 focus:outline-none focus:ring-2 focus:ring-golden/30 focus:border-golden/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-golden to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Prihlásiť sa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;