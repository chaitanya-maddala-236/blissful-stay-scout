
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

const SearchBar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(1);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-md p-2 flex flex-col md:flex-row">
      <div className="flex-1 relative min-w-0 px-4 py-2 md:border-r">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-airbnb-primary mr-2" />
          <Input 
            className="border-0 p-0 shadow-none focus-visible:ring-0 placeholder:text-gray-500" 
            placeholder="Where to?" 
          />
        </div>
      </div>

      <div className="flex-1 relative min-w-0 px-4 py-2 md:border-r">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-left font-normal px-0"
            >
              <CalendarIcon className="h-5 w-5 text-airbnb-primary mr-2" />
              {date ? (
                format(date, "MMM d, yyyy")
              ) : (
                <span className="text-gray-500">Select date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 relative min-w-0 px-4 py-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-left font-normal px-0"
            >
              <Users className="h-5 w-5 text-airbnb-primary mr-2" />
              <span>{guests} Guest{guests !== 1 ? 's' : ''}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Guests</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 rounded-full"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 rounded-full"
                    onClick={() => setGuests(guests + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Button className="ml-auto mt-2 md:mt-0 md:ml-2 bg-airbnb-primary hover:bg-airbnb-primary/90 text-white rounded-full">
        <Search className="h-4 w-4 mr-2" /> Search
      </Button>
    </div>
  );
};

export default SearchBar;
