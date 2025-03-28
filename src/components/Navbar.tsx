
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b py-4 px-4 md:px-8 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-airbnb-primary rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </div>
            {!isMobile && (
              <span className="text-airbnb-primary font-bold text-xl">BlissfulStay</span>
            )}
          </a>
        </div>

        {/* Search bar on desktop */}
        {!isMobile && (
          <div className="hidden md:flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition-all">
            <button className="px-4 font-medium text-sm">Anywhere</button>
            <span className="h-5 border-r border-gray-300"></span>
            <button className="px-4 font-medium text-sm">Any week</button>
            <span className="h-5 border-r border-gray-300"></span>
            <button className="px-4 text-gray-500 text-sm">Add guests</button>
            <Button size="icon" variant="default" className="rounded-full bg-airbnb-primary text-white ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* User menu */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full">
            Become a host
          </a>
          <div className="flex items-center gap-2 border rounded-full p-2 hover:shadow-md transition-all cursor-pointer">
            <div className="p-1">
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
