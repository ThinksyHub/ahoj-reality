import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Clock, ArrowRight} from "lucide-react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface Blog {
    id: number;
    title: string;
    content: string;
    main_image: string;
    created_at: string;
}

// Utility function to strip HTML tags
const stripHtml = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

const Blog = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);


    useEffect(() => {
        fetchBlogs();
    }, []);

    const regularPosts = blogs;

    return (
        <div className="min-h-screen bg-background">
            <Header/>

            {/* Blog Content */}
            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
                            Najnovšie <span className="text-gradient-golden">články</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                            Sledujte naše najnovšie články a ostávajte v obraze o dianí na realitnom trhu
                        </p>
                    </div>

                    {/* Regular Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link to={`/blog/${post.id}`}>
                              <Card key={post.id}
                                    className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant group">
                                <div className="relative overflow-hidden">
                                  <img
                                      src={`/blog/${post.main_image}`} // adjust path to match your backend
                                      alt={post.title}
                                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                  />

                                </div>

                                <CardContent className="p-6">
                                  {/* Blog Title */}
                                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-golden transition-colors duration-300">
                                    {post.title}
                                  </h3>

                                  {/* Excerpt */}
                                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                                    {(() => {
                                      const text = stripHtml(post.content);
                                      return text.length > 150 ? text.slice(0, 150) + "..." : text;
                                    })()}
                                  </p>

                                  {/* Read Time */}
                                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center space-x-2">
                                      <Clock className="w-3 h-3 text-golden" />
                                      <span>{Math.max(1, Math.ceil(stripHtml(post.content).split(" ").length / 100))} min čítania</span>
                                    </div>
                                  </div>

                                  {/* Date & Read Button */}
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">
                                      {new Date(post.created_at).toLocaleDateString("sk-SK", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })}
                                    </span>
                                    <Link to={`/blog/${post.id}`}>
                                      <button className="inline-flex items-center text-golden hover:text-golden-luxury font-semibold group/btn transition-colors duration-300 text-sm">
                                        Čítať
                                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                      </button>
                                    </Link>
                                  </div>
                                </CardContent>



                              </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Blog;