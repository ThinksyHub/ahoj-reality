import { useParams, useNavigate } from "react-router-dom";
import { Bed, Square, MapPin, Heart, Share2, Phone, Mail, Calendar, Star, Car, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {City, Property, PropertyType} from "./Properties";
import DOMPurify from "dompurify";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [property, setProperty] = useState<Property>();
  const [images, setImages] = useState<string[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setProperty(data);
      setImages([
        data.property_images1,
        data.property_images2,
        data.property_images3,
        data.property_images4,
        data.property_images5,
      ]);
    })
    .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/api/cities")
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch('/api/property_types')
    .then((res) => res.json())
    .then((data) => setPropertyTypes(data))
    .catch((err) => console.error(err))
  }, [])
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Nehnuteľnosť sa nenašla</h1>
          <Button onClick={() => navigate("/")} className="btn-golden">
            Späť na hlavnú stránku
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Property Details - Main Layout */}
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Main Image and Gallery */}
            <div>
              {/* Main Image */}
              <div className="mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <AspectRatio ratio={4/3} className="overflow-hidden">
                        <img
                          src={`/properties/${property.featured_image}-b.jpg`}
                          alt={property.property_name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 border-0">
                    <div className="relative">
                      <img
                        src={`/properties/${property.featured_image}-b.jpg`}
                        alt={property.property_name}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Gallery Section */}
              <div>
                <h3 className="font-serif text-xl font-normal text-primary mb-4">Galéria fotografií</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {images.slice(1, 6).map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer">
                          <AspectRatio ratio={4/3} className="overflow-hidden">
                            <img
                              src={`/properties/${image}-b.jpg`}
                              alt={``}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 border-0">
                        <div className="relative">
                          <img
                            src={`/properties/${image}-b.jpg`}
                            alt={`${property.property_name} ${index + 2}`}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                {/* {images.length > 5 && (
                  <div className="text-center pt-4">
                    <span className="text-sm text-muted-foreground">
                      +{images.length - 5} ďalších fotografií
                    </span>
                  </div>
                )} */}
              </div>
            </div>

            {/* Right Side - Property Details */}
            <div>
              {/* Property Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="font-serif text-3xl font-normal text-primary">
                    {property.property_name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span className="bg-golden text-black px-3 py-1 rounded-full text-xs font-medium">
                      {propertyTypes.find((t) => t.id === Number(property.property_type))?.types ?? "Unknown" }
                    </span>
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {property.property_purpose}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-golden" />
                    <span className="text-lg">{property.address}, {cities.find((city) => city.id === property.city_id)?.city_name}</span>
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="mb-8 bg-card rounded-lg border border-border/20 overflow-hidden">
                <div className="grid grid-cols-4 gap-0">
                  <div className="text-center p-3 border-b border-border/10">
                    <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Bed className="w-3 h-3 text-golden" />
                    </div>
                    <div className="text-sm font-bold text-primary">{property.bedrooms}</div>
                  </div>
                  
                  <div className="text-center p-3 border-b border-l border-border/10">
                    <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                      <img className="w-3 h-3 text-golden" src="/src/assets/icons/balcony_yellow.png"/>
                    </div>
                    <div className="text-sm font-bold text-primary">{property.bathrooms}</div>
                  </div>
                  
                  <div className="text-center p-3 border-b border-l border-border/10">
                    <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Square className="w-3 h-3 text-golden" />
                    </div>
                    <div className="text-sm font-bold text-primary">{property.area}</div>
                  </div>

                  <div className="text-center p-3 border-b border-l border-border/10">
                    <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Car className="w-3 h-3 text-golden" />
                    </div>
                    <div className="text-sm font-bold text-primary">3</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              {/* <div className="mb-8">
                <h2 className="font-serif text-xl font-normal text-primary mb-4">Vybavenie a vlastnosti</h2>
                <div className="grid grid-cols-1 gap-2">
                  {property.features.slice(0, isFeaturesExpanded ? property.features.length : 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                {property.features.length > 3 && (
                  <button
                    onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
                    className="flex items-center mt-2 text-golden hover:text-golden/80 transition-colors text-sm font-medium"
                  >
                    {isFeaturesExpanded ? (
                      <>
                        Zobraziť menej <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Zobraziť viac <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div> */}

              {/* Description with Expander */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-normal text-primary mb-4">Popis nehnuteľnosti</h2>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  <p className={`transition-all duration-300 ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(property.description),
                    }}
                  />
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="flex items-center mt-2 text-golden hover:text-golden/80 transition-colors text-sm font-medium"
                  >
                    {isDescriptionExpanded ? (
                      <>
                        Zobraziť menej <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Zobraziť viac <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-8 flex justify-end">
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary flex items-center">
                    {property.sale_price || property.rent_price} €
                  </div>
                </div>
              </div>

              {/* ContactForm Section */}
              <div>
                <Card className="p-6 bg-card border border-border/10 shadow-sm">
                  <h3 className="font-serif text-xl font-normal text-primary text-center mb-6">Kontaktujte nás</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button className="btn-golden text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Zavolať teraz
                    </Button>
                    
                    <Button className="btn-golden text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Poslať email
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Naplánovať prehliadku
                  </Button>
                </Card>
                
                {/* Agent Section */}
                <Card className="p-4 bg-card border border-border/10 shadow-sm mt-4">
                  <h3 className="font-serif text-lg font-normal text-primary text-center mb-4">Tvoj maklér</h3>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/src/assets/team/jana-svobodova.jpg" 
                      alt="Jana Svobodová" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-primary">Jana Svobodová</div>
                      <div className="text-sm text-muted-foreground">Certifikovaný maklér</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Why Choose Us Section - Full Width Background */}
      <div className="w-full bg-gradient-to-br from-primary/5 to-golden/5 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/kvalita.png" alt="Kvalita" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Kvalita</div>
                <div className="text-muted-foreground">Najvyššie štandardy</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/rychlost.png" alt="Rýchlosť" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Rýchlosť</div>
                <div className="text-muted-foreground">Efektívne riešenia</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/ludskost.png" alt="Ľudskosť" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Ľudskosť</div>
                <div className="text-muted-foreground">Osobný prístup</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/loajalita.png" alt="Loajalita" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Loajalita</div>
                <div className="text-muted-foreground">Dlhodobé partnerstvo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;