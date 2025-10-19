import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Switch} from "@/components/ui/switch";
import {Badge} from "@/components/ui/badge";
import {Trash2, Edit, Plus, Save, X} from "lucide-react";
import {Property, City, PropertyType} from "@/pages/Properties.tsx";

const Admin = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [types, setTypes] = useState<PropertyType[]>([]);
    const [loading, setLoading] = useState(false);
    const [editingProperty, setEditingProperty] = useState<Property | null>(null);
    const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);
    const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null);
    const [propertyImagesFiles, setPropertyImagesFiles] = useState<File[]>([]);
    const [propertyImagesUrls, setPropertyImagesUrls] = useState<string[]>([]);

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
            status: 1,
        });
    };

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
                    <p className="text-muted-foreground">Správa nehnuteľností a obsahu</p>
                </header>

                <Tabs defaultValue="posts" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="posts">Nehnuteľnosti</TabsTrigger>
                        <TabsTrigger value="settings">Nastavenia</TabsTrigger>
                        <TabsTrigger value="analytics">Štatistiky</TabsTrigger>
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
                                  onChange={(e) => setFormData({...formData, sale_price: e.target.value})}
                              />
                              <Input
                                  placeholder="Cena prenájmu (€)"
                                  value={formData.rent_price || ""}
                                  onChange={(e) => setFormData({...formData, rent_price: e.target.value})}
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
                                  placeholder="Počet kúpeľní"
                                  type="number"
                                  value={formData.bathrooms || ""}
                                  onChange={(e) => setFormData({
                                    ...formData,
                                    bathrooms: parseInt(e.target.value)
                                  })}
                              />
                              <div className="flex items-center gap-2">
                                <Switch
                                    checked={!!formData.status}
                                    onCheckedChange={(v) => setFormData({...formData, status: v ? 1 : 0})}
                                />
                                <span>Aktívna</span>
                              </div>
                            </div>

                            <Input
                                placeholder="Adresa"
                                value={formData.address || ""}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                            />
                            <Textarea
                                placeholder="Popis nehnuteľnosti"
                                value={formData.description || ""}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                            />

                            <div>
                              <label className="block mb-1 font-medium">Hlavný obrázok</label>

                              <div className="flex gap-2">
                                {featuredImageUrl ? (
                                    <div className="relative group">
                                      <img
                                          src={featuredImageUrl}
                                          alt="Featured"
                                          className="h-24 w-24 object-cover rounded cursor-pointer"
                                      />
                                      <button
                                          type="button"
                                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                          onClick={() => {
                                            setFeaturedImageFile(null);
                                            setFeaturedImageUrl(null);
                                          }}
                                      >
                                        <X className="h-3 w-3"/>
                                      </button>
                                    </div>
                                ) : (
                                    <label
                                        className="h-24 w-24 flex items-center justify-center border border-dashed rounded cursor-pointer">
                                      <input
                                          type="file"
                                          accept="image/*"
                                          className="hidden"
                                          onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                              const file = e.target.files[0];
                                              const tempUrl = URL.createObjectURL(file);
                                              setFeaturedImageFile(file);
                                              setFeaturedImageUrl(tempUrl);
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

                              <div className="flex mt-2">
                                {Array.from({length: propertyImagesUrls.length + 1}).map((_, i) => (
                                    <div key={i} className="flex items-center gap-2 mb-2">
                                      {propertyImagesUrls[i] ? (
                                          <div className="block pt-4 pr-2" style={{textAlign: 'center'}}>
                                            <img src={propertyImagesUrls[i]}
                                                 className="h-24 w-24 object-cover rounded"/>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="mt-2"
                                                onClick={() => {
                                                  const newUrls = propertyImagesUrls.filter((_, idx) => idx !== i);
                                                  setPropertyImagesUrls(newUrls);
                                                }}
                                            >
                                              <Trash2 className="h-4 w-4"/>
                                            </Button>
                                          </div>
                                      ) : (
                                          // Empty slot for new image
                                          <Input
                                              type="file"
                                              accept="image/*"
                                              className="block"
                                              onChange={(e) => {
                                                if (e.target.files?.[0]) {
                                                  const file = e.target.files[0];
                                                  const tempUrl = URL.createObjectURL(file);
                                                  setPropertyImagesUrls([...propertyImagesUrls, tempUrl]);
                                                }
                                              }}
                                          />
                                      )}
                                    </div>
                                ))}
                              </div>
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
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
