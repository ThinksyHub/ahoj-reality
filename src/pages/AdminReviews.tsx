import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Trash2, Edit, Plus, Save, X } from "lucide-react";

export interface Review {
    id: number;
    name: string;
    source: string;
    text: string;
    rating: number;
}

const AdminReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [form, setForm] = useState<Partial<Review>>({
        name: "",
        source: "Web",
        text: "",
        rating: 5
    });

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
            const res = await fetch("/api/review");
            const data = await res.json();
            setReviews(data);
        } catch (err) {
            console.error("Chyba pri načítaní recenzií:", err);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Save (Create / Update) review
// Save (Create or Update) review using POST
    const handleSaveReview = async () => {
        if (!form.name || !form.text) return alert("Vyplňte meno a text recenzie.");

        // For both new and edited reviews, send POST
        const url = "/api/review";

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: editingReview?.id, // include id if editing
                    ...form
                }),
            });

            if (!res.ok) throw new Error("Nepodarilo sa uložiť recenziu.");
            await fetchReviews();
            resetForm();
        } catch (err) {
            console.error(err);
            alert("Nepodarilo sa uložiť recenziu.");
        }
    };



    // Edit review
    const handleEditReview = (review: Review) => {
        setEditingReview(review);
        setForm(review);
    };

    // Delete review
    const handleDeleteReview = async (id: number) => {
        if (!confirm("Naozaj chcete vymazať túto recenziu?")) return;
        try {
            const res = await fetch(`/api/review/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Nepodarilo sa vymazať recenziu.");
            await fetchReviews();
            resetForm();
        } catch (err) {
            console.error(err);
            alert("Nepodarilo sa vymazať recenziu.");
        }
    };

    const resetForm = () => {
        setEditingReview(null);
        setForm({ name: "", source: "Web", text: "", rating: 5 });
    };

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel - Recenzie</h1>
                    <p className="text-muted-foreground">Správa recenzií od klientov</p>
                </header>

                {/* Form to add/edit review */}
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>{editingReview ? "Upraviť recenziu" : "Pridať recenziu"}</CardTitle>
                        <CardDescription>
                            {editingReview ? "Upravte existujúcu recenziu" : "Vytvorte novú recenziu od klienta"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            placeholder="Meno klienta"
                            value={form.name || ""}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Select
                            value={form.source || "Web"}
                            onValueChange={(val) => setForm({ ...form, source: val })}
                        >
                            <SelectTrigger>
                                <SelectValue>{form.source}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Web">Web</SelectItem>
                                <SelectItem value="Facebook">Facebook</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            placeholder="Text recenzie"
                            value={form.text || ""}
                            onChange={(e) => setForm({ ...form, text: e.target.value })}
                        />
                        <Input
                            type="number"
                            min={1}
                            max={5}
                            placeholder="Hodnotenie (1-5)"
                            value={form.rating || 5}
                            onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
                        />

                        <div className="flex gap-2">
                            <Button onClick={handleSaveReview} className="w-full md:w-auto">
                                {editingReview ? <Save className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {editingReview ? "Uložiť zmeny" : "Pridať recenziu"}
                            </Button>
                            {editingReview && (
                                <Button variant="secondary" onClick={resetForm}>
                                    <X className="h-4 w-4 mr-2" /> Zrušiť úpravu
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Reviews list */}
                <Card>
                    <CardHeader>
                        <CardTitle>Existujúce recenzie</CardTitle>
                        <CardDescription>Spravujte recenzie klientov</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {reviews.length === 0 ? (
                            <p className="text-muted-foreground">Žiadne recenzie.</p>
                        ) : (
                            <div className="space-y-4">
                                {reviews.map((r) => (
                                    <div key={r.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition">
                                        <div className="flex-1">
                                            <p className="font-semibold">{r.name} ({r.source})</p>
                                            <p className="text-sm mt-1">{r.text}</p>
                                            <p className="text-xs mt-1">Hodnotenie: {r.rating}/5</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={() => handleEditReview(r)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleDeleteReview(r.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminReviews;
