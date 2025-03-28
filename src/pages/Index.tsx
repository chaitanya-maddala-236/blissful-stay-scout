
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";
import { properties, PropertyType } from "@/data/properties";

const Index = () => {
  const [selectedType, setSelectedType] = useState<PropertyType | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-airbnb-dark mb-4">Find your perfect stay</h1>
          <SearchBar />
        </div>
        
        <FilterBar 
          selectedType={selectedType} 
          onSelectType={setSelectedType} 
        />
        
        <div className="mt-6">
          <PropertyGrid 
            properties={properties} 
            selectedType={selectedType} 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
