import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactFillingForm = () => {
    const [form, setForm] = useState({
        meno: "",
        priezvisko: "",
        email: "",
        telefon: "",
        sprava: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.meno || !form.priezvisko || !form.email || !form.sprava) {
            return alert("Vyplňte všetky povinné polia!");
        }

        setLoading(true);

        try {
            await emailjs.send(
                "service_d1fhbl3",    // e.g. "service_abc123"
                "template_ipagv2l",   // e.g. "template_xyz456"
                {
                    meno: form.meno,
                    priezvisko: form.priezvisko,
                    email: form.email,
                    telefon: form.telefon,
                    sprava: form.sprava,
                },
                "_2kyOozyOlNQdEBO8"     // e.g. "user_123abc456def"
            );

            setSuccess("Správa bola úspešne odoslaná!");
            setForm({ meno: "", priezvisko: "", email: "", telefon: "", sprava: "" });
        } catch (err) {
            console.error(err);
            alert("Nepodarilo sa odoslať správu. Skúste to znova.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    name="meno"
                    placeholder="Meno"
                    value={form.meno}
                    onChange={handleChange}
                    required
                />
                <Input
                    name="priezvisko"
                    placeholder="Priezvisko"
                    value={form.priezvisko}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    name="telefon"
                    placeholder="Telefón"
                    value={form.telefon}
                    onChange={handleChange}
                />
            </div>

            <Textarea
                name="sprava"
                placeholder="Správa"
                value={form.sprava}
                onChange={handleChange}
                required
                rows={5}
            />

            <Button type="submit" disabled={loading} className="flex items-center gap-2">
                <Send className="w-4 h-4" /> {loading ? "Odosielanie..." : "Odoslať správu"}
            </Button>

            {success && <p className="text-green-600 mt-2">{success}</p>}
        </form>
    );
};

export default ContactFillingForm;