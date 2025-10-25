import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Trash2, Edit, Plus, Save, X} from "lucide-react";
import {Property, City, PropertyType} from "@/pages/Properties.tsx";
import {Link} from "react-router-dom";
import {getYoutubeEmbedUrl} from "@/lib/getYoutubeEmbedUrl.ts";
import {Badge} from "@/components/ui/badge.tsx";
import AdminReviews from "@/pages/AdminReviews.tsx";

export interface Blog {
    id: number;
    title: string;
    content: string;
    main_image: string;
}

const Admin = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [types, setTypes] = useState<PropertyType[]>([]);
    const [loading, setLoading] = useState(false);
    const [editingProperty, setEditingProperty] = useState<Property | null>(null);
    const [sliderImages, setSliderImages] = useState<string[]>([]);


    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

    const [blogForm, setBlogForm] = useState<Partial<Blog>>({
        title: "",
        content: "",
        main_image: "",
    });

    const [formData, setFormData] = useState<Partial<Property>>({
        property_name: "",
        property_purpose: "Sale",
        property_type: "",
        description: "",
        sale_price: "",
        rent_price: "",
        address: "",
        city_id: null,
        area: null,
        bedrooms: null,
        bathrooms: null,
        featured_property: 0,
        featured_image: "",
        property_images: [],
        youtube_url: "",
        status: 1,
    });

    const fetchProperties = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/properties/");
            const data = await res.json();
            setProperties(data);
        } catch (err) {
            console.error("Error fetching properties:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchCities = async () => {
        try {
            const res = await fetch("/api/cities/");
            const data = await res.json();
            setCities(data);
        } catch (err) {
            console.error("Error fetching cities:", err);
        }
    };

    const fetchPropertyTypes = async () => {
        try {
            const res = await fetch("/api/property_types/");
            const data = await res.json();
            setTypes(data);
        } catch (err) {
            console.error("Error fetching property types:", err);
        }
    };

    useEffect(() => {
        fetchProperties();
        fetchCities();
        fetchPropertyTypes();
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchSliderImages = async () => {
            try {
                const res = await fetch("/api/upload/slider");
                const data = await res.json();
                setSliderImages(data);
            } catch (err) {
                console.error("Error fetching slider images:", err);
            }
        };
        fetchSliderImages();
    }, []);

    // === CREATE / UPDATE ===
    const handleSaveProperty = async () => {
        if (!formData.property_name) return alert("Zadajte názov nehnuteľnosti.");

        const isEditing = !!editingProperty;
        const url = isEditing
            ? `/api/properties/${editingProperty.id}`
            : "/api/properties/";
        const method = isEditing ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to save property");
            await fetchProperties();
            resetForm();
        } catch (err) {
            console.error(err);
            alert("Nepodarilo sa uložiť nehnuteľnosť.");
        }
        resetForm()
    };

    // === DELETE ===
    const handleDeleteProperty = async (id: number) => {
        if (!confirm("Naozaj chcete vymazať túto nehnuteľnosť?")) return;
        try {
            const res = await fetch(`/api/properties/${id}`, {method: "DELETE"});
            if (!res.ok) throw new Error("Delete failed");
            await fetchProperties();
        } catch (err) {
            console.error(err);
            alert("Nepodarilo sa odstrániť nehnuteľnosť.");
        }
        resetForm()
    };

    // === EDIT ===
    const handleEditProperty = (property: Property) => {
        setEditingProperty(property);
        setFormData(property);
    };

    const resetForm = () => {
        setEditingProperty(null);
        setFormData({
            property_name: "",
            property_purpose: "Sale",
            property_type: "",
            description: "",
            sale_price: "",
            rent_price: "",
            address: "",
            city_id: null,
            area: null,
            bedrooms: null,
            bathrooms: null,
            featured_property: 0,
            featured_image: "",
            property_images: [],
            youtube_url: "",
            status: 1,
        });
    };

    const fetchBlogs = async () => {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
    };

    const handleSaveBlog = async () => {
        if (!blogForm.title) return alert("Zadajte názov blogu.");
        const isEditing = !!editingBlog;
        const url = isEditing ? `/api/blogs/${editingBlog?.id}` : "/api/blogs";
        const method = isEditing ? "PUT" : "POST";
        const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(blogForm) });
        if (!res.ok) return alert("Nepodarilo sa uložiť blog.");
        await fetchBlogs();
        resetBlogForm();
    };

    const handleEditBlog = (b: Blog) => {
        setEditingBlog(b);
        setBlogForm(b);
    };

    const handleDeleteBlog = async (id: number) => {
        if (!confirm("Naozaj chcete vymazať blog?")) return;
        const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
        if (res.ok) fetchBlogs();
        resetBlogForm();
    };

    const resetBlogForm = () => {
        setEditingBlog(null);
        setBlogForm({ title: "", content: "", main_image: "" });
    };

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
                    <p className="text-muted-foreground">Správa nehnuteľností a obsahu</p>
                </header>
                <Link to="/">
                    <Button className="btn-black mb-4">
                        Späť na hlavnú stránku
                    </Button>
                </Link>

                <Tabs defaultValue="posts" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="posts">Nehnuteľnosti</TabsTrigger>
                        <TabsTrigger value="slider">Slider</TabsTrigger>
                        <TabsTrigger value="blog">Blog</TabsTrigger>
                        <TabsTrigger value="recenzie">Recenzie</TabsTrigger>
                    </TabsList>

                    {/* === CRUD TAB === */}
                    <TabsContent value="posts" className="space-y-6">
                        {/* --- Add / Edit Form --- */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {editingProperty ? <Edit className="h-5 w-5"/> : <Plus className="h-5 w-5"/>}
                                    {editingProperty ? "Upraviť nehnuteľnosť" : "Pridať novú nehnuteľnosť"}
                                </CardTitle>
                                <CardDescription>
                                    {editingProperty
                                        ? "Upravte detaily existujúcej nehnuteľnosti"
                                        : "Vytvorte nový záznam nehnuteľnosti"}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        placeholder="Názov nehnuteľnosti"
                                        value={formData.property_name || ""}
                                        onChange={(e) => setFormData({...formData, property_name: e.target.value})}
                                    />
                                    <Select
                                        value={formData.property_purpose}
                                        onValueChange={(v) => setFormData({...formData, property_purpose: v})}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Účel nehnuteľnosti"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Sale">Predaj</SelectItem>
                                            <SelectItem value="Rent">Prenájom</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Select
                                        value={formData.property_type?.toString() || ""}
                                        onValueChange={(v) => setFormData({...formData, property_type: v})}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Typ nehnuteľnosti"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {types.map((t) => (
                                                <SelectItem key={t.id} value={t.id.toString()}>
                                                    {t.types}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select
                                        value={formData.city_id?.toString() || ""}
                                        onValueChange={(v) => setFormData({...formData, city_id: parseInt(v)})}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Mesto"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cities.map((c) => (
                                                <SelectItem key={c.id} value={c.id.toString()}>
                                                    {c.city_name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Input
                                        placeholder="Cena predaja (€)"
                                        value={formData.sale_price || ""}
                                        onChange={(e) => {
                                            const sanitized = e.target.value.replace(/\D/g, ""); // remove everything except digits
                                            setFormData({ ...formData, sale_price: sanitized });
                                        }}
                                    />

                                    <Input
                                        placeholder="Cena prenájmu (€)"
                                        value={formData.rent_price || ""}
                                        onChange={(e) => {
                                            const sanitized = e.target.value.replace(/\D/g, "");
                                            setFormData({ ...formData, rent_price: sanitized });
                                        }}
                                    />

                                    <Input
                                        placeholder="Rozloha (m²)"
                                        type="number"
                                        value={formData.area || ""}
                                        onChange={(e) => setFormData({...formData, area: parseInt(e.target.value)})}
                                    />
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <Input
                                        placeholder="Počet izieb"
                                        type="number"
                                        value={formData.bedrooms || ""}
                                        onChange={(e) => setFormData({...formData, bedrooms: parseInt(e.target.value)})}
                                    />
                                    <Input
                                        placeholder="Počet balkónov"
                                        type="number"
                                        value={formData.bathrooms || ""}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            bathrooms: parseInt(e.target.value)
                                        })}
                                    />
                                </div>

                                <Input
                                    placeholder="Adresa"
                                    value={formData.address || ""}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                />

                                <div>
                                    <label className="block mb-1 font-medium">Popis nehnuteľnosti</label>
                                    <ReactQuill
                                        key={editingProperty?.id || "new"}
                                        theme="snow"
                                        value={formData.description || ""}
                                        onChange={(value) =>
                                            setFormData((prev) => ({ ...prev, description: value }))
                                        }
                                    />
                                </div>


                                <div>
                                    <label className="block mb-1 font-medium">Hlavný obrázok</label>

                                    <div className="flex gap-2">
                                        {formData.featured_image ? (
                                            <div className="relative group">
                                                <img
                                                    src={`/properties/${formData.featured_image}`}
                                                    alt="Featured"
                                                    className="h-24 w-24 object-cover rounded cursor-pointer"
                                                />

                                                {/* 🟥 Delete image button */}
                                                <button
                                                    type="button"
                                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                                    onClick={async () => {
                                                        const filename = formData.featured_image;
                                                        try {
                                                            const res = await fetch(`/api/upload/${filename}`, {
                                                                method: "DELETE",
                                                            });

                                                            if (res.ok) {
                                                                setFormData({...formData, featured_image: ""});
                                                            } else {
                                                                const result = await res.json();
                                                                console.error("Delete failed:", result);
                                                                alert("Nepodarilo sa vymazať obrázok.");
                                                            }
                                                        } catch (err) {
                                                            console.error("Error deleting image:", err);
                                                            alert("Chyba pri mazaní obrázka.");
                                                        }
                                                    }}
                                                >
                                                    <X className="h-3 w-3"/>
                                                </button>
                                            </div>
                                        ) : (
                                            // 🟩 Upload button
                                            <label
                                                className="h-24 w-24 flex items-center justify-center border border-dashed rounded cursor-pointer">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={async (e) => {
                                                        if (e.target.files?.[0]) {
                                                            const file = e.target.files[0];
                                                            const formDataUpload = new FormData();
                                                            formDataUpload.append("file", file);

                                                            try {
                                                                const res = await fetch("/api/upload", {
                                                                    method: "POST",
                                                                    body: formDataUpload,
                                                                });

                                                                const data = await res.json();
                                                                if (res.ok) {
                                                                    setFormData({
                                                                        ...formData,
                                                                        featured_image: data.filename,
                                                                    });
                                                                } else {
                                                                    console.error("Upload failed:", data);
                                                                    alert("Nepodarilo sa nahrať obrázok.");
                                                                }
                                                            } catch (err) {
                                                                console.error("Upload error:", err);
                                                                alert("Chyba pri nahrávaní obrázka.");
                                                            }
                                                        }
                                                    }}
                                                />

                                                <Plus className="h-6 w-6 text-muted-foreground"/>
                                            </label>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Ďalšie obrázky</label>

                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {Array.from({length: formData.property_images.length + 1}).map((_, i) => (
                                            <div key={i} className="flex flex-col items-center">
                                                {formData.property_images[i] ? (
                                                    <div className="pt-4 pr-2 text-center">
                                                        <img
                                                            src={`/properties/${formData.property_images[i]}`}
                                                            className="h-24 w-24 object-cover rounded border"
                                                        />
                                                        <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            className="mt-2"
                                                            onClick={async () => {
                                                                const filename = formData.property_images[i];
                                                                try {
                                                                    const res = await fetch(`http://localhost:5000/api/upload/${filename}`, {
                                                                        method: "DELETE",
                                                                    });

                                                                    if (res.ok) {
                                                                        const newUrls = formData.property_images.filter((_, idx) => idx !== i);
                                                                        setFormData({
                                                                            ...formData,
                                                                            property_images: newUrls
                                                                        });
                                                                    } else {
                                                                        const result = await res.json();
                                                                        console.error("Delete failed:", result);
                                                                        alert("Nepodarilo sa vymazať obrázok.");
                                                                    }
                                                                } catch (error) {
                                                                    console.error("Error deleting image:", error);
                                                                    alert("Chyba pri mazaní obrázka.");
                                                                }
                                                            }}
                                                        >
                                                            <Trash2 className="h-4 w-4"/>
                                                        </Button>

                                                    </div>
                                                ) : (
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        className="block"
                                                        onChange={async (e) => {
                                                            if (!e.target.files?.[0]) return;
                                                            const file = e.target.files[0];

                                                            // ✅ Upload file to backend
                                                            const formDataUpload = new FormData();
                                                            formDataUpload.append("file", file);

                                                            try {
                                                                const response = await fetch("http://localhost:5000/api/upload", {
                                                                    method: "POST",
                                                                    body: formDataUpload,
                                                                });

                                                                const result = await response.json();

                                                                if (response.ok) {
                                                                    // ✅ Store filename returned by server
                                                                    setFormData({
                                                                        ...formData,
                                                                        property_images: [
                                                                            ...(formData.property_images || []),
                                                                            result.filename,
                                                                        ],
                                                                    });
                                                                } else {
                                                                    console.error("Upload failed:", result);
                                                                    alert("Nepodarilo sa nahrať obrázok.");
                                                                }
                                                            } catch (error) {
                                                                console.error("Upload error:", error);
                                                                alert("Chyba pri nahrávaní obrázka.");
                                                            }
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 🆕 YouTube video section */}
                                <div>
                                    <label className="block mb-1 font-medium">YouTube video URL</label>
                                    <Input
                                        type="url"
                                        placeholder="https://www.youtube.com/watch?v=..."
                                        value={formData.youtube_url || ""}
                                        onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
                                    />
                                    {formData.youtube_url && getYoutubeEmbedUrl(formData.youtube_url) && (
                                        <div className="mt-3">
                                            <p className="text-sm text-muted-foreground mb-2">Náhľad videa:</p>
                                            <iframe
                                                width="300"
                                                height="170"
                                                src={getYoutubeEmbedUrl(formData.youtube_url)}
                                                title="YouTube preview"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg border"
                                            ></iframe>
                                        </div>
                                    )}
                                </div>


                                <div className="flex gap-2">
                                    <Button onClick={handleSaveProperty} className="w-full md:w-auto">
                                    {editingProperty ? (
                                            <>
                                                <Save className="h-4 w-4 mr-2"/> Uložiť zmeny
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="h-4 w-4 mr-2"/> Pridať nehnuteľnosť
                                            </>
                                        )}
                                    </Button>

                                    {editingProperty && (
                                        <Button variant="secondary" onClick={resetForm}>
                                            <X className="h-4 w-4 mr-2"/> Zrušiť úpravu
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* --- Property List --- */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Existujúce nehnuteľnosti</CardTitle>
                                <CardDescription>Spravujte vytvorené nehnuteľnosti</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {loading ? (
                                    <p>Načítavam...</p>
                                ) : (
                                    <div className="space-y-4">
                                        {properties.length === 0 ? (
                                            <p className="text-muted-foreground">Žiadne nehnuteľnosti.</p>
                                        ) : (
                                            properties.map((property) => (
                                                <div
                                                    key={property.id}
                                                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition"
                                                >
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold">{property.property_name}</h3>
                                                        <p className="text-sm text-muted-foreground">{property.address}</p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                          <span className="font-medium text-primary">
                                                            {property.sale_price || property.rent_price || "—"}
                                                          </span>
                                                            <Badge variant={property.status ? "default" : "secondary"}>
                                                                {property.status ? "Aktívna" : "Neaktívna"}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleEditProperty(property)}
                                                        >
                                                            <Edit className="h-4 w-4"/>
                                                        </Button>
                                                        <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            onClick={() => handleDeleteProperty(property.id)}
                                                        >
                                                            <Trash2 className="h-4 w-4"/>
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="slider" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Slider obrázky</CardTitle>
                                <CardDescription>Spravujte obrázky hlavného slideru na homepage</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4">
                                    {/* Show existing slider images + one input for new */}
                                    {Array.from({ length: sliderImages.length + 1 }).map((_, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            {sliderImages[i] ? (
                                                <div className="relative group">
                                                    <img
                                                        src={`/uploads/slider/${sliderImages[i]}`}
                                                        alt={`Slider ${i}`}
                                                        className="h-24 w-40 object-cover rounded border"
                                                    />
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 p-1"
                                                        onClick={async () => {
                                                            const filename = sliderImages[i];
                                                            try {
                                                                const res = await fetch(`/api/upload/slider/${filename}`, { method: "DELETE" });
                                                                if (res.ok) {
                                                                    setSliderImages(sliderImages.filter((_, idx) => idx !== i));
                                                                } else {
                                                                    const result = await res.json();
                                                                    console.error("Delete failed:", result);
                                                                    alert("Nepodarilo sa vymazať obrázok.");
                                                                }
                                                            } catch (err) {
                                                                console.error(err);
                                                                alert("Chyba pri mazaní obrázka.");
                                                            }
                                                        }}
                                                    >
                                                        <X className="h-3 w-3"/>
                                                    </Button>
                                                </div>
                                            ) : (
                                                <label className="h-24 w-40 flex items-center justify-center border border-dashed rounded cursor-pointer">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={async (e) => {
                                                            if (!e.target.files?.[0]) return;
                                                            const file = e.target.files[0];
                                                            const formDataUpload = new FormData();
                                                            formDataUpload.append("file", file);

                                                            try {
                                                                const res = await fetch("/api/upload/slider", {
                                                                    method: "POST",
                                                                    body: formDataUpload,
                                                                });
                                                                const data = await res.json();
                                                                if (res.ok) {
                                                                    setSliderImages([...sliderImages, data.filename]);
                                                                } else {
                                                                    console.error("Upload failed:", data);
                                                                    alert("Nepodarilo sa nahrať obrázok.");
                                                                }
                                                            } catch (err) {
                                                                console.error(err);
                                                                alert("Chyba pri nahrávaní obrázka.");
                                                            }
                                                        }}
                                                    />
                                                    <Plus className="h-6 w-6 text-muted-foreground"/>
                                                </label>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="blog" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>{editingBlog ? "Upraviť blog" : "Pridať blog"}</CardTitle>
                                <CardDescription>
                                    {editingBlog ? "Upravte existujúci blog" : "Vytvorte nový blogový článok"}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    placeholder="Názov blogu"
                                    value={blogForm.title || ""}
                                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                />

                                <label className="block mb-1 font-medium">Hlavný obrázok</label>
                                {blogForm.main_image ? (
                                    <div className="relative group">
                                        <img
                                            src={`/blog/${blogForm.main_image}`}
                                            alt="Blog main"
                                            className="h-40 w-60 object-cover rounded"
                                        />
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 p-1"
                                            onClick={async () => {
                                                const filename = blogForm.main_image;
                                                const res = await fetch(`/api/upload/blog/${filename}`, { method: "DELETE" });
                                                if (res.ok) setBlogForm({ ...blogForm, main_image: "" });
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <label className="h-40 w-60 flex items-center justify-center border border-dashed rounded cursor-pointer">
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={async (e) => {
                                                if (!e.target.files?.[0]) return;
                                                const file = e.target.files[0];
                                                const formDataUpload = new FormData();
                                                formDataUpload.append("file", file);
                                                const res = await fetch("/api/upload/blog", { method: "POST", body: formDataUpload });
                                                const data = await res.json();
                                                if (res.ok) setBlogForm({ ...blogForm, main_image: data.filename });
                                            }}
                                        />
                                        <Plus className="h-6 w-6 text-muted-foreground" />
                                    </label>
                                )}

                                <label className="block mb-1 font-medium">Obsah blogu</label>
                                <ReactQuill
                                    theme="snow"
                                    value={blogForm.content || ""}
                                    onChange={(value) => setBlogForm({ ...blogForm, content: value })}
                                />

                                <div className="flex gap-2">
                                    <Button onClick={handleSaveBlog} className="w-full md:w-auto">
                                        {editingBlog ? <Save className="h-4 w-4 mr-2"/> : <Plus className="h-4 w-4 mr-2"/>}
                                        {editingBlog ? "Uložiť zmeny" : "Pridať blog"}
                                    </Button>
                                    {editingBlog && (
                                        <Button variant="secondary" onClick={resetBlogForm}>
                                            <X className="h-4 w-4 mr-2"/> Zrušiť úpravu
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Blog List */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Existujúce blogy</CardTitle>
                                <CardDescription>Spravujte blogové články</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {blogs.length === 0 ? (
                                    <p className="text-muted-foreground">Žiadne blogy.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {blogs.map((b) => (
                                            <div key={b.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold">{b.title}</h3>
                                                    {b.main_image && <img src={`/blog/${b.main_image}`} className="h-20 w-32 object-cover mt-2 rounded"/>}
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm" onClick={() => handleEditBlog(b)}>
                                                        <Edit className="h-4 w-4"/>
                                                    </Button>
                                                    <Button variant="destructive" size="sm" onClick={() => handleDeleteBlog(b.id)}>
                                                        <Trash2 className="h-4 w-4"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="recenzie" className="space-y-6"><AdminReviews/></TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
