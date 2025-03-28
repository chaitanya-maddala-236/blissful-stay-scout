import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Home, Building, Mountain, Ship, Trees } from "lucide-react";
import { PropertyType, propertyTypes } from "@/data/properties";

interface FilterBarProps {
  selectedType: PropertyType | null;
  onSelectType: (type: PropertyType | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedType, onSelectType }) => {
  const getIconForType = (type: string) => {
    switch (type) {
      case 'house':
        return <Home className="h-5 w-5" />;
      case 'apartment':
        return <Building className="h-5 w-5" />;
      case 'cabin':
        return <Mountain className="h-5 w-5" />;
      case 'villa':
        return <Home className="h-5 w-5" />;
      case 'boat':
        return <Ship className="h-5 w-5" />;
      case 'treehouse':
        return <Trees className="h-5 w-5" />;
      default:
        return <Home className="h-5 w-5" />;
    }
  };

  return (
    <div className="py-4 border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-3">
          <Button
            variant={selectedType === null ? "default" : "outline"}
            className={`flex flex-col items-center rounded-lg px-4 py-2 ${
              selectedType === null ? "bg-airbnb-primary text-white" : ""
            }`}
            onClick={() => onSelectType(null)}
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">All</span>
          </Button>

          {propertyTypes.map((type) => (
            <Button
              key={type.value}
              variant={selectedType === type.value ? "default" : "outline"}
              className={`flex flex-col items-center rounded-lg px-4 py-2 ${
                selectedType === type.value ? "bg-airbnb-primary text-white" : ""
              }`}
              onClick={() => onSelectType(type.value as PropertyType)}
            >
              {getIconForType(type.value)}
              <span className="text-xs mt-1">{type.label}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FilterBar;
