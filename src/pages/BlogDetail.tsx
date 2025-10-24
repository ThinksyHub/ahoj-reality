import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Blog {
    id: number;
    title: string;
    content: string;
    main_image: string;
    created_at: string;
}

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(`/api/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!blog) return <p>Načítava sa...</p>;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-32">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <p className="text-xs text-muted-foreground mb-4">
                    {new Date(blog.created_at).toLocaleDateString("sk-SK", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
                <img src={`/blog/${blog.main_image}`} alt={blog.title} className="w-full mb-6" />
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetail;
