
import PropertyCard from "./PropertyCard";
import { Property, PropertyType } from "@/data/properties";

interface PropertyGridProps {
  properties: Property[];
  selectedType: PropertyType | null;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, selectedType }) => {
  const filteredProperties = selectedType 
    ? properties.filter(property => property.type === selectedType)
    : properties;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
          <p className="mt-2 text-sm text-gray-500">Try changing your filters</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
