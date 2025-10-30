import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Feature", link: "/feature" },
    { name: "UMKM", link: "/umkm" },
  ];

  const handleMenuClick = () => setIsMobileMenuOpen(false);

  const renderMenuItems = (isMobile = false) =>
    menuItems.map((navItem, index) => {
      const isActive = location.pathname === navItem.link;
      return (
        <li key={index} className="relative group">
          <a
            href={navItem.link}
            onClick={isMobile ? handleMenuClick : undefined}
            className={`text-light font-medium transition-colors duration-300 ${
              isActive ? "text-accent" : "hover:text-accent"
            }`}
          >
            {navItem.name}
            {/* underline animasi */}
            <span
              className={`absolute left-0 bottom-[-4px] h-[2px] bg-accent transition-all duration-300 ease-in-out ${
                isActive
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        </li>
      );
    });

  return (
    <nav
      className={`flex justify-between px-6 md:px-24 py-4 mb-6 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-dark/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="font-semibold text-lg text-light md:block absolute md:relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
        Milarian
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 mr-16">{renderMenuItems()}</ul>

      {/* Burger Menu Button */}
      <button
        className="md:hidden text-light focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-dark/80 backdrop-blur-md md:hidden overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          style={{
            height: "2px",
            backgroundColor: "#FF0000",
            margin: "8px 24px 0",
          }}
        ></div>
        <ul className="flex flex-col items-center py-6 gap-6">
          {renderMenuItems(true)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
