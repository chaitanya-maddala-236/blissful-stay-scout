
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Property } from "@/data/properties";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="border-none shadow-none hover:shadow-sm transition-all overflow-hidden group">
      <div className="relative">
        <AspectRatio ratio={4/3}>
          <img
            src={property.image}
            alt={property.title}
            className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        {property.superhost && (
          <Badge 
            className="absolute top-2 left-2 bg-white text-airbnb-dark font-medium"
          >
            Superhost
          </Badge>
        )}
      </div>
      <CardContent className="px-0 pt-3 pb-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-lg text-airbnb-dark truncate">{property.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-airbnb-primary text-airbnb-primary" />
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <div className="mt-1 text-gray-500 text-sm">
          {property.beds} bed{property.beds !== 1 ? 's' : ''} · {property.baths} bath{property.baths !== 1 ? 's' : ''}
        </div>
        <p className="mt-2 font-semibold">
          ${property.price} <span className="font-normal text-gray-500">night</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
