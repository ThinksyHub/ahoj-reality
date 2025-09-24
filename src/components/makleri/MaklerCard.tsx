import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface MaklerCardProps {
  name: string;
  position: string;
  description: string;
  phone: string;
  email: string;
  image: string;
}

const MaklerCard = ({ name, position, description, phone, email, image }: MaklerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-golden font-semibold mb-4">{position}</p>
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mr-3 text-golden flex-shrink-0" />
            <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-3 text-golden flex-shrink-0" />
            <a href={`mailto:${email}`} className="hover:text-primary transition-colors break-all">
              {email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaklerCard;